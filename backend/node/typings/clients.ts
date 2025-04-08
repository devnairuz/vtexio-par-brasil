// typings/clients.d.ts
import { IOClients } from '@vtex/api'
import ExternalAPI from '../clients/externalAPI'

export class Clients extends IOClients {
  public get externalAPI() {
    return this.getOrSet('externalAPI', ExternalAPI)
  }
}
