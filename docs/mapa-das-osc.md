# Pesquisa: Mapa das OSC

Verificação em 2026-09-26. Esta página distingue documentação publicada, código fonte e requisições feitas à instância pública.

## Fontes e arquitetura observada

O [portal do Ipea](https://mapaosc.ipea.gov.br/) apresenta OSCs, mapa, indicadores e [bases para download](https://mapaosc.ipea.gov.br/base-dados). Os repositórios públicos relevantes são:

| Repositório | Papel observado |
| --- | --- |
| [`mapa-osc-api`](https://github.com/Plataformas-Cidadania/mapa-osc-api) | API atual em PHP/Lumen; as [rotas](https://github.com/Plataformas-Cidadania/mapa-osc-api/blob/master/routes/web.php) incluem OSCs, busca, áreas e dados geográficos. |
| [`mapa-osc-front`](https://github.com/Plataformas-Cidadania/mapa-osc-front) | Código do portal/interface. |
| [`mapa-osc-data-import`](https://github.com/Plataformas-Cidadania/mapa-osc-data-import) | Rotina de atualização e classificação das OSCs. |
| [`portalosc`](https://github.com/Plataformas-Cidadania/portalosc) | API anterior. Sua [wiki](https://github.com/Plataformas-Cidadania/portalosc/wiki) informa acesso pela rede interna do Ipea na porta 8383; não é a referência para as rotas públicas atuais. |

O [código da atualização](https://github.com/Plataformas-Cidadania/mapa-osc-data-import) explica que a identificação de OSCs e as áreas de atuação usam dados da Receita Federal, CNAE e padrões aplicados à razão social. A geolocalização é uma etapa separada. Também existem informações inseridas por representantes das OSCs. Assim, campos de uma mesma página podem ter fontes e datas diferentes.

## API pública: contrato visto na instância

O link “API” do portal leva ao [Swagger](https://mapaosc.ipea.gov.br/api/api/documentation); a interface carrega a [especificação OpenAPI](https://mapaosc.ipea.gov.br/api/docs). O JSON lista rotas `/api/...`, mas o servidor publicado monta a API sob `/api`: o endereço funcional para essas rotas é **`https://mapaosc.ipea.gov.br/api/api/...`**. Requisições às mesmas rotas em `https://mapaosc.ipea.gov.br/api/...` retornaram HTTP 404 nos testes abaixo. O [arquivo de rotas](https://github.com/Plataformas-Cidadania/mapa-osc-api/blob/master/routes/web.php) contém rotas públicas adicionais que não apareceram na especificação consultada.

| GET na base `/api/api` | Resposta observada | Uso possível |
| --- | --- | --- |
| `/area_atuacao` | 200; lista de códigos e nomes de áreas | Mostrar filtros compreensíveis. |
| `/subarea_atuacao` | 200; lista de subáreas | Refinar classificação. |
| `/busca/municipio/Sao%20Paulo` | 200; lista com código IBGE, nome e UF | Escolher município sem pedir GPS. |
| `/osc/1036957` | 200; registro básico, incluindo `id_osc`, CNPJ, status e fontes | Identificador e situação da OSC. |
| `/osc/cabecalho/1036957` | 200; razão social e natureza jurídica | Nome da organização. |
| `/osc/dados_gerais/1036957` | 200; resumo, endereço, município, contatos e `geo_localizacao` | Página de detalhe; muitos campos podem ser nulos. |
| `/osc/areas_atuacao/1036957` | 200; área, subárea e `ft_area_atuacao` | Exibir tema e origem da classificação. |
| `/osc/projetos/1036957` | 200; lista curta de projetos com título e data | Pista para revisão, sem equiparar projeto a atendimento atual. |
| `/geo/oscs/municipio/3550308` | 200; 60.208 registros e cerca de 9,9 MB neste teste | Coordenadas de OSCs no município de São Paulo; resposta grande para uso direto em celular. |

Exemplo reproduzível, com consulta pequena:

```sh
curl --fail --silent --show-error \
  'https://mapaosc.ipea.gov.br/api/api/busca/municipio/Sao%20Paulo'
```

Na etapa de construção da POC, `POST /osc/busca_avancada/lista/8/0` com código IBGE `3550308` e filtro `cd_area_atuacao-5` respondeu com oito OSCs. `GET /lista_por_area_atuacao/5/-23.53330/-46.64400` respondeu com cinco OSCs próximas; o [repositório da API](https://github.com/Plataformas-Cidadania/mapa-osc-api) usa `ST_Distance` para ordenação dessa consulta. O navegador conseguiu chamar ambas as rotas diretamente em 2026-09-26. O contrato adotado está em [POC de alimentação](poc-alimentacao.md). Ainda não foram validados paginação completa, dois portes de município nem limites operacionais da API. A tentativa de `GET /api/api/cnpj/14376301000129` expirou após 25 segundos, portanto não há conclusão sobre essa rota. Todas as chamadas foram sem autenticação. Não inferir garantias de disponibilidade ou estabilidade do contrato a partir de uma resposta 200.

## Base para download

A [página de bases](https://mapaosc.ipea.gov.br/base-dados) informa atualização mensal, oferece base principal CSV e dicionário de variáveis XLSX, além de arquivos de projetos e de áreas/subáreas. Na consulta feita, a página marcava coleta e envio em agosto de 2026. Ela diz explicitamente que a base principal inclui OSCs ativas **e baixadas**. Uma importação futura deve usar o dicionário correspondente ao arquivo baixado, registrar a data da fonte e filtrar situação cadastral de acordo com a finalidade do produto. Não assumimos que todos os campos da API estejam presentes no CSV.

## Implicações para o `osc_facil`

1. **Descoberta por necessidade exige curadoria.** “Assistência social” ou “Saúde” são áreas de OSC, não catálogos de serviços. Não transformar automaticamente uma área em “fornece comida”, “atende hoje” ou “aceita encaminhamento”.
2. **Proximidade é apenas um sinal.** Coordenada pode refletir sede ou endereço cadastral, não o local onde ocorre atendimento. Exibir endereço e origem; pedir confirmação à organização antes de afirmar cobertura ou funcionamento.
3. **Evitar chamadas volumosas no cliente.** O endpoint geográfico de São Paulo devolveu quase 10 MB. Avaliar consulta paginada ou uma base local reduzida, com atualização controlada, conforme termos de uso.
4. **Preservar proveniência.** Respostas de detalhe trazem campos `ft_*` que identificam fontes. Guardar fonte e data por atributo quando houver ingestão, além de link para a página original `https://mapaosc.ipea.gov.br/detalhar/{id_osc}`.
5. **Tratar dados ausentes como ausentes.** Projetos e texto livre podem ser antigos; contatos podem estar vazios. O resultado deve informar quando oferta e disponibilidade não foram verificadas.

## Uso e atribuição

Os [termos do portal, versão 2025-03-20](https://mapaosc.ipea.gov.br/termosuso), proíbem reprodução e distribuição de conteúdo hospedado para fins comerciais; permitem republicação/divulgação de conteúdo público com citação de fonte, título, autor e data de acesso. Conferir os termos vigentes e o caso de uso específico antes de armazenar, republicar ou monetizar dados. A licença do código de um repositório não substitui os termos dos dados do portal. Esta pesquisa não estabelece autorização para qualquer forma de redistribuição.

## O que ainda precisa de verificação

- Paginação, cobertura, semântica e limites operacionais das rotas de busca por área e busca avançada.
- Cobertura, precisão e atualização dos endereços e coordenadas numa amostra de diferentes municípios.
- Campos do CSV e seu dicionário na edição que será usada.
- Regras atuais de atribuição, cache e republicação aplicáveis ao produto planejado.
- Existência de uma fonte verificável de **serviços** e meios de validar horários, público atendido e forma de acesso.
