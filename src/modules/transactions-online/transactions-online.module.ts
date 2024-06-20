import { Module } from '@nestjs/common';
import { TransactionController } from './presentation/controller/transaction-online.controller';
import { TransactionRepository } from './domain/repository/transaction.repository';
import { TransactionAdapter } from './infrastructure/adapter/transaction.adapter';
import { TrxSimulatePgEntity } from './infrastructure/entities/transaction-simulate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FranquiciaPgEntity,
  TransationPgEntity,
} from './infrastructure/entities/transaction.entity';
import { FindTransactionSimulateUseCase } from './application/find-transaction-simulate.use-case';

@Module({
  providers: [
    { provide: TransactionRepository, useClass: TransactionAdapter },
    FindTransactionSimulateUseCase,
  ],
  controllers: [TransactionController],
  imports: [
    TypeOrmModule.forFeature([
      TrxSimulatePgEntity,
      TransationPgEntity,
      FranquiciaPgEntity,
    ]),
  ],
})
export class TransactionsOnlineModule {}
