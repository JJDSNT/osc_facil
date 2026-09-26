---
id: ISSUE-0006
title: "Pesquisar Ask Izzy e definir referência para POC/MVP"
status: done
priority: high
type: research
owner: agent
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - ask-izzy
  - produto
  - mvp
blockers: []
related_files:
  - docs/ask-izzy.md
  - docs/proximos-passos.md
  - README.md
---

# Resumo

Pesquisa da referência funcional pedida para o `osc_facil`. Os fatos observados, as fontes e o escopo derivado estão em [`docs/ask-izzy.md`](../../docs/ask-izzy.md).

# Problema

O projeto citava Ask Izzy como inspiração, mas não registrava sua jornada de busca nem a diferença entre sua base de serviços e o Mapa das OSC.

# Objetivo

Descrever a jornada relevante e convertê-la em escopo verificável para POC/MVP brasileiro.

# O que foi feito

- Examinadas páginas oficiais de entrada, ajuda, etapas de alimentação/moradia, localidade, privacidade, segurança, atualização de serviços e termos.
- Identificado o diretório de serviços da Infoxchange e seu processo de revisão humana como parte central do produto.
- Comparadas capacidades da referência com o que o Mapa das OSC fornece e com os dados que ainda precisamos produzir.
- Definidos o recorte da POC e a direção do MVP em `docs/ask-izzy.md` e `docs/proximos-passos.md`.

# O que falta

Validar dados do Mapa ([`ISSUE-0002`](ISSUE-0002.md)), taxonomia ([`ISSUE-0003`](ISSUE-0003.md)), cadastro curado de serviços ([`ISSUE-0007`](ISSUE-0007.md)), aplicação ([`ISSUE-0004`](ISSUE-0004.md)) e resultados com pessoas ([`ISSUE-0005`](ISSUE-0005.md)).

# Decisões

- “Clone” significa reproduzir a **função e a jornada de descoberta**, com identidade e código próprios.
- A POC deve provar pelo menos um caminho completo até um serviço confirmado, sem apresentar organização classificada como atendimento disponível.
- Perguntas de refinamento só entram se houver dados capazes de alterar a seleção de resultados.

# Critérios de aceite

- [x] Fluxo e mecanismos relevantes identificados em fontes oficiais.
- [x] Lacuna entre diretório de serviços e base de OSCs explicitada.
- [x] Escopos de POC e MVP registrados.
- [x] Trabalho restante rastreado em issues.

# Notas

As páginas dinâmicas de resultados não ficaram disponíveis em forma textual nesta pesquisa; campos e ordenação exatos de resultados do Ask Izzy não foram afirmados. Os termos do Ask Izzy restringem reprodução de conteúdo, aparência e código; a pesquisa usou apenas páginas públicas para descrever comportamento de alto nível.

# Log de execução

- 2026-09-26 — Páginas oficiais pesquisadas e documentação/escopo atualizados.
