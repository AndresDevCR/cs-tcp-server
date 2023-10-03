import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TcpController } from './tcp.controller';

@Module({
  imports: [],
  controllers: [AppController, TcpController],
  providers: [AppService],
})
export class AppModule {}
