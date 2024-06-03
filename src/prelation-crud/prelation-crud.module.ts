import { Module } from '@nestjs/common';
import { PrelationCrudService } from './services/prelation-crud.service';
import { PrelationCrudController } from './controllers/prelation-crud.controller';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tbtrxonl } from './model/trxonl.entity'; // Importa tu entidad aquí

@Module({
  controllers: [PrelationCrudController],
  providers: [PrelationCrudService],
  imports: [
    RabbitMQModule.register([
      {
        name: 'TRANSACTION_CONSUMER',
        url: 'amqp://guest:guest@192.168.23.22:5673/transactions',
        requestingEntity: 'prelation.service',
        consumerQueues: ['trx.cofide'],
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Tbtrxonl],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Tbtrxonl]),
  ],
})
export class PrelationCrudModule {}
