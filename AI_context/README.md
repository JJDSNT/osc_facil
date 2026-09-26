# AI_context — osc_facil

Memória operacional do projeto. Este diretório registra problemas, decisões, trabalho feito e pendências em issues rastreáveis. A documentação de referência está em [`docs/`](../docs/README.md); as issues explicam como chegamos lá e o que falta validar.

## Estado atual

O repositório está em pesquisa inicial; ainda não há aplicação. O [README principal](../README.md) define a proposta. A investigação do Mapa das OSC, feita em 2026-09-26, está em [`ISSUE-0001`](issues/ISSUE-0001.md) e em [`docs/mapa-das-osc.md`](../docs/mapa-das-osc.md).
O objetivo de reproduzir a jornada de descoberta do Ask Izzy, com uma camada brasileira de serviços vinculados a OSCs, está documentado em [`docs/ask-izzy.md`](../docs/ask-izzy.md).

| Issue | Estado | Assunto |
| --- | --- | --- |
| [ISSUE-0001](issues/ISSUE-0001.md) | done | Investigar código, API pública e dados do Mapa das OSC |
| [ISSUE-0002](issues/ISSUE-0002.md) | ready | Validar busca, paginação e caminho de ingestão |
| [ISSUE-0003](issues/ISSUE-0003.md) | backlog | Definir relação entre necessidades e dados verificáveis |
| [ISSUE-0004](issues/ISSUE-0004.md) | backlog | Construir prova de conceito de busca por município |
| [ISSUE-0005](issues/ISSUE-0005.md) | backlog | Avaliar qualidade dos resultados com uma amostra real |
| [ISSUE-0006](issues/ISSUE-0006.md) | done | Pesquisar Ask Izzy e definir referência para POC/MVP |
| [ISSUE-0007](issues/ISSUE-0007.md) | ready | Criar cadastro curado de serviços vinculado às OSCs |

## Fluxo

```text
Issue → investigação/implementação → verificação → documentação → done
```

- `issues/`: histórico e trabalho ativo. Não apagar uma issue ao concluí-la.
- `templates/issue.template.md`: modelo para novas issues.
- `docs/`: referência atualizada sobre fontes, produto e decisões estáveis.

Use IDs sequenciais `ISSUE-0001`, `ISSUE-0002` etc. Registre datas e fatos no **Log de execução**; não apresente hipóteses como resultados. Atualize `related_files` e critérios de aceite conforme o trabalho evoluir. Uma issue só passa a `done` quando seus critérios estiverem satisfeitos; pendências viram novas issues ligadas a ela.

Estados: `backlog`, `ready`, `doing`, `review`, `done`, `blocked`. Prioridades: `low`, `medium`, `high`, `critical`. Tipos: `feature`, `bug`, `refactor`, `research`, `docs`, `infra`. `blockers` registra impedimentos concretos; não é uma lista de decisões normais ainda abertas.

Para encontrar trabalho aberto: `rg '^status: (backlog|ready|doing|review|blocked)$' AI_context/issues`.
