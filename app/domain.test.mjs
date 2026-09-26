import test from 'node:test';
import assert from 'node:assert/strict';
import { distanceKm, visibleServices, normaliseCandidates } from './domain.mjs';

test('GPS ordena ofertas documentadas próximas e exclui as distantes', () => {
  const services = [
    { kind: 'meal', verification: 'documented_by_public_authority', lat: -23.55, lon: -46.48 },
    { kind: 'meal', verification: 'documented_by_public_authority', lat: -23.5333, lon: -46.644 },
    { kind: 'meal', verification: 'documented_by_public_authority', lat: -22.9, lon: -43.2 },
    { kind: 'meal', verification: 'unverified', lat: -23.5333, lon: -46.644 },
  ];
  const result = visibleServices(services, 'meal', { mode: 'gps', lat: -23.5333, lon: -46.644 });
  assert.equal(result.length, 2);
  assert.equal(result[0].distance_km, 0);
  assert.ok(result[1].distance_km > 0);
});

test('município exige código e tipo de oferta correspondentes', () => {
  const services = [
    { kind: 'meal', municipality_code: '3550308', verification: 'documented_by_public_authority' },
    { kind: 'other', municipality_code: '3550308', verification: 'documented_by_public_authority' },
    { kind: 'meal', municipality_code: '3304557', verification: 'documented_by_public_authority' },
  ];
  assert.equal(visibleServices(services, 'meal', { mode: 'municipality', code: '3550308' }).length, 1);
});

test('coordenadas inválidas não geram distância ou oferta por GPS', () => {
  assert.equal(distanceKm({ lat: 200, lon: 0 }, { lat: 0, lon: 0 }), null);
  assert.deepEqual(visibleServices([{ kind: 'meal', verification: 'documented_by_public_authority', lat: null, lon: null }], 'meal', { mode: 'gps', lat: 0, lon: 0 }), []);
});

test('resposta do Mapa preserva somente candidatos identificáveis', () => {
  const result = normaliseCandidates([
    { id_osc: 12, tx_nome_osc: 'OSC exemplo', tx_endereco_osc: null },
    { id_osc: null, tx_nome_osc: 'Sem ID' },
  ]);
  assert.deepEqual(result, [{ id: 12, name: 'OSC exemplo', address: null }]);
});
