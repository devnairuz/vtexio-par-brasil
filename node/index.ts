import { Service, ServiceContext } from '@vtex/api'
import { Clients } from './clients'
import { checkOrCreateUser } from './services/checkOrCreateUser'

export async function status(ctx: ServiceContext<Clients>, next: () => Promise<void>) {
  ctx.status = 200
  ctx.body = { message: 'ok' }
  await next()
}

export default new Service({
  clients: {
    implementation: Clients,
    options: {
      memory: {}
    }
  },
  routes: {
    checkOrCreateUser,
    status
  },
});