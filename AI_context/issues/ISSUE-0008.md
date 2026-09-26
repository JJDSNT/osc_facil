---
id: ISSUE-0008
title: "Validar pagamento em SUAScoin e resgate pelas organizações"
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

Investigar uma moeda digital para a pessoa pagar pelo produto ou serviço recebido. A organização recebe SUAScoin, a transação registra o pagamento e o saldo pode ser resgatado posteriormente por um mecanismo a definir em conexão com repasses e prestação de contas.

# Problema

O protótipo atual ajuda a encontrar ofertas, mas não sabe se a pessoa recebeu o atendimento. Um registro digital ou transação de moeda pode guardar declarações, porém não demonstra sozinho que um fato ocorreu fora do sistema.

# Objetivo

Definir saldo atribuído à pessoa, cobrança após a entrega, pagamento confirmado por ela, saldo da organização, conciliação e resgate futuro. A transação deve ser auditável e contestável, sem impor carteira digital autocustodiada.

# O que foi feito

- Proposta de segunda etapa, fluxo, papéis, limites e fontes oficiais registrados em [`docs/suascoin.md`](../../docs/suascoin.md).
- Fluxo corrigido conforme a decisão de produto: a pessoa que consumiu o produto ou serviço confirma e autoriza a mudança de titularidade; a declaração da organização não basta.
- Modelo refinado: a transferência é o **pagamento** feito pela pessoa; a organização recebe SUAScoin e solicita resgate posteriormente. Fontes oficiais sobre repasses foram incorporadas à documentação.
- Constatado que o Prontuário SUAS já registra atendimentos e tem regras de finalidade e sigilo; uma integração dependeria de autorização e desenho institucional próprios.

# O que falta

- Entrevistar pessoas atendidas, OSCs e gestores; definir um tipo concreto de entrega e seu processo atual.
- Desenhar e comparar comprovante assinado em sistema convencional e registro distribuído com dados fictícios.
- Definir tratamento de contestação, entregas sem celular, duplicidade, coerção e fraude entre participantes.
- Definir como uma pessoa sem celular exerce a autorização por canal independente e como são tratados casos em que ela não pode ou não quer confirmar.
- Fazer avaliação jurídica e de proteção de dados antes de qualquer piloto com dados ou valor reais.
- Definir emissor e financiador, saldo e limites da pessoa, valor de referência, regras de resgate, fonte de recursos, responsável pela liquidação, custódia e encerramento.
- Validar com gestores como a conciliação de SUAScoin poderia apoiar repasses e prestação de contas sem substituir os instrumentos oficiais.

# Decisões

- SUAScoin é uma hipótese de segunda etapa, não uma integração ou moeda existente.
- Entrega não pode ser tratada como comprovada somente pela presença de uma transação.
- O acesso ao atendimento não dependerá de wallet, biometria, aplicativo ou confirmação digital.
- Nenhuma mudança de titularidade ocorre apenas por declaração da OSC, por silêncio ou por expiração de prazo; a própria pessoa precisa autorizá-la depois do recebimento.
- A transferência da pessoa para a organização representa pagamento pelo produto ou serviço recebido; o resgate da organização é uma etapa posterior e distinta.

# Critérios de aceite

- [ ] Modalidade de serviço, evidência mínima e estados de entrega validados com participantes reais.
- [ ] Processo de contestação e auditoria definido, inclusive para quem não tem celular.
- [ ] Transferência condicionada à autorização explícita da pessoa atendida, vinculada a uma entrega única, com proteção contra coerção e repetição.
- [ ] Cobrança, pagamento, saldo da organização, pedido de resgate, conciliação e estorno definidos sem duplicidade.
- [ ] Comparação documentada entre sistema convencional e rede distribuída.
- [ ] Enquadramento jurídico, governança e proteção de dados avaliados antes de piloto real.
- [ ] Valor adicional da moeda demonstrado, ou hipótese descartada com justificativa.

# Notas

Depende da qualidade das ofertas e da parceria para testar um serviço concreto. Não usar dados do Prontuário SUAS ou do CadÚnico sem base legal e acordo institucional.

# Log de execução

- 2026-09-26 — Issue criada a partir da proposta de SUAScoin como segunda etapa; pesquisa inicial registrada em `docs/suascoin.md`.
- 2026-09-26 — Regra de titularidade esclarecida: a pessoa que recebeu confirma e autoriza a transferência para a organização.
- 2026-09-26 — Modelo econômico esclarecido: a pessoa paga em SUAScoin, a organização recebe e poderá resgatar futuramente por mecanismo a definir.
