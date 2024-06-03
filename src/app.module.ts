import { Module } from '@nestjs/common';
import { TransacctionsProcessorModule } from './modules/transactions-processor/transacctions-processor.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from '@src/libs/config/env.config';
import { configSchema } from '@src/libs/config/config.schema';
import { DatabaseModule } from './libs/database/database.module';

@Module({
  imports: [
    TransacctionsProcessorModule,
    DatabaseModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: configSchema,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
