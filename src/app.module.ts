import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env/env.service';
import { EnvController } from './env/env.controller';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController, EnvController],
  providers: [AppService, EnvService],
})
export class AppModule {}
