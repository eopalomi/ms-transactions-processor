import { Module } from '@nestjs/common';
import { TransactionsProcessorService } from './services/transacctions-processor.service';
import { PrelationCrudController } from './controllers/prelation-crud.controller';
import { RabbitMQModule } from '@src/libs/rabbitmq/rabbitmq.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionOnlinePgEntity } from './entities/transaction-online.entity'; // Importa tu entidad aquí
import { TransactionDuplicatePgEntity } from './entities/transaction-duplicate.entity';

@Module({
  controllers: [PrelationCrudController],
  providers: [TransactionsProcessorService],
  imports: [
    RabbitMQModule.register([
      {
        name: 'TRANSACTION_CONSUMER',
        url: 'amqp://guest:guest@192.168.23.22:5673/transactions',
        requestingEntity: 'prelation.service',
        consumerQueues: ['trx.cofide'],
      },
    ]),
    TypeOrmModule.forFeature([
      TransactionOnlinePgEntity,
      TransactionDuplicatePgEntity,
    ]),
  ],
})
export class TransacctionsProcessorModule {}
