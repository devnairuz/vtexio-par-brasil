import type { ServiceContext } from '@vtex/api'
import type { Clients } from '../clients'

interface ClientSearchResult {
  id: string
}

type CustomContext = ServiceContext<Clients>

export async function checkOrCreateUser(ctx: CustomContext, next: () => Promise<void>) {
  const { masterdata } = ctx.clients
  const email = ctx.query.email as string

  if (!email) {
    ctx.status = 400
    ctx.body = { message: 'E-mail não informado' }
    return
  }

  try {
    const found = await masterdata.searchDocuments<ClientSearchResult>({
      dataEntity: 'CL',
      fields: ['id'],
      pagination: { page: 1, pageSize: 1 },
      where: `email=${email}`
    })

    if (found.length === 0) {
      await masterdata.createDocument({
        dataEntity: 'CL',
        fields: {
          email,
          approved: true
        }
      })
    } else {
      const existingClientId = found[0].id;

      await masterdata.updatePartialDocument({
        dataEntity: 'CL',
        id: existingClientId,
        fields: {
          approved: true
        }
      })
    }

    ctx.status = 200
    ctx.body = { message: 'Usuário verificado/criado no Master Data' }
  } catch (error) {
    ctx.status = 500
    ctx.body = { message: 'Erro ao criar ou atualizar o cliente', error }
  }

  await next()
}
