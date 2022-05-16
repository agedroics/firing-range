import axios from 'axios';
import {Client} from '@stomp/stompjs';
import {Hit} from './Hit';
import config from './Config';

class HitService {
  static doEmergencyStop() {
    return axios.put<void>('/emergency-stop');
  }

  static subscribeToHits(subscriber: (_: Hit) => void) {
    const client = new Client({
      brokerURL: `ws://${config.host}/stomp`,
      onConnect: () => {
        client.subscribe('/topic/hits', (message) =>
          subscriber(JSON.parse(message.body))
        );
      },
    });
    client.activate();
  }
}

export default HitService;
