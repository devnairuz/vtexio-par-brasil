import type { ServiceContext } from '@vtex/api'
import type { Clients } from '../typings/clients'
import { json } from 'co-body'

export async function checkAccess(ctx: ServiceContext<Clients>, next: () => Promise<any>) {
  const {
    clients: { externalAPI },
    req,
    response
  } = ctx

  const body = await json(req)
  const { identifier } = body

  if (!identifier) {
    response.status = 400
    response.body = { allowed: false, message: 'Identificador não informado.' }
    return
  }

  try {
    const allowedUsers = await externalAPI.getAllowedUsers()

    const allowed = allowedUsers.includes(identifier)

    response.status = allowed ? 200 : 403
    response.body = { allowed }
  } catch (err) {
    response.status = 500
    response.body = {
      allowed: false,
      message: 'Erro ao verificar acesso',
      error: err.message,
    }
  }

  await next()
}