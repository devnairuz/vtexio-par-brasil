import { Service } from '@vtex/api'
import type {
  ClientsConfig,
} from '@vtex/api'

import { method } from '@vtex/api'

import { checkAccess } from './handlers/checkAccess'
import { status } from './handlers/status'

import { Clients } from './typings/clients'

const TIMEOUT_MS = 800

const clients: ClientsConfig<Clients> = {
    implementation: Clients,
    options: {
        default: {
            retries: 2,
            timeout: TIMEOUT_MS
        },
    }
}

export default new Service({
  clients,
  routes: {
    checkAccess: method({
      POST: [checkAccess],
    }),
    status: method({
      GET: [status]
    })
  },
})
