---
id: ISSUE-0005
title: "Avaliar qualidade dos resultados com uma amostra real"
status: backlog
priority: medium
type: research
owner: unassigned
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - qualidade-de-dados
  - produto
  - validacao
blockers: []
related_files:
  - docs/mapa-das-osc.md
  - docs/proximos-passos.md
---

# Resumo

Medir se os resultados do protótipo são úteis e seguros para as necessidades escolhidas.

# Problema

Endereço pode representar sede, contatos podem estar ausentes e a área de atuação pode ser inferida. Sem revisão, uma lista ordenada por proximidade pode parecer uma recomendação de serviço que não existe.

# Objetivo

Produzir evidência sobre falsos positivos, dados desatualizados e lacunas de contato para decidir o que corrigir antes de ampliar cobertura.

# O que foi feito

- Riscos descritos em [`docs/mapa-das-osc.md`](../../docs/mapa-das-osc.md).

# O que falta

- Revisar a necessidade/cidade da POC e depois ao menos duas necessidades e municípios distintos para o MVP.
- Revisar resultados manualmente com registro de método, data e fontes de confirmação.
- Quantificar contatos inválidos, endereços inadequados e organizações sem evidência de serviço.
- Propor mudanças no mapeamento, nos rótulos e na ordenação.

# Decisões

Não considerar um resultado “verificado” apenas por existir no Mapa.

# Critérios de aceite

- [ ] Amostra e método documentados.
- [ ] Erros e lacunas registrados com contagens e exemplos sem expor dados pessoais desnecessários.
- [ ] Decisão sobre próximos ajustes baseada na revisão.

# Notas

Executar depois que houver regras de classificação e resultados concretos do protótipo.

# Log de execução

- 2026-09-26 — Issue aberta; avaliação ainda não iniciada.
- 2026-09-26 — Incluída revisão de serviços curados após pesquisa do Ask Izzy (`ISSUE-0006`).
