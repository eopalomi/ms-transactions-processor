import { Injectable } from '@nestjs/common';
import { CreatePrelationCrudDto } from '../dto/create-prelation-crud.dto';
import { UpdatePrelationCrudDto } from '../dto/update-prelation-crud.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OnEvent } from '@nestjs/event-emitter';
import { Tbtrxonl } from '../model/trxonl.entity';

@Injectable()
export class PrelationCrudService {
  constructor(
    @InjectRepository(Tbtrxonl)
    private tbtrxonlRepository: Repository<Tbtrxonl>,
  ) {}

  @OnEvent('trasaction.event')
  create(createPrelationCrudDto: CreatePrelationCrudDto) {
    console.log('createPrelationCrudDto', createPrelationCrudDto);
    return 'This action adds a new prelationCrud';
  }

  findAll() {
    return `This action returns all prelationCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prelationCrud`;
  }

  update(id: number, _updatePrelationCrudDto: UpdatePrelationCrudDto) {
    console.log('_updatePrelationCrudDto', _updatePrelationCrudDto);
    return `This action updates a #${id} prelationCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} prelationCrud`;
  }

  async createTbtrxonl(tbtrxonlData: Partial<Tbtrxonl>): Promise<Tbtrxonl> {
    const tbtrxonl = this.tbtrxonlRepository.create(tbtrxonlData);
    return await this.tbtrxonlRepository.save(tbtrxonl);
  }
}
