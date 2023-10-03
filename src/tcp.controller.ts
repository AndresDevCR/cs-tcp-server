import { Controller } from '@nestjs/common';
import { Socket } from 'net';

@Controller()
export class TcpController {
  constructor() {}

  handleData(data: string, client: Socket) {
    // Procesa los datos recibidos, puedes hacer cualquier operación aquí
    console.log('Datos recibidos:', data);

    // Devuelve una respuesta opcional
    client.write('Respuesta: ' + data);
  }
}
