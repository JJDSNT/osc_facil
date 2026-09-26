export function validCoordinates(latitude, longitude) {
  return Number.isFinite(latitude) && Number.isFinite(longitude)
    && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180;
}

export function distanceKm(origin, target) {
  if (!validCoordinates(origin.lat, origin.lon) || !validCoordinates(target.lat, target.lon)) return null;
  const radians = (value) => value * Math.PI / 180;
  const latDelta = radians(target.lat - origin.lat);
  const lonDelta = radians(target.lon - origin.lon);
  const a = Math.sin(latDelta / 2) ** 2
    + Math.cos(radians(origin.lat)) * Math.cos(radians(target.lat)) * Math.sin(lonDelta / 2) ** 2;
  return 6371.0088 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function visibleServices(services, need, location) {
  const matching = services.filter((service) => service.kind === need && service.verification === 'documented_by_public_authority');
  if (location.mode === 'municipality') {
    return matching.filter((service) => service.municipality_code === location.code);
  }
  if (location.mode === 'gps') {
    return matching.map((service) => ({ ...service, distance_km: distanceKm(location, service) }))
      .filter((service) => service.distance_km !== null && service.distance_km <= 35)
      .sort((a, b) => a.distance_km - b.distance_km);
  }
  return [];
}

export function normaliseCandidates(rows) {
  if (!Array.isArray(rows)) throw new Error('Formato inesperado da resposta do Mapa das OSC.');
  return rows.filter((row) => Number.isInteger(row.id_osc) && typeof row.tx_nome_osc === 'string')
    .map((row) => ({ id: row.id_osc, name: row.tx_nome_osc, address: row.tx_endereco_osc || null }));
}
