import { normaliseCandidates, validCoordinates } from './domain.mjs';

const BASE = 'https://mapaosc.ipea.gov.br/api/api';

async function request(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(`${BASE}${path}`, { ...options, signal: controller.signal });
    if (!response.ok) throw new Error(`Mapa das OSC respondeu HTTP ${response.status}.`);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('O Mapa das OSC demorou a responder. Tente novamente.');
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

export async function searchMunicipalities(query) {
  const text = query.trim();
  if (text.length < 3 || text.length > 80) return [];
  const rows = await request(`/busca/municipio/${encodeURIComponent(text)}`);
  if (!Array.isArray(rows)) throw new Error('Formato inesperado da busca de municípios.');
  return rows.filter((row) => /^\d{7}$/.test(String(row.edmu_cd_municipio)) && row.edmu_nm_municipio && row.eduf_sg_uf)
    .slice(0, 8).map((row) => ({ code: String(row.edmu_cd_municipio), name: row.edmu_nm_municipio, uf: row.eduf_sg_uf }));
}

export async function searchRelatedOrganizations(location) {
  if (location.mode === 'gps') {
    if (!validCoordinates(location.lat, location.lon)) throw new Error('Localização inválida.');
    const lat = location.lat.toFixed(5);
    const lon = location.lon.toFixed(5);
    return normaliseCandidates(await request(`/lista_por_area_atuacao/5/${lat}/${lon}`));
  }
  if (location.mode === 'municipality' && /^\d{7}$/.test(location.code)) {
    const body = { avancado: { dadosGerais: { cd_municipio: location.code }, areasSubareasAtuacao: { 'cd_area_atuacao-5': true } } };
    const rows = await request('/osc/busca_avancada/lista/8/0', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
    });
    return normaliseCandidates(rows);
  }
  throw new Error('Escolha um município ou use sua localização.');
}
