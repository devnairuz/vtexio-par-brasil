import type { ServiceContext } from '@vtex/api'

export async function status(ctx: ServiceContext<any>) {
  ctx.status = 200
  ctx.body = 'OK'
}
