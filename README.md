# osc_facil

Plataforma brasileira para encontrar ajuda a partir de uma necessidade, com uma jornada funcional inspirada no [Ask Izzy](https://askizzy.org.au/). O objetivo é chegar a uma prova de conceito (POC) e depois a um produto mínimo viável (MVP), com interface, textos e código próprios.

Uma pessoa poderá começar com algo como “preciso de comida”, responder somente às perguntas que ajudam a filtrar opções, escolher sua localidade e encontrar formas de contato e acesso. A busca deve funcionar no celular sem cadastro ou permissão obrigatória de localização.

## Dados e limite principal

O [Mapa das OSC](https://mapaosc.ipea.gov.br/) é a fonte inicial para identificar organizações, áreas de atuação, localização e contatos. Seu cadastro **não confirma que uma OSC presta um serviço específico**, nem informa necessariamente horário, elegibilidade ou local do atendimento. Para mostrar serviços como resultados acionáveis, o projeto precisará de uma camada própria de curadoria e verificação, vinculada às OSCs. Organizações ainda não verificadas como prestadoras de um serviço deverão aparecer identificadas separadamente.

Fluxo pretendido:

```text
Necessidade → pergunta curta → município → serviço verificado → como obter ajuda
                                        ↘ OSC relacionada, ainda não verificada
```

## Escopo

**POC:** uma necessidade e uma cidade escolhidas após examinar a qualidade dos dados. Confirmar manualmente um pequeno conjunto de serviços e demonstrar a jornada completa, incluindo estados de erro e ausência de resultados.

**MVP:** ampliar para duas ou três necessidades e localidades com cobertura declarada, manter um processo de inclusão/correção/reconfirmação dos serviços e validar os resultados com pessoas que buscam ajuda e com organizações. A ampliação depende da qualidade das informações, não apenas do número de OSCs cadastradas.

## Estado do projeto

**Pesquisa e definição da POC.** Ainda não há aplicação implementada. Foram pesquisados a instância pública e o código do Mapa das OSC, além do fluxo e da base de serviços do Ask Izzy. Os próximos passos estão registrados como issues.

## Documentação

- [Pesquisa do Ask Izzy](docs/ask-izzy.md): jornada de referência, diferenças de dados e recorte de POC/MVP.
- [Pesquisa do Mapa das OSC](docs/mapa-das-osc.md): código fonte, API pública, dados e limitações.
- [Plano de próximos passos](docs/proximos-passos.md): sequência de trabalho e critérios de aceite.
- [AI_context](AI_context/README.md): histórico de issues com frontmatter, decisões e trabalho pendente.
