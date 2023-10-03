import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as net from 'net';
import { TcpController } from './tcp.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Crea un servidor TCP
  const tcpServer = net.createServer((client) => {
    client.setEncoding('utf-8');

    // Escucha eventos de datos del cliente TCP
    client.on('data', (data) => {
      // Llama al controlador con los datos recibidos
      app.get(TcpController).handleData(data.toString(), client);
    });
  });

  // Escucha en el puerto 12345
  tcpServer.listen(12345, '127.0.0.1', () => {
    console.log('Servidor TCP escuchando en el puerto 12345');
  });

  await app.listen(3000);
}
bootstrap();
