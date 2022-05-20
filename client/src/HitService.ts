import axios, { AxiosResponse } from 'axios'
import { Client } from '@stomp/stompjs'
import { Hit } from './Hit'
import config from './Config'

class HitService {
  static doEmergencyStop(): Promise<AxiosResponse<void>> {
    return axios.put<void>('/emergency-stop')
  }

  static subscribeToHits(subscriber: (_: Hit) => void): Client {
    const client = new Client({
      brokerURL: `ws://${config.host}/stomp`,
      onConnect: () => {
        client.subscribe('/topic/hits', (message) =>
          subscriber(JSON.parse(message.body))
        )
      },
    })
    client.activate()
    return client
  }
}

export default HitService
