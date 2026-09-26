# SUAScoin: proposta para a segunda etapa

**Estado:** conceito para pesquisa e piloto; não implementado, emitido ou integrado ao SUAS. Revisão: 2026-09-26.

## Objetivo

Depois que o `osc_facil` conseguir localizar serviços confiáveis, a segunda etapa poderá registrar **se um produto ou serviço foi efetivamente entregue** à pessoa atendida. **SUAScoin** é o nome provisório de um possível ativo digital cuja **mudança de titularidade seria confirmada pela própria pessoa que recebeu o produto ou serviço**. A rede SUAS é uma política pública existente; esta proposta não implica parceria, aprovação ou uso oficial de sua marca, sistemas ou recursos.

O primeiro caso de estudo pode ser uma refeição de uma unidade parceira. O resultado desejado é responder, com evidências auditáveis: qual serviço foi autorizado, qual unidade declarou a entrega, quando ocorreu, se a pessoa confirmou o recebimento e autorizou a transferência, e quem revisou divergências. A pessoa deve continuar podendo receber ajuda sem celular, carteira digital, biometria ou participação no experimento.

## Entrega e prova

Uma moeda ou registro em blockchain **não comprova por si só um fato físico**. O [NIST descreve o problema da informação vinda do mundo real](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf): a rede registra a informação recebida, mas depende de pessoas ou sistemas externos para saber se ela é verdadeira. Assim, “entrega comprovada” deve significar uma **conclusão baseada em evidências e regras de auditoria**, com grau de confiança e possibilidade de correção. Não deve ser apresentada como verdade automática ou irrefutável.

Fluxo a testar, com uma unidade e um tipo de entrega:

1. Uma organização autorizada cria uma oferta concreta, com unidade, tipo de item/serviço, quantidade ou duração, período e regra de acesso. No modelo SUAScoin proposto, o programa atribui à pessoa unidades da moeda para aquela oferta, sob sua titularidade. A curadoria do `osc_facil` identifica a oferta, mas não gera entrega.
2. Ao atender, a unidade cria um registro único de entrega. Um agente autenticado informa o que foi entregue e assina a declaração. Esse registro é **uma solicitação de transferência**, não uma transferência concluída. Cada evento recebe identificador único para impedir reutilização ou dupla contagem.
3. Depois de receber, a própria pessoa vê um resumo compreensível do item ou serviço, da unidade e da quantidade de SUAScoin, e escolhe **confirmar e autorizar a mudança de titularidade** ou **contestar**. A organização que declarou a entrega não pode confirmar em seu lugar. Um código de uso único ou QR pode identificar o evento, mas sua apresentação isolada não vale como consentimento. Deve existir um canal de confirmação assistida e independente da organização, para quem não usa celular, sem retirar da pessoa o poder de decidir.
4. O sistema marca o evento como `declarado`, `aguardando_pessoa`, `autorizado_pela_pessoa`, `contestado`, `transferido`, `auditado` ou `cancelado`. Somente uma autorização explícita da pessoa, vinculada ao evento único, pode disparar a transferência ao prestador. Silêncio, prazo vencido ou confirmação feita apenas pelo prestador não transferem titularidade. Amostras e inconsistências passam por revisão humana independente.
5. A pessoa recebe comprovante da decisão e pode questionar erro, pressão ou entrega incompleta. Correção ou estorno preserva a trilha de auditoria e referencia o evento original. O atendimento não pode depender de a pessoa autorizar a transferência; casos sem confirmação exigem uma regra de remuneração separada, a definir no piloto.

Para serviços contínuos, a unidade de comprovação precisa ser definida antes: uma visita, sessão, período concluído ou etapa verificável. Para produto físico, registrar o item e quantidade efetiva. Cada modalidade exige evidências adequadas; um único clique genérico não basta.

## Papel possível da SUAScoin

Há duas funções que devem ser avaliadas separadamente:

| Função | O que registra | Pergunta a validar |
| --- | --- | --- |
| Comprovante digital | Estado e trilha de auditoria de cada entrega. Pode ser implementado com registros assinados sem moeda. | O registro melhora a confiança em relação ao processo atual? |
| Ativo digital SUAScoin | Unidade atribuída à pessoa para uma oferta; a pessoa autoriza sua transferência à organização depois do recebimento. | Essa mudança de titularidade melhora a comprovação e a prestação de contas sem criar pressão sobre a pessoa? |

Se houver ativo digital, a hipótese inicial é emissão controlada, sem venda pública, negociação especulativa ou promessa de valorização. A pessoa é titular da unidade atribuída para a oferta e controla a autorização de transferência. Esse controle pode ser exercido por um canal custodiado e acessível, sem exigir que ela guarde chaves privadas ou pague taxas; o custodiante não pode autorizar em seu lugar. Regras de emissão, custódia, transferência, resgate, auditoria e interrupção precisariam ser definidas com os responsáveis pelo programa e analisadas juridicamente antes de qualquer valor real. A escolha de blockchain pública, rede permissionada ou banco de dados auditável permanece aberta; o piloto deve comparar custo, governança, privacidade e capacidade de corrigir erros.

Um mecanismo candidato seria atribuir unidades SUAScoin à pessoa para uma ordem de serviço específica. Depois da entrega declarada pela unidade, **a pessoa autoriza a passagem da titularidade à organização executora**. Uma contestação bloqueia essa passagem; cancelamentos e estornos ficam rastreáveis. A quantidade de unidades por entrega e qualquer relação com reais ou orçamento público ficam indefinidas até existir um programa concreto e análise jurídica. A transferência provaria que a pessoa autorizou a mudança de titularidade no sistema, enquanto a realidade da entrega continuaria dependendo das evidências e da auditoria.

O [Banco Central regulamenta a prestação de serviços de ativos virtuais](https://www.bcb.gov.br/detalhenoticia/20918/nota?s=08); a [CVM avalia tokens conforme os direitos que conferem](https://www.gov.br/cvm/pt-br/assuntos/noticias/2023/cvm-orienta-sobre-caracterizacao-de-tokens-de-recebiveis-e-de-tokens-de-renda-fixa-como-valores-mobiliarios). O enquadramento da SUAScoin dependeria de sua estrutura concreta. Esta página não afirma que a proposta já possa operar como criptomoeda na rede pública.

## Dados, direitos e governança

O [Prontuário Eletrônico do SUAS já registra atendimentos](https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/prontuario-eletronico-da-assistencia-social-sera-integrado-ao-cadastro-unico/). A [Resolução CIT nº 29/2025](https://aplicacoes.mds.gov.br/snas/regulacao/visualizar.php?codigo=6981) prevê sigilo, finalidade e minimização para seus dados. A SUAScoin não deve criar um prontuário paralelo público nem importar dados do CadÚnico ou do Prontuário sem base legal, finalidade e acordo institucional específicos.

Dados de identidade, condição social, localização precisa, descrição do atendimento e documentos ficam fora de qualquer registro público. Mesmo identificadores pseudônimos, hashes e endereços de carteira exigem avaliação de reidentificação: a [ANPD alerta para esse risco em blockchain](https://www.gov.br/anpd/pt-br/assuntos/noticias/blockchain-pode-revolucionar-a-administracao-publica-mas-requer-compatibilizacao-com-a-lgpd-alerta-assessor-da-anpd). O piloto deve definir controlador, operadores, base legal, prazo de retenção, acesso por perfil, resposta a incidentes e mecanismo de correção e exclusão quando cabível, com avaliação de impacto antes de tratar dados reais.

A governança precisa separar quem autoriza a oferta, quem declara a entrega, quem audita, quem pode emitir tokens e quem decide contestações. A própria pessoa atendida confirma a mudança de titularidade; uma OSC ou custodiante não pode assumir esse ato. O desenho precisa prevenir coleta antecipada de códigos, pressão para confirmar antes de receber, uso indevido de identidade e conluio. Publicar apenas indicadores agregados e com proteção contra reidentificação; permitir à pessoa consultar seu comprovante e contestá-lo sem expor sua situação social.

## Sequência de validação

1. **Definir o serviço e a evidência:** entrevistar usuários, equipes e gestores; comparar o fluxo proposto com registros existentes e mapear fraudes, coerção e barreiras de acesso.
2. **Protótipo sem valor financeiro:** simular atribuição da unidade à pessoa, entrega declarada, autorização explícita de transferência pela pessoa, contestação, auditoria e estorno com dados fictícios. Comparar um registro convencional auditável com uma rede distribuída.
3. **Piloto autorizado e pequeno:** somente com organizações e responsáveis institucionais que aceitem regras documentadas, avaliação jurídica e de proteção de dados; medir falso positivo, entrega sem registro, tempo de atendimento, reclamações e custo operacional.
4. **Decisão sobre moeda:** emitir ou usar SUAScoin com valor real apenas se o piloto mostrar necessidade da camada monetária, houver governança e conformidade aplicáveis e a experiência não reduzir o acesso ao atendimento.

**Critério para avançar:** nenhuma transferência ocorre sem autorização explícita da pessoa que recebeu o atendimento; o processo consegue detectar e corrigir entregas falsas ou duplicadas, preservar o direito de contestação, não impor custo ou fricção à pessoa atendida e demonstrar benefício concreto diante de registros convencionais. A questão central é a qualidade da evidência de entrega; a moeda é uma hipótese de mecanismo para a rede.
