# Próximos passos do `osc_facil`

## Objetivo da primeira prova de conceito

Provar uma jornada funcional inspirada no [Ask Izzy](ask-izzy.md): **necessidade → refinamento curto → município ou GPS → oferta documentada → fonte e local**. O recorte já implementado é alimentação em São Paulo, com [três entradas da Rede Cozinha Escola](poc-alimentacao.md). Confirmação direta de horários, contatos e regras de acesso ainda é necessária para chegar a serviços confirmados. OSCs apenas relacionadas aparecem em seção separada, sem promessa de atendimento.

## Sequência de trabalho

1. **Ampliar a validação do contrato do Mapa** ([ISSUE-0002](../AI_context/issues/ISSUE-0002.md)). A consulta pequena já funciona; testar dois portes de município, paginação, termos de uso e estabilidade antes de definir estratégia de dados para o MVP.
2. **Completar a taxonomia** ([ISSUE-0003](../AI_context/issues/ISSUE-0003.md)). Alimentação é a necessidade piloto; validar outras necessidades apenas quando houver evidência de serviço.
3. **Confirmar e manter serviços** ([ISSUE-0007](../AI_context/issues/ISSUE-0007.md)). Separar organização, serviço e local de atendimento no modelo futuro; confirmar canais, horários e regras de acesso com as unidades; definir revisão e retirada.
4. **Aprimorar a jornada** ([ISSUE-0004](../AI_context/issues/ISSUE-0004.md)). A interface inicial usa município ou GPS opcional; revisar por teclado e com pessoas usuárias, melhorar detalhe de serviço e alternativas quando faltarem dados.
5. **Validar qualidade** ([ISSUE-0005](../AI_context/issues/ISSUE-0005.md)). Revisar falso positivo, contato inválido, local inadequado e comportamento para nenhum resultado confirmado.

## Critérios de aceite da prova de conceito

- A busca funciona sem GPS ou conta e aceita município por nome com seleção explícita de UF.
- Uma falha da API produz mensagem compreensível e não inventa resultados.
- Resultados principais mostram apenas serviços com evidência de oferta; organizações relacionadas aparecem identificadas separadamente.
- Cada serviço informa como contatar/acessar, local quando conhecido, fonte e data de verificação; a OSC vinculada traz link para o Mapa.
- Dados faltantes não aparecem como “não oferece”; aparecem como “não informado”.
- Há registro reproduzível de fonte/data da informação e de quem/como a conferiu.

## Decisões abertas

- São Paulo e alimentação foram escolhidos para a POC; resta comprovar a qualidade operacional das três unidades e avaliar ampliação geográfica.
- O produto será apenas gratuito e informativo, ou haverá algum uso comercial? Isso afeta a avaliação dos termos do fornecedor.
- Quem fará a confirmação e reconfirmação de serviços, horários e elegibilidade no MVP?

Não é necessário decidir framework antes de validar as rotas e o modelo de informação.
