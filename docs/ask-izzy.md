# Ask Izzy como referência de produto

Pesquisa em 2026-09-26. O objetivo do `osc_facil` é chegar a uma **réplica funcional brasileira do percurso de descoberta de ajuda** do Ask Izzy, usando o Mapa das OSC como fonte inicial de organizações. Não se pressupõe equivalência entre as duas bases de dados.

## O que foi observado

O [Ask Izzy](https://askizzy.org.au/) é um diretório australiano gratuito de ajuda. A página inicial oferece busca por texto e nove grandes caminhos visíveis nesta consulta: alimentação, moradia, ajuda financeira, apoio e aconselhamento, violência doméstica e familiar, necessidades cotidianas, saúde e bem-estar, orientação e defesa de direitos, e trabalho/aprendizagem/atividades. A [ajuda oficial](https://askizzy.org.au/using-ask-izzy) orienta escolher uma categoria ou usar frases curtas na busca livre; ao escolher categoria, o site faz perguntas adicionais para melhorar os resultados. A [página institucional](https://about.askizzy.org.au/about/) o descreve como gratuito e anônimo, voltado também a profissionais que ajudam outras pessoas, e afirma que o projeto foi cocriado com pessoas que vivenciaram situação de rua.

Exemplos públicos de etapas mostram o padrão de **perguntas progressivas**: em [alimentação](https://askizzy.org.au/food/personalise/page/food-subcategory), a pessoa escolhe entre refeições, cestas/alimentos e vales; a [etapa de localidade](https://askizzy.org.au/food/personalise/page/location) aceita subúrbio ou código postal; há uma [pergunta sobre para quem é a busca](https://askizzy.org.au/food/personalise/page/who-is-looking-for-help-food). Em [moradia](https://askizzy.org.au/housing/personalise/page/sleep-tonight), há a pergunta sobre ter um local seguro para dormir naquela noite. As etapas variam conforme a necessidade; os exemplos não formam um fluxo único obrigatório.

O site divulga [compartilhamento de fichas, lista para comparar opções e pedidos de feedback](https://askizzy.org.au/what-is-new). Também explica uma função de [saída rápida](https://askizzy.org.au/online-safety) para contextos de violência, alertando corretamente que ela **não apaga o histórico do navegador**. Essas são referências de necessidades de produto, não funcionalidades assumidas para a POC.

## O que sustenta os resultados

As fichas do Ask Izzy vêm do [Infoxchange Service Directory](https://www.infoxchange.org/au/products-and-services/service-directory), uma base de **serviços** com equipe dedicada à manutenção. A [página para adicionar um serviço](https://askizzy.org.au/add-service) informa que novas entradas são conferidas pela equipe antes da publicação e que programas com vários locais ou elegibilidade complexa exigem detalhes adicionais. Esta curadoria é parte central do produto, além da interface.

O [Mapa das OSC](mapa-das-osc.md) contém principalmente registros de **organizações**, áreas/subáreas de atuação, endereços e alguns projetos/textos declarados. Área e proximidade não provam atendimento, horário, elegibilidade ou local da prestação. Logo, a lacuna para um equivalente brasileiro do Ask Izzy é uma camada `serviço → organização → local de atendimento`, com origem, data e estado de verificação próprios. A lista de OSCs pode gerar **candidatas à curadoria**, mas não deve virar automaticamente uma lista de serviços disponíveis.

## Capacidades e correspondência de dados

| Capacidade inspirada no Ask Izzy | Evidência na referência | Situação com Mapa das OSC | Recorte para POC/MVP |
| --- | --- | --- | --- |
| Começar pela necessidade | [Home](https://askizzy.org.au/) e [ajuda](https://askizzy.org.au/using-ask-izzy) | Áreas de OSC não equivalem a necessidades | Criar taxonomia própria pequena, com termos em português e critérios de inclusão. |
| Perguntas curtas por tema | [Alimentação](https://askizzy.org.au/food/personalise/page/food-subcategory) e [moradia](https://askizzy.org.au/housing/personalise/page/sleep-tonight) | Ausência de campos estruturados para muitas respostas | Perguntar só o que muda o resultado e cuja resposta tenha dados para filtrar. |
| Ajuda próxima | [Etapa de localidade](https://askizzy.org.au/food/personalise/page/location) | Município e coordenadas de OSC disponíveis; podem indicar sede | Município manual primeiro; distância só quando local de atendimento for conhecido. |
| Resultado acionável | [Base de serviços e revisão humana](https://askizzy.org.au/add-service) | Contato/endereço da OSC podem existir; serviço e horário precisam validação | Fichas de serviços curados; OSCs candidatas aparecem separadamente. |
| Busca para outra pessoa | [Pergunta sobre destinatário](https://askizzy.org.au/food/personalise/page/who-is-looking-for-help-food) | Não depende da base | Não exigir dados pessoais; o contexto pode ajustar linguagem, sem ser armazenado. |
| Compartilhar/comparar | [Novidades do produto](https://askizzy.org.au/what-is-new) | Dados básicos permitem link, mas ficha precisa ser confiável | Link compartilhável no MVP; comparação fica para depois. |
| Privacidade e segurança | [Privacidade](https://askizzy.org.au/data-privacy) e [segurança online](https://askizzy.org.au/online-safety) | Independente do Mapa | Sem conta/GPS obrigatório; minimizar logs de necessidades e localização; projetar saída rápida antes de abrir fluxo de violência. |

## Jornada de referência para construir

```text
Necessidade em linguagem simples
  → pergunta curta que realmente distingue serviços
  → município escolhido manualmente
  → lista de serviços verificados com contato e fonte
  → ficha com como acessar, local, data de verificação e link da OSC
```

Se não houver serviço verificado, mostrar explicitamente que não há resultado confirmado naquela localidade. OSCs relacionadas podem aparecer em uma seção separada, identificadas como **organizações que talvez possam orientar**, com contato e fonte, nunca como atendimento disponível. A busca livre pode começar como seleção de sinônimos conhecidos; não exige IA generativa para a POC.

## Escopo proposto

### POC: provar a viabilidade da cadeia de dados

- Uma cidade e **um tipo de necessidade**, escolhidos pela disponibilidade de serviços confirmáveis, não pela aparente quantidade de OSCs.
- Extrair OSCs candidatas do Mapa e curar manualmente um pequeno conjunto de serviços reais, com evidência, canal de contato, local, público atendido, forma de acesso e data de conferência quando disponíveis.
- Prototipar a jornada no navegador, em tela pequena, com município informado manualmente. Mostrar fonte e estado de verificação na lista e no detalhe.
- Fazer revisão manual de resultados e caminhos sem resultado. A POC passa quando a cadeia necessidade → serviço verificado → organização → local/contato funciona de ponta a ponta e os casos sem evidência são apresentados com honestidade.

### MVP: produto mínimo para uso limitado

- Duas ou três necessidades com mapeamentos revisados e cobertura explícita de localidades escolhidas.
- Processo repetível de inclusão, correção, reconfirmação e retirada de serviços; registrar quando cada informação foi verificada e distinguir endereço da OSC de local de atendimento.
- Busca por categoria e frase curta, filtros sustentados por dados, lista e ficha acessíveis, link compartilhável e estados claros de erro/sem resultado.
- Testes com pessoas que buscam ajuda e com profissionais/OSCs; medir se encontram uma opção utilizável, falsos positivos e contatos que não funcionam. Publicar a cobertura real, em vez de sugerir cobertura nacional.

Critérios mais operacionais e dependências estão em [próximos passos](proximos-passos.md) e no [histórico de issues](../AI_context/README.md).

## Limites da referência

Os [termos do Ask Izzy](https://askizzy.org.au/terms) restringem uso de conteúdo, aparência e código sem autorização expressa. A referência aqui é o **problema resolvido e o fluxo publicamente descrito**. Criar identidade, textos, componentes e código próprios; não copiar fichas, imagens, marca, interface ou dados do Ask Izzy. A política de dados do Mapa das OSC é tratada separadamente em [sua pesquisa](mapa-das-osc.md).

O resultado dinâmico das páginas de categoria não ficou legível no acesso textual usado nesta pesquisa (apareceu como “Loading services…”). Por isso, não registramos ordem de resultados, campos exatos das fichas nem filtros específicos como fatos verificados. Confirmar esses detalhes por pesquisa de uso apropriada antes de projetar paridade fina de interface.
