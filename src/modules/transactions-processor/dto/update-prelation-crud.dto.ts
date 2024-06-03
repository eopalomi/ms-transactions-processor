import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-prelation-crud.dto';

export class UpdatePrelationCrudDto extends PartialType(CreateTransactionDto) {}
