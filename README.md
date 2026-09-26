# osc_facil

Plataforma brasileira para encontrar ajuda a partir de uma necessidade, com uma jornada funcional inspirada no [Ask Izzy](https://askizzy.org.au/). O objetivo é chegar a uma prova de conceito (POC) e depois a um produto mínimo viável (MVP), com interface, textos e código próprios.

Uma pessoa pode começar com “preciso de comida”, escolher entre refeição e outros alimentos e informar um município ou usar o GPS com permissão explícita. A busca funciona no celular sem cadastro nem permissão obrigatória de localização.

## Dados e limite principal

O [Mapa das OSC](https://mapaosc.ipea.gov.br/) é a fonte inicial para identificar organizações, áreas de atuação, localização e contatos. Seu cadastro **não confirma que uma OSC presta um serviço específico**, nem informa necessariamente horário, elegibilidade ou local do atendimento. Para mostrar serviços como resultados acionáveis, o projeto precisará de uma camada própria de curadoria e verificação, vinculada às OSCs. Organizações ainda não verificadas como prestadoras de um serviço deverão aparecer identificadas separadamente.

Fluxo da POC:

```text
Necessidade → refeição ou outros alimentos → município ou GPS → oferta documentada → fonte e endereço
                                                        ↘ OSC relacionada, sem atendimento confirmado
```

## Escopo

**POC atual:** alimentação em São Paulo, SP. Três unidades da Rede Cozinha Escola constam em [lista pública da Prefeitura](https://prefeitura.sp.gov.br/web/sesana/w/oscs-rede-cozinha-escola) e foram vinculadas a fichas do Mapa das OSC. Isso documenta a participação no programa, mas horários, disponibilidade e condições de acesso de cada unidade ainda precisam de confirmação direta. A busca também mostra OSCs classificadas em assistência social, claramente separadas das ofertas documentadas.

**MVP:** ampliar para duas ou três necessidades e localidades com cobertura declarada, manter um processo de inclusão/correção/reconfirmação dos serviços e validar os resultados com pessoas que buscam ajuda e com organizações. A ampliação depende da qualidade das informações, não apenas do número de OSCs cadastradas.

**Segunda etapa proposta:** [SUAScoin](docs/suascoin.md) estuda uma moeda digital para pagar produtos e serviços na rede participante. Depois de receber, a pessoa pagaria com seu saldo; a organização receberia as unidades e poderia solicitar resgate futuro por um mecanismo ligado a repasses e prestação de contas. É um conceito de pesquisa, sem moeda emitida nem integração oficial ao SUAS.

## Estado do projeto

**Protótipo funcional, ainda em validação.** Há uma interface estática em [`app/`](app/) com busca por município ou GPS opcional, resultados com proveniência e estados de erro e ausência. A consulta ao Mapa das OSC é feita diretamente pelo navegador e depende da disponibilidade da API pública. A localização obtida pelo GPS não é armazenada pelo protótipo; ao buscar, as coordenadas são enviadas ao Mapa das OSC para consultar OSCs próximas.

## Executar localmente

Requer Python 3 para servir os arquivos estáticos e um navegador moderno:

```sh
python3 -m http.server 8000
```

Abra `http://localhost:8000/app/`. A página precisa de conexão com a API do Mapa das OSC para autocomplete de município e OSCs relacionadas. O atalho **Usar São Paulo, SP** permite ver as ofertas curadas mesmo se a API estiver indisponível. Para testar a lógica local:

```sh
node --test app/domain.test.mjs
```

## Documentação

- [Pesquisa do Ask Izzy](docs/ask-izzy.md): jornada de referência, diferenças de dados e recorte de POC/MVP.
- [Pesquisa do Mapa das OSC](docs/mapa-das-osc.md): código fonte, API pública, dados e limitações.
- [Plano de próximos passos](docs/proximos-passos.md): sequência de trabalho e critérios de aceite.
- [POC de alimentação](docs/poc-alimentacao.md): recorte, fontes, GPS, contrato dos dados e limites.
- [SUAScoin](docs/suascoin.md): hipótese de comprovação de entrega, papel da moeda e condições para um piloto.
- [AI_context](AI_context/README.md): histórico de issues com frontmatter, decisões e trabalho pendente.
