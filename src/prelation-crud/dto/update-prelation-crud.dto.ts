import { PartialType } from '@nestjs/mapped-types';
import { CreatePrelationCrudDto } from './create-prelation-crud.dto';

export class UpdatePrelationCrudDto extends PartialType(
  CreatePrelationCrudDto,
) {}
