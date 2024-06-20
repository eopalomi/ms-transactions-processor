import { InjectRepository } from '@nestjs/typeorm';
import { TransactionRepository } from '../../domain/repository/transaction.repository';
import { TrxSimulatePgEntity } from '../entities/transaction-simulate.entity';
import { Repository } from 'typeorm';

export class TransactionAdapter implements TransactionRepository {
  constructor(
    @InjectRepository(TrxSimulatePgEntity)
    private trxSimulatePgEntity: Repository<TrxSimulatePgEntity>,
  ) {}

  async findSimulate(creditCode: string) {
    const result = await this.trxSimulatePgEntity.find({
      where: { nu_docume: creditCode },
    });
    console.log('result', result);
    return result;
  }

  find(creditCode: string) {
    throw new Error('Method not implemented' + creditCode);
  }
}
