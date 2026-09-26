---
id: ISSUE-0004
title: "Construir prova de conceito da jornada de ajuda"
status: doing
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
  - docs/poc-alimentacao.md
  - app/index.html
  - app/app.mjs
---

# Resumo

Entregar uma interface pequena para necessidade → refinamento → município → serviço verificado → contato e acesso.

# Problema

O projeto ainda só contém documentação. A interface precisa respeitar as limitações dos dados e funcionar sem conta ou permissão de GPS.

# Objetivo

Validar uma jornada funcional inspirada no Ask Izzy para uma necessidade e cidade, com fonte, verificação e lacunas visíveis.

# O que foi feito

- Recorte e critérios preliminares descritos em [`docs/proximos-passos.md`](../../docs/proximos-passos.md).
- Interface estática implementada com município e GPS opcionais, cards com fonte, tratamento de erro e resultados separados. Fluxos testados em Chromium com GPS simulado.

# O que falta

- Incorporar o contrato de dados de `ISSUE-0002`, os rótulos de `ISSUE-0003` e o cadastro de serviços de `ISSUE-0007`.
- Revisar fluxo por teclado e acessibilidade com pessoas usuárias.
- Confirmar diretamente canais e condições de acesso das unidades antes de chamar o serviço de confirmado.

# Decisões

- Localização manual por município é obrigatória como alternativa ao GPS; cadastro não é necessário para pesquisa.
- HTML, CSS e módulos JavaScript sem dependências de aplicação; GPS só é solicitado após gesto explícito.

# Critérios de aceite

- [x] Busca utilizável sem conta e sem permissão de localização.
- [x] Município selecionado com UF explícita.
- [ ] Resultado principal contém serviço confirmado, como acessar, fonte/data e link da OSC; OSCs candidatas ficam separadas. A oferta está documentada, mas falta confirmação direta das condições de acesso.
- [x] Erro de API e ausência de dados aparecem sem inventar resultados.
- [ ] Fluxo principal verificado em tela pequena e por teclado.

# Notas

Depende dos resultados de `ISSUE-0002` e `ISSUE-0003`, mas o desenho da interface pode começar antes.

# Log de execução

- 2026-09-26 — Issue aberta; implementação ainda não iniciada.
- 2026-09-26 — Objetivo ampliado para a jornada de serviço após pesquisa do Ask Izzy (`ISSUE-0006`).
- 2026-09-26 — POC implementada e testada em desktop/mobile; município e GPS simulado retornaram ofertas documentadas e OSCs relacionadas.
