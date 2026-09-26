---
id: ISSUE-0004
title: "Construir prova de conceito da jornada de ajuda"
status: backlog
priority: high
type: feature
owner: unassigned
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - mvp
  - interface
  - busca
blockers: []
related_files:
  - README.md
  - docs/proximos-passos.md
---

# Resumo

Entregar uma interface pequena para necessidade → refinamento → município → serviço verificado → contato e acesso.

# Problema

O projeto ainda só contém documentação. A interface precisa respeitar as limitações dos dados e funcionar sem conta ou permissão de GPS.

# Objetivo

Validar uma jornada funcional inspirada no Ask Izzy para uma necessidade e cidade, com fonte, verificação e lacunas visíveis.

# O que foi feito

- Recorte e critérios preliminares descritos em [`docs/proximos-passos.md`](../../docs/proximos-passos.md).

# O que falta

- Incorporar o contrato de dados de `ISSUE-0002`, os rótulos de `ISSUE-0003` e o cadastro de serviços de `ISSUE-0007`.
- Escolher tecnologia proporcional ao protótipo e implementar interface mobile-first acessível.
- Mostrar mensagem útil para erro externo, resultado vazio e informação ausente.
- Vincular cada ficha à página original do Mapa.

# Decisões

- Localização manual por município é obrigatória como alternativa ao GPS; cadastro não é necessário para pesquisa.

# Critérios de aceite

- [ ] Busca utilizável sem conta e sem permissão de localização.
- [ ] Município selecionado com UF explícita.
- [ ] Resultado principal contém serviço confirmado, como acessar, fonte/data e link da OSC; OSCs candidatas ficam separadas.
- [ ] Erro de API e ausência de dados aparecem sem inventar resultados.
- [ ] Fluxo principal verificado em tela pequena e por teclado.

# Notas

Depende dos resultados de `ISSUE-0002` e `ISSUE-0003`, mas o desenho da interface pode começar antes.

# Log de execução

- 2026-09-26 — Issue aberta; implementação ainda não iniciada.
- 2026-09-26 — Objetivo ampliado para a jornada de serviço após pesquisa do Ask Izzy (`ISSUE-0006`).
