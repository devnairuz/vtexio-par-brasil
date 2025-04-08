// /node/clients/externalAPI.ts

import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class ExternalAPI extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://localhost:3333/api', context, options)
  }

  public async getAllowedUsers(): Promise<string[]> {
    return this.http.get('/users');
  }
}
