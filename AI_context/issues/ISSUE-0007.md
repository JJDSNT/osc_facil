---
id: ISSUE-0007
title: "Criar cadastro curado de serviços vinculado às OSCs"
status: ready
priority: high
type: feature
owner: unassigned
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - dados
  - servicos
  - curadoria
blockers: []
related_files:
  - docs/ask-izzy.md
  - docs/mapa-das-osc.md
  - docs/proximos-passos.md
---

# Resumo

Criar a camada de dados que falta entre um cadastro de OSCs e uma busca de ajuda acionável.

# Problema

O Ask Izzy consulta serviços revisados; o Mapa das OSC identifica organizações, temas, endereços e alguns projetos, sem confirmar a oferta atual de cada serviço. A POC não pode inferir um atendimento apenas pela área de atuação.

# Objetivo

Manter serviços curados, vinculados a OSCs quando possível, com local de atendimento, canal de acesso, evidência e data de verificação.

# O que foi feito

- Lacuna e campos candidatos descritos em [`docs/ask-izzy.md`](../../docs/ask-izzy.md).

# O que falta

- Definir esquema separado para organização, serviço e local; vincular por `id_osc` sem exigir que todo serviço tenha o mesmo endereço da sede.
- Definir estados de verificação, fonte/evidência, datas de confirmação e revisão, e critério de retirada.
- Selecionar cidade/necessidade da POC a partir de uma amostra que possa ser confirmada.
- Curar manualmente um pequeno conjunto inicial, evitando publicar informação de atendimento não validada.
- Registrar processo de correção e reconfirmação adequado ao MVP.

# Decisões

- Dados do Mapa geram candidatos, não serviços verificados automaticamente.
- Dados faltantes ficam ausentes; não inferir horário, gratuidade, elegibilidade ou atendimento imediato.

# Critérios de aceite

- [ ] Organização, serviço e local de atendimento são entidades distintas no contrato de dados.
- [ ] Cada serviço publicado tem evidência, fonte, data e estado de verificação.
- [ ] Amostra inicial da POC possui canal de contato e forma de acesso conferidos.
- [ ] Existe caminho documentado para corrigir, reconfirmar e retirar uma entrada.

# Notas

A seleção de serviços deve considerar os termos do Mapa das OSC e os limites de privacidade. Dependência conceitual de [`ISSUE-0003`](ISSUE-0003.md); pode começar em paralelo à validação técnica de [`ISSUE-0002`](ISSUE-0002.md).

# Log de execução

- 2026-09-26 — Issue aberta após comparação entre Ask Izzy e Mapa das OSC.
