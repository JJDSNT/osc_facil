---
id: ISSUE-0003
title: "Definir relação entre necessidades e dados verificáveis"
status: backlog
priority: high
type: research
owner: unassigned
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - produto
  - classificacao
  - servicos
blockers: []
related_files:
  - README.md
  - docs/mapa-das-osc.md
  - docs/proximos-passos.md
---

# Resumo

Definir como uma necessidade descrita pela pessoa se relaciona com áreas do Mapa sem prometer serviços não comprovados.

# Problema

O README traz necessidades como comida, apoio psicológico e abrigo. O Mapa classifica organizações por área e subárea, em parte por estimativa; isso não equivale a oferta atual, público elegível, local ou horário.

# Objetivo

Criar um conjunto inicial de categorias e uma política clara para exibir resultados como organização relacionada, serviço declarado ou serviço verificado.

# O que foi feito

- Limitação conceitual documentada em [`ISSUE-0001`](ISSUE-0001.md).

# O que falta

- Selecionar uma necessidade para a POC e duas ou três para o MVP, conforme serviços que possam ser confirmados.
- Construir mapeamento explícito entre necessidade e campos observáveis, com justificativa e possíveis falsos positivos.
- Definir perguntas progressivas somente onde existirem campos de serviço capazes de filtrar resultados.
- Definir evidência mínima para chamar algo de serviço e indicar data da última verificação.
- Planejar avaliação manual com OSCs ou fontes complementares.

# Decisões

- Não afirmar atendimento, elegibilidade ou disponibilidade com base apenas na área de atuação.

# Critérios de aceite

- [ ] Categorias iniciais e mapeamento documentados com exemplos e contraexemplos.
- [ ] Rótulos de confiança e origem definidos para a interface.
- [ ] Critério para serviço verificado definido sem confundir organização e serviço.

# Notas

Esta issue pode avançar em paralelo à validação técnica de `ISSUE-0002`.

# Log de execução

- 2026-09-26 — Issue aberta a partir das limitações identificadas na pesquisa.
- 2026-09-26 — Escopo ajustado após pesquisa do Ask Izzy em `ISSUE-0006`.
