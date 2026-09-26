# Próximos passos do `osc_facil`

## Objetivo da primeira prova de conceito

Provar uma jornada funcional inspirada no [Ask Izzy](ask-izzy.md): **necessidade → refinamento curto → município → serviço confirmado → como obter ajuda**. Começar por uma cidade e uma necessidade com organizações identificáveis no Mapa das OSC e serviços passíveis de confirmação. O resultado principal deve representar serviços curados; OSCs apenas relacionadas podem aparecer em seção separada, sem promessa de atendimento.

## Sequência de trabalho

1. **Validar o contrato do Mapa** ([ISSUE-0002](../AI_context/issues/ISSUE-0002.md)). Testar busca limitada e campos da fonte; escolher consulta ao vivo ou importação reduzida após conferir termos de uso.
2. **Escolher a necessidade inicial** ([ISSUE-0003](../AI_context/issues/ISSUE-0003.md)). Criar uma pergunta de refinamento apenas se existir evidência correspondente no cadastro de serviços.
3. **Criar uma camada de serviços** ([ISSUE-0007](../AI_context/issues/ISSUE-0007.md)). Modelo mínimo separado para organização, serviço e local de atendimento; curar manualmente as primeiras entradas, com fonte, data, estado de verificação e forma de acesso.
4. **Construir a jornada** ([ISSUE-0004](../AI_context/issues/ISSUE-0004.md)). Necessidade, refinamento, município, lista e detalhe com contato e origem. Sem cadastro ou permissão de localização obrigatórios.
5. **Validar qualidade** ([ISSUE-0005](../AI_context/issues/ISSUE-0005.md)). Revisar falso positivo, contato inválido, local inadequado e comportamento para nenhum resultado confirmado.

## Critérios de aceite da prova de conceito

- A busca funciona sem GPS ou conta e aceita município por nome com seleção explícita de UF.
- Uma falha da API produz mensagem compreensível e não inventa resultados.
- Resultados principais mostram apenas serviços com evidência de oferta; organizações relacionadas aparecem identificadas separadamente.
- Cada serviço informa como contatar/acessar, local quando conhecido, fonte e data de verificação; a OSC vinculada traz link para o Mapa.
- Dados faltantes não aparecem como “não oferece”; aparecem como “não informado”.
- Há registro reproduzível de fonte/data da informação e de quem/como a conferiu.

## Decisões abertas

- Qual cidade e necessidade têm dados suficientes para a POC? A escolha deve vir de uma amostra verificada.
- O produto será apenas gratuito e informativo, ou haverá algum uso comercial? Isso afeta a avaliação dos termos do fornecedor.
- Quem fará a confirmação e reconfirmação de serviços, horários e elegibilidade no MVP?

Não é necessário decidir framework antes de validar as rotas e o modelo de informação.
