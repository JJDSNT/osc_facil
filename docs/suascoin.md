# SUAScoin: proposta para a segunda etapa

**Estado:** conceito para pesquisa e piloto; não implementado, emitido ou integrado ao SUAS. Revisão: 2026-09-26.

## Objetivo

Depois que o `osc_facil` conseguir localizar serviços confiáveis, a segunda etapa poderá registrar **se um produto ou serviço foi efetivamente entregue** à pessoa atendida. **SUAScoin** é o nome provisório de uma moeda digital proposta como **meio de pagamento na rede participante**: a pessoa recebe unidades, paga à organização depois de consumir o produto ou serviço, e a organização acumula unidades que poderá solicitar para resgate futuro pelo mecanismo definido no programa. A própria pessoa confirma o pagamento e a mudança de titularidade. A rede SUAS é uma política pública existente; esta proposta não implica parceria, aprovação ou uso oficial de sua marca, sistemas ou recursos.

O primeiro caso de estudo pode ser uma refeição de uma unidade parceira. O resultado desejado é responder, com evidências auditáveis: qual serviço foi autorizado, qual unidade declarou a entrega, quando ocorreu, se a pessoa pagou com SUAScoin, qual organização recebeu, se houve contestação e como as unidades foram posteriormente resgatadas. A pessoa deve continuar podendo receber ajuda sem celular, carteira digital autocustodiada, biometria ou participação no experimento.

## Entrega e prova

Uma moeda ou registro em blockchain **não comprova por si só um fato físico**. O [NIST descreve o problema da informação vinda do mundo real](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf): a rede registra a informação recebida, mas depende de pessoas ou sistemas externos para saber se ela é verdadeira. Assim, “entrega comprovada” deve significar uma **conclusão baseada em evidências e regras de auditoria**, com grau de confiança e possibilidade de correção. Não deve ser apresentada como verdade automática ou irrefutável.

Fluxo a testar, com uma unidade e um tipo de entrega:

1. O programa atribui unidades SUAScoin à pessoa para serviços ou produtos elegíveis. O saldo é dela; emissão, limites de uso e valor de referência devem ser estabelecidos antes do piloto. A curadoria do `osc_facil` identifica ofertas, mas não gera pagamento.
2. A organização entrega o produto ou presta o serviço e apresenta uma cobrança com identificação da oferta, unidade, quantidade de SUAScoin e identificador único. Seu agente autenticado declara a entrega; essa declaração **não movimenta o saldo da pessoa**.
3. Depois de receber, a própria pessoa confere a cobrança e escolhe **pagar com SUAScoin** ou **contestar**. Ao pagar, ela autoriza a transferência de sua titularidade para a organização. A organização não pode confirmar em seu lugar. QR ou código de uso único pode localizar a cobrança, mas sua apresentação isolada não autoriza o pagamento. Deve existir um canal assistido e independente da organização para quem não usa celular, preservando a decisão da pessoa.
4. O sistema registra `cobranca_apresentada`, `aguardando_pagamento`, `pago_pela_pessoa`, `contestado`, `estornado` e, depois, `resgate_solicitado` e `resgatado`. Só a autorização explícita da pessoa, ligada à cobrança única, transfere a SUAScoin. Silêncio, prazo vencido ou declaração da organização não executam pagamento. A transação registra pagador pseudônimo, recebedor, valor, momento e referência protegida da entrega, conforme o desenho de privacidade.
5. A organização recebe as unidades e pode solicitar seu **resgate posterior** nas condições do programa. O pagamento em SUAScoin gera um registro de transação e uma base de evidência para prestação de contas; auditoria independente verifica amostras, duplicidades e contestações antes ou durante o resgate. A pessoa recebe comprovante e pode questionar erro, pressão ou entrega incompleta. Estornos preservam a trilha e referenciam a transação original.

Para serviços contínuos, a unidade de comprovação precisa ser definida antes: uma visita, sessão, período concluído ou etapa verificável. Para produto físico, registrar o item e quantidade efetiva. Cada modalidade exige evidências adequadas; um único clique genérico não basta.

## Pagamento e evidência

O modelo proposto combina dois registros com funções diferentes:

| Registro | O que registra | Limite |
| --- | --- | --- |
| Entrega | Declaração da organização, identificação da oferta, momento e eventual contestação. | A declaração isolada não demonstra que a pessoa recebeu. |
| Pagamento SUAScoin | A pessoa transfere unidades à organização ao pagar pelo que recebeu; a organização pode solicitar resgate posterior. | A transação demonstra o pagamento autorizado no sistema, mas ainda exige auditoria da entrega. |

A hipótese inicial para a moeda é emissão controlada, sem venda pública, negociação especulativa ou promessa de valorização. A pessoa é titular das unidades atribuídas e decide quando pagar. Esse controle pode ser exercido por um canal custodiado e acessível, sem exigir que ela guarde chaves privadas ou pague taxas; o custodiante não pode autorizar em seu lugar. A organização recebe o ativo como pagamento e passa a ter um saldo resgatável **somente nas condições previamente definidas**. Regras de emissão, custódia, transferência, resgate, auditoria e interrupção precisariam ser definidas com os responsáveis pelo programa e analisadas juridicamente antes de qualquer valor real. A escolha de blockchain pública, rede permissionada ou banco de dados auditável permanece aberta; o piloto deve comparar custo, governança, privacidade e capacidade de corrigir erros.

O mecanismo candidato é: **atribuição à pessoa → entrega → cobrança → pagamento pela pessoa → saldo da organização → pedido de resgate → repasse ou liquidação pelo responsável → prestação de contas**. Cada pagamento transfere a titularidade e cria um registro único. O resgate consolida transações elegíveis, aplica eventuais estornos e gera uma solicitação auditável ao ente ou fundo responsável. A definição de quem garante o resgate, qual valor em reais corresponde a cada unidade, quando a organização recebe e como se financia esse compromisso é condição prévia para operar com valor real. Até lá, não há promessa de conversão. O registro prova que a pessoa autorizou o pagamento no sistema, enquanto a realidade da entrega continua dependendo das evidências e da auditoria.

**Relação com repasses existentes.** O [MDS informa que os repasses do SUAS ocorrem, entre outras formas, na modalidade fundo a fundo ou por convênios e contratos de repasse](https://www.gov.br/mds/pt-br/acoes-e-programas/suas/gestao-do-suas/financiamento-1/repasses). O [FNAS explica o caminho de recursos federais para fundos estaduais e municipais](https://fnas.mds.gov.br/), e seu [guia de parcerias com OSCs](https://fnas.mds.gov.br/guia-pratico-sobre-execucao-da-acao-219g-em-parcerias-com-oscs-no-suas/) descreve etapas de parceria, execução e prestação de contas. **É uma inferência de desenho**, sujeita a validação institucional, usar pagamentos SUAScoin como evidência para uma etapa posterior de repasse ou liquidação à organização. A moeda não substitui automaticamente transferências, contratos, controles orçamentários ou a prestação de contas exigida no SUAS.

O [Banco Central regulamenta a prestação de serviços de ativos virtuais](https://www.bcb.gov.br/detalhenoticia/20918/nota?s=08); a [CVM avalia tokens conforme os direitos que conferem](https://www.gov.br/cvm/pt-br/assuntos/noticias/2023/cvm-orienta-sobre-caracterizacao-de-tokens-de-recebiveis-e-de-tokens-de-renda-fixa-como-valores-mobiliarios). O enquadramento da SUAScoin dependeria de sua estrutura concreta. Esta página não afirma que a proposta já possa operar como criptomoeda na rede pública.

## Dados, direitos e governança

O [Prontuário Eletrônico do SUAS já registra atendimentos](https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/prontuario-eletronico-da-assistencia-social-sera-integrado-ao-cadastro-unico/). A [Resolução CIT nº 29/2025](https://aplicacoes.mds.gov.br/snas/regulacao/visualizar.php?codigo=6981) prevê sigilo, finalidade e minimização para seus dados. A SUAScoin não deve criar um prontuário paralelo público nem importar dados do CadÚnico ou do Prontuário sem base legal, finalidade e acordo institucional específicos.

Dados de identidade, condição social, localização precisa, descrição do atendimento e documentos ficam fora de qualquer registro público. Mesmo identificadores pseudônimos, hashes e endereços de carteira exigem avaliação de reidentificação: a [ANPD alerta para esse risco em blockchain](https://www.gov.br/anpd/pt-br/assuntos/noticias/blockchain-pode-revolucionar-a-administracao-publica-mas-requer-compatibilizacao-com-a-lgpd-alerta-assessor-da-anpd). O piloto deve definir controlador, operadores, base legal, prazo de retenção, acesso por perfil, resposta a incidentes e mecanismo de correção e exclusão quando cabível, com avaliação de impacto antes de tratar dados reais.

A governança precisa separar quem financia e emite, quem autoriza a oferta, quem declara a entrega, quem audita, quem executa o resgate e quem decide contestações. A própria pessoa atendida faz o pagamento; uma OSC ou custodiante não pode assumir esse ato. O desenho precisa prevenir coleta antecipada de códigos, pressão para pagar antes de receber, cobranças acima do combinado, uso indevido de identidade e conluio. Nenhum resgate pode ser liquidado duas vezes. Publicar apenas indicadores agregados e com proteção contra reidentificação; permitir à pessoa consultar seus pagamentos e contestá-los sem expor sua situação social.

## Sequência de validação

1. **Definir o serviço e a evidência:** entrevistar usuários, equipes e gestores; comparar o fluxo proposto com registros existentes e mapear fraudes, coerção e barreiras de acesso.
2. **Protótipo sem valor financeiro:** simular saldo da pessoa, cobrança, pagamento autorizado por ela, saldo da organização, pedido de resgate, auditoria e estorno com dados fictícios. Comparar um registro convencional auditável com uma rede distribuída.
3. **Piloto autorizado e pequeno:** somente com organizações e responsáveis institucionais que aceitem regras documentadas, avaliação jurídica e de proteção de dados; medir falso positivo, entrega sem registro, tempo de atendimento, reclamações, conciliação e custo operacional. Definir também quem responde por pagamento não confirmado sem prejudicar o acesso da pessoa.
4. **Resgate com valor real:** operar SUAScoin com valor resgatável apenas se o piloto validar pagamento e conciliação e se houver fonte de recursos, taxa de resgate, responsável pela liquidação, governança e conformidade aplicáveis.

**Critério para avançar:** nenhum pagamento ocorre sem autorização explícita da pessoa que recebeu o atendimento; a organização consegue conciliar pagamentos e pedidos de resgate sem duplicidade; o processo detecta e corrige entregas falsas, preserva o direito de contestação, não impõe custo ou fricção à pessoa atendida e demonstra benefício concreto diante de registros convencionais.
