---
id: ISSUE-0001
title: "Investigar código, API pública e dados do Mapa das OSC"
status: done
priority: high
type: research
owner: agent
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - mapa-das-osc
  - api
  - dados
blockers: []
related_files:
  - docs/mapa-das-osc.md
  - docs/proximos-passos.md
  - AI_context/README.md
---

# Resumo

Pesquisa inicial da fonte de dados proposta no README. O resultado detalhado, com URLs e observações HTTP, está em [`docs/mapa-das-osc.md`](../../docs/mapa-das-osc.md).

# Problema

O projeto pretendia usar o Mapa das OSC, mas não havia identificação da API atual, do código fonte, dos dados disponíveis nem das limitações para busca por necessidade.

# Objetivo

Estabelecer fontes verificáveis e riscos de interpretação suficientes para planejar uma primeira prova de conceito.

# O que foi feito

- Localizados os repositórios públicos `mapa-osc-api`, `mapa-osc-front`, `mapa-osc-data-import` e o antigo `portalosc`.
- Consultados o Swagger da instância, o arquivo de rotas do código atual e as páginas de bases e termos do portal.
- Confirmadas respostas HTTP 200 para áreas, subáreas, busca de município, registro e detalhes de uma OSC, e coordenadas por município. Confirmado HTTP 404 para chamadas sem o segundo prefixo `/api`.
- Registrado que uma área de atuação pode vir de estimativa com CNAE e razão social; ela não comprova a prestação de um serviço específico.
- Produzida a documentação inicial e uma sequência de trabalho.

# O que falta

Validação da busca paginada, do dicionário CSV e das regras de uso para uma implementação concreta. Essas ações estão em [`ISSUE-0002`](ISSUE-0002.md); classificação por necessidade e validação humana estão em [`ISSUE-0003`](ISSUE-0003.md) e [`ISSUE-0005`](ISSUE-0005.md).

# Decisões

- Tratar o Mapa como fonte de **organizações**, não como catálogo de serviços confirmados.
- Usar a API pública atual como referência inicial; a wiki antiga do `portalosc` não define seu contrato.
- Registrar fonte e data de cada dado relevante antes de apresentá-lo ao usuário.

# Critérios de aceite

- [x] Código fonte atual e documentação da instância identificados.
- [x] Exemplos de chamadas públicas verificados e documentados.
- [x] Limitações de classificação, localização e uso registradas.
- [x] Próximas verificações transformadas em issues.

# Notas

Pesquisa pontual em 2026-09-26; disponibilidade e contrato externos podem mudar. O teste do endpoint por CNPJ expirou após 25 segundos e não demonstrou nem funcionamento nem indisponibilidade permanente.

# Log de execução

- 2026-09-26 — Pesquisa da instância e do código; documentação criada em `docs/`.
- 2026-09-26 — Histórico estruturado em `AI_context/` após esclarecimento do formato desejado.
