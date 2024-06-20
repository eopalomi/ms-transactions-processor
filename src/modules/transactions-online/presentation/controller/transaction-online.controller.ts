import { Controller, Get, Param } from '@nestjs/common';
import { FindTransactionSimulateUseCase } from '../../application/find-transaction-simulate.use-case';

@Controller('transaction-online')
export class TransactionController {
  constructor(
    private findTransactionSimulateUseCase: FindTransactionSimulateUseCase,
  ) {}

  @Get(':creditCode')
  find(@Param('creditCode') creditCode: string) {
    return this.findTransactionSimulateUseCase.execute(creditCode);
  }
}
