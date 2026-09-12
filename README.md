# osc_facil

Projeto para criar uma plataforma brasileira de descoberta de serviços sociais, inspirada conceitualmente no **Ask Izzy**.

A proposta é utilizar inicialmente os dados públicos do **Mapa das OSC** para permitir que uma pessoa encontre organizações e serviços de apoio próximos a partir de uma necessidade simples.

Exemplos:

~~~text
"Preciso de comida"
"Preciso de atendimento psicológico"
"Preciso de orientação jurídica"
"Preciso de um abrigo"
"Preciso de ajuda para uma pessoa idosa"
~~~

Em vez de exigir que o usuário conheça o nome de uma organização, o `osc_facil` deverá partir da necessidade da pessoa e tentar indicar opções relevantes próximas.

Fluxo conceitual:

~~~text
Necessidade
    ↓
Categoria / filtros
    ↓
Localização
    ↓
Dados do Mapa das OSC
    ↓
Organizações / serviços próximos
~~~

## Objetivos iniciais

- estudar a API e os dados disponíveis no Mapa das OSC;
- pesquisar OSCs por localização;
- classificar resultados por tipo de ajuda;
- criar uma interface simples e mobile-first;
- evitar cadastro obrigatório;
- preservar ao máximo a privacidade do usuário.

## Visão futura

O Mapa das OSC será a primeira fonte de dados, mas o projeto poderá posteriormente integrar outras bases públicas e permitir que organizações complementem ou atualizem seus próprios serviços.

## Status

~~~text
IDEA / INITIAL RESEARCH
~~~
