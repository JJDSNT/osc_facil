---
id: ISSUE-0008
title: "Validar comprovação de entrega e hipótese SUAScoin"
status: ready
priority: medium
type: research
owner: unassigned
created_at: 2026-09-26
updated_at: 2026-09-26
tags:
  - segunda-etapa
  - suascoin
  - entrega
  - governanca
blockers: []
related_files:
  - docs/suascoin.md
  - docs/poc-alimentacao.md
  - README.md
---

# Resumo

Investigar uma forma auditável de registrar produtos e serviços efetivamente entregues e avaliar se uma criptomoeda chamada SUAScoin acrescenta valor quando a própria pessoa atendida autoriza a mudança de titularidade após o recebimento.

# Problema

O protótipo atual ajuda a encontrar ofertas, mas não sabe se a pessoa recebeu o atendimento. Um registro digital ou transação de moeda pode guardar declarações, porém não demonstra sozinho que um fato ocorreu fora do sistema.

# Objetivo

Definir evidências, confirmação ou contestação acessível, auditoria independente e critérios para um ativo digital atribuído à pessoa e transferido à organização mediante autorização explícita dela, sem impor carteira digital autocustodiada.

# O que foi feito

- Proposta de segunda etapa, fluxo, papéis, limites e fontes oficiais registrados em [`docs/suascoin.md`](../../docs/suascoin.md).
- Fluxo corrigido conforme a decisão de produto: a pessoa que consumiu o produto ou serviço confirma e autoriza a mudança de titularidade; a declaração da organização não basta.
- Constatado que o Prontuário SUAS já registra atendimentos e tem regras de finalidade e sigilo; uma integração dependeria de autorização e desenho institucional próprios.

# O que falta

- Entrevistar pessoas atendidas, OSCs e gestores; definir um tipo concreto de entrega e seu processo atual.
- Desenhar e comparar comprovante assinado em sistema convencional e registro distribuído com dados fictícios.
- Definir tratamento de contestação, entregas sem celular, duplicidade, coerção e fraude entre participantes.
- Definir como uma pessoa sem celular exerce a autorização por canal independente e como são tratados casos em que ela não pode ou não quer confirmar.
- Fazer avaliação jurídica e de proteção de dados antes de qualquer piloto com dados ou valor reais.
- Determinar se há motivo operacional para moeda fungível, e quais seriam emissão, custódia, circulação, liquidação e encerramento.

# Decisões

- SUAScoin é uma hipótese de segunda etapa, não uma integração ou moeda existente.
- Entrega não pode ser tratada como comprovada somente pela presença de uma transação.
- O acesso ao atendimento não dependerá de wallet, biometria, aplicativo ou confirmação digital.
- Nenhuma mudança de titularidade ocorre apenas por declaração da OSC, por silêncio ou por expiração de prazo; a própria pessoa precisa autorizá-la depois do recebimento.

# Critérios de aceite

- [ ] Modalidade de serviço, evidência mínima e estados de entrega validados com participantes reais.
- [ ] Processo de contestação e auditoria definido, inclusive para quem não tem celular.
- [ ] Transferência condicionada à autorização explícita da pessoa atendida, vinculada a uma entrega única, com proteção contra coerção e repetição.
- [ ] Comparação documentada entre sistema convencional e rede distribuída.
- [ ] Enquadramento jurídico, governança e proteção de dados avaliados antes de piloto real.
- [ ] Valor adicional da moeda demonstrado, ou hipótese descartada com justificativa.

# Notas

Depende da qualidade das ofertas e da parceria para testar um serviço concreto. Não usar dados do Prontuário SUAS ou do CadÚnico sem base legal e acordo institucional.

# Log de execução

- 2026-09-26 — Issue criada a partir da proposta de SUAScoin como segunda etapa; pesquisa inicial registrada em `docs/suascoin.md`.
- 2026-09-26 — Regra de titularidade esclarecida: a pessoa que recebeu confirma e autoriza a transferência para a organização.
