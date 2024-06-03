import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrelationCrudModule } from './prelation-crud/prelation-crud.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [PrelationCrudModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
