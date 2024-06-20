import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../domain/repository/transaction.repository';

@Injectable()
export class FindTransactionSimulateUseCase {
  constructor(private transactionOnlineRepository: TransactionRepository) {}

  execute = (creditCode: string) => {
    return this.transactionOnlineRepository.findSimulate(creditCode);
  };
}
