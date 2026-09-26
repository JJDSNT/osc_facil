# POC: alimentação em São Paulo

Implementada em 2026-09-26 em [`app/`](../app/). A jornada pergunta se a pessoa procura **uma refeição** ou **outros alimentos** e aceita município ou GPS. O município é a alternativa permanente ao GPS; a POC não pede cadastro.

## Fontes e interpretação

A [Prefeitura de São Paulo lista as OSCs da Rede Cozinha Escola](https://prefeitura.sp.gov.br/web/sesana/w/oscs-rede-cozinha-escola) (página atualizada em 2026-07-03). Três entradas dessa lista tiveram nome e endereço associados manualmente a fichas do Mapa das OSC: Associação da Pedra para a Rocha (`1324143`), Instituto Pra Cima Zona Leste (`1331287`) e Instituto Educacional e Cultural Silva (`1306909`). A [Prefeitura descreve as refeições do programa como gratuitas](https://semanadobrincar.prefeitura.sp.gov.br/web/sesana/w/pre%C3%A7o-do-prato-feito-sobe-acima-da-infla%C3%A7%C3%A3o-na-capital-e-amplia-relev%C3%A2ncia-de-programas-da-prefeitura). O cadastro em [`services.json`](../app/data/services.json) registra fonte, data da página, data de consulta, endereço publicado, coordenadas do Mapa e `id_osc`.

O rótulo **Oferta documentada** significa apenas que uma autoridade pública publicou a unidade na rede. Não representa contato direto recente com a unidade, refeição disponível agora ou horário individual confirmado. A interface orienta conferir o funcionamento antes da visita. Não há oferta documentada nesta POC para **outros alimentos**.

As **organizações relacionadas** vêm do Mapa das OSC com filtro de área de atuação `5` (assistência social). Essa classificação não prova que a OSC distribua alimentos. A aplicação mostra essas organizações em seção separada e não transforma área de atuação em serviço. Se uma OSC já aparece como oferta documentada, ela é removida da lista de relacionadas na mesma busca.

## Consultas usadas

Base pública: `https://mapaosc.ipea.gov.br/api/api`.

| Ação | Consulta | Limite observado |
| --- | --- | --- |
| Autocomplete | `GET /busca/municipio/{texto}` | Interface mostra até 8 opções com nome, UF e código IBGE. |
| Município | `POST /osc/busca_avancada/lista/8/0` com `avancado.dadosGerais.cd_municipio` e `avancado.areasSubareasAtuacao["cd_area_atuacao-5"]=true` | Primeira página de 8 OSCs; sem paginação na POC. |
| GPS | `GET /lista_por_area_atuacao/5/{latitude}/{longitude}` | A instância respondeu com 5 OSCs; o código fonte ordena por distância espacial. |

Essas consultas funcionaram na instância pública e no navegador em 2026-09-26. A busca por município mostra uma pequena primeira página, sem afirmar que são as únicas OSCs da cidade. A busca por GPS usa coordenadas arredondadas para 5 casas decimais na chamada externa, e a própria posição completa só fica na memória da página para calcular distância às três ofertas curadas. O navegador pede permissão apenas quando a pessoa toca **Usar minha localização**. A POC não grava a posição, mas a API do Mapa recebe a coordenada na URL da consulta; políticas de rede e logs do provedor externo não são controlados pelo projeto.

As coordenadas das ofertas vêm das fichas do Mapa e correspondem aos endereços publicados da amostra. Para GPS, a POC mostra ofertas documentadas até 35 km e ordena por distância em linha reta. Esse raio é uma escolha de demonstração; não representa área de atendimento nem tempo de deslocamento.

## Contrato local e próximos passos

Cada entrada curada tem `id`, `kind`, `title`, `organization`, `osc_id`, `municipality_code`, `address`, `lat`, `lon`, `access`, `source_url`, `source_updated_at`, `checked_at` e `verification`. O estado atual é `documented_by_public_authority`. A organização e a unidade são descritas na mesma entrada apenas nesta amostra; o modelo futuro precisa separar organização, serviço e local, porque o endereço da sede pode diferir do atendimento.

Para avançar ao MVP: confirmar diretamente endereço, telefone/canal, horários e regras de acesso; criar revisão e retirada de entradas desatualizadas; avaliar a qualidade dos candidatos em mais municípios e necessidades; definir paginação ou dados próprios conforme os termos de uso do Mapa. O histórico está em [`AI_context`](../AI_context/README.md).
