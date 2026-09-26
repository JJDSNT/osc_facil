---
id: ISSUE-0002
title: "Validar busca, paginação e caminho de ingestão"
status: ready
priority: high
type: research
owner: unassigned
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - mapa-das-osc
  - api
  - contrato-de-dados
blockers: []
related_files:
  - docs/mapa-das-osc.md
  - docs/proximos-passos.md
---

# Resumo

Descobrir como obter resultados pequenos, reproduzíveis e filtráveis por localidade e área para o protótipo.

# Problema

As rotas de áreas, município e detalhes foram confirmadas, mas a rota geográfica de São Paulo retornou cerca de 9,9 MB. As rotas de busca paginada estão no código fonte e ainda não foram testadas na instância. Também não foi escolhido entre consulta ao vivo e base local reduzida.

# Objetivo

Documentar um contrato de consulta que permita resultados limitados, tratamento de falha e atualização rastreável.

# O que foi feito

- Endpoints iniciais e tamanho de uma resposta geográfica registrados em [`ISSUE-0001`](ISSUE-0001.md).

# O que falta

- Testar `lista_por_area_atuacao` e `busca_avancada` em município pequeno e grande, com limites, ordenação e casos vazios.
- Conferir resposta, latência, tamanho, erros e possíveis limites de uso; guardar exemplos pequenos sem dados pessoais desnecessários.
- Inspecionar o dicionário da base principal correspondente à edição usada.
- Conferir os termos atuais e decidir se consulta direta, cache ou importação atende ao uso planejado.
- Escrever o contrato de campos mínimos, fonte e atualização para a prova de conceito.

# Decisões

Nenhum modo de ingestão foi escolhido ainda.

# Critérios de aceite

- [ ] Rotas e parâmetros de busca validados contra a instância pública.
- [ ] Consulta limitada demonstrada para dois portes de município.
- [ ] Campos, ausências, falhas e atualização documentados.
- [ ] Caminho de dados escolhido com registro da avaliação dos termos de uso.

# Notas

Não baixar a base principal inteira apenas para testar o esquema; começar pelo dicionário e por respostas pequenas.

# Log de execução

- 2026-09-26 — Issue aberta a partir das lacunas da pesquisa inicial.
