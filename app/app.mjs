import { visibleServices } from './domain.mjs';
import { searchMunicipalities, searchRelatedOrganizations } from './mapa-api.mjs';

const $ = (id) => document.getElementById(id);
const form = $('search-form');
const input = $('municipality-input');
const suggestions = $('municipality-options');
const locationStatus = $('location-status');
const gpsButton = $('gps-button');
const pilotButton = $('pilot-button');
const submitButton = $('submit-button');
let location = null;
let services = [];
let suggestionSequence = 0;
let suggestionTimer;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(text, href, className = '') {
  const link = element('a', className, text);
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function setLocation(next) {
  ++suggestionSequence;
  clearTimeout(suggestionTimer);
  location = next;
  $('results').hidden = true;
  suggestions.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  if (next.mode === 'municipality') {
    input.value = `${next.name}, ${next.uf}`;
    locationStatus.textContent = `Município selecionado: ${next.name}, ${next.uf}.`;
  } else {
    input.value = '';
    locationStatus.textContent = 'Localização obtida. As coordenadas serão enviadas ao Mapa das OSC apenas ao buscar organizações próximas.';
  }
}

function renderSuggestions(items) {
  suggestions.replaceChildren();
  if (!items.length) {
    suggestions.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    locationStatus.textContent = 'Nenhum município encontrado. Tente outro nome.';
    return;
  }
  for (const item of items) {
    const button = element('button', 'suggestion', `${item.name}, ${item.uf}`);
    button.type = 'button';
    button.setAttribute('role', 'option');
    button.addEventListener('click', () => setLocation({ mode: 'municipality', ...item }));
    suggestions.append(button);
  }
  suggestions.hidden = false;
  input.setAttribute('aria-expanded', 'true');
  locationStatus.textContent = 'Selecione o município e a UF na lista.';
}

input.addEventListener('input', () => {
  const sequence = ++suggestionSequence;
  location = null;
  $('results').hidden = true;
  suggestions.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  clearTimeout(suggestionTimer);
  const query = input.value.trim();
  if (query.length < 3) {
    locationStatus.textContent = 'Digite pelo menos três letras para buscar um município.';
    return;
  }
  locationStatus.textContent = 'Buscando municípios…';
  suggestionTimer = setTimeout(async () => {
    try {
      const items = await searchMunicipalities(query);
      if (sequence === suggestionSequence) renderSuggestions(items);
    } catch {
      if (sequence === suggestionSequence) locationStatus.textContent = 'Não foi possível consultar os municípios. Tente novamente ou use São Paulo, SP.';
    }
  }, 300);
});

form.addEventListener('change', () => { $('results').hidden = true; });

input.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    suggestions.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }
});

pilotButton.addEventListener('click', () => setLocation({ mode: 'municipality', code: '3550308', name: 'São Paulo', uf: 'SP' }));

gpsButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    locationStatus.textContent = 'Este navegador não oferece localização. Escolha um município.';
    return;
  }
  gpsButton.disabled = true;
  locationStatus.textContent = 'Solicitando sua localização ao navegador…';
  navigator.geolocation.getCurrentPosition(
    (position) => {
      gpsButton.disabled = false;
      setLocation({ mode: 'gps', lat: position.coords.latitude, lon: position.coords.longitude });
    },
    () => {
      gpsButton.disabled = false;
      locationStatus.textContent = 'Não foi possível obter sua localização. Escolha um município para continuar.';
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 0 },
  );
});

function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

function renderService(service) {
  const card = element('article', 'service-card');
  const top = element('div', 'card-top');
  top.append(element('span', 'documented-badge', 'Oferta documentada'));
  if (service.distance_km !== undefined) top.append(element('span', 'distance', `${service.distance_km.toFixed(1).replace('.', ',')} km da sua posição`));
  card.append(top, element('h4', '', service.title), element('p', 'organization-name', service.organization));
  const address = element('p', 'address');
  address.append(element('span', 'address-icon', '⌖'), document.createTextNode(service.address));
  card.append(address, element('p', 'access-note', service.access));
  card.append(element('p', 'date-note', `Fonte atualizada em ${formatDate(service.source_updated_at)} · consultada em ${formatDate(service.checked_at)}`));
  const actions = element('div', 'card-actions');
  const mapUrl = `https://www.openstreetmap.org/?mlat=${service.lat}&mlon=${service.lon}#map=17/${service.lat}/${service.lon}`;
  actions.append(externalLink('Ver localização ↗', mapUrl, 'card-primary-link'));
  actions.append(externalLink('Fonte da oferta ↗', service.source_url));
  actions.append(externalLink('Ficha da OSC ↗', `https://mapaosc.ipea.gov.br/detalhar/${service.osc_id}`));
  card.append(actions);
  return card;
}

function renderCandidates(candidates, error) {
  const list = $('candidate-list');
  list.replaceChildren();
  if (error) {
    const detail = error instanceof TypeError ? 'Verifique sua conexão e tente novamente.' : error.message;
    list.append(element('p', 'candidate-error', `Não foi possível consultar o Mapa das OSC. ${detail}`));
    return;
  }
  if (!candidates.length) {
    list.append(element('p', 'candidate-empty', 'Nenhuma organização relacionada apareceu nesta busca. Isso não significa que não exista ajuda na região.'));
    return;
  }
  for (const candidate of candidates) {
    const item = element('article', 'candidate-item');
    const info = element('div');
    info.append(element('h4', '', candidate.name));
    if (candidate.address) info.append(element('p', '', candidate.address));
    else info.append(element('p', '', 'Endereço não informado nesta listagem.'));
    item.append(info, externalLink('Ver no Mapa das OSC ↗', `https://mapaosc.ipea.gov.br/detalhar/${candidate.id}`));
    list.append(item);
  }
}

function renderResults(need, candidates, error) {
  const matched = visibleServices(services, need, location);
  const documentedIds = new Set(matched.map((service) => service.osc_id));
  $('verified-list').replaceChildren(...matched.map(renderService));
  $('verified-count').textContent = `${matched.length} ${matched.length === 1 ? 'local' : 'locais'}`;
  $('verified-section').hidden = matched.length === 0;
  const context = location.mode === 'gps' ? 'Próximo à sua posição' : `${location.name}, ${location.uf}`;
  $('results-context').textContent = `${need === 'meal' ? 'Refeições' : 'Outros alimentos'} · ${context}`;
  const notice = $('results-message');
  if (!matched.length) {
    notice.textContent = need === 'other'
      ? 'Ainda não há ofertas documentadas de cestas ou mantimentos nesta POC. Veja abaixo organizações relacionadas, sem garantia desse atendimento.'
      : 'Ainda não há oferta documentada nesta localidade piloto. Veja abaixo organizações relacionadas, sem garantia de refeições.';
    notice.hidden = false;
  } else {
    notice.hidden = true;
  }
  renderCandidates(candidates.filter((candidate) => !documentedIds.has(candidate.id)), error);
  $('results').hidden = false;
  $('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!location) {
    locationStatus.textContent = 'Escolha um município na lista ou use sua localização antes de buscar.';
    input.focus();
    return;
  }
  const need = new FormData(form).get('need');
  submitButton.disabled = true;
  submitButton.textContent = 'Buscando…';
  let candidates = [];
  let error = null;
  try {
    candidates = await searchRelatedOrganizations(location);
  } catch (failure) {
    error = failure;
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Encontrar ajuda <span aria-hidden="true">→</span>';
  }
  renderResults(need, candidates, error);
});

$('edit-search').addEventListener('click', () => $('search-heading').scrollIntoView({ behavior: 'smooth', block: 'start' }));

try {
  const response = await fetch('./data/services.json');
  if (!response.ok) throw new Error('Não foi possível carregar as ofertas documentadas.');
  services = await response.json();
} catch {
  services = [];
  locationStatus.textContent = 'As ofertas locais não carregaram. Você ainda pode consultar organizações relacionadas no Mapa das OSC.';
}
