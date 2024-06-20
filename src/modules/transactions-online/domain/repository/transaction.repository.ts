export abstract class TransactionRepository {
  abstract find(creditCode: string);
  abstract findSimulate(creditCode: string);
}
