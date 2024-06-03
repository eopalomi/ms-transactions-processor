import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsProcessorService } from '../services/transacctions-processor.service';
import { CreateTransactionDto } from '../dto/create-prelation-crud.dto';
import { UpdatePrelationCrudDto } from '../dto/update-prelation-crud.dto';

@Controller('prelation-crud')
export class PrelationCrudController {
  constructor(
    private readonly prelationCrudService: TransactionsProcessorService,
  ) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.prelationCrudService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.prelationCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prelationCrudService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePrelationCrudDto: UpdatePrelationCrudDto,
  ) {
    return this.prelationCrudService.update(+id, updatePrelationCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prelationCrudService.remove(+id);
  }
}
