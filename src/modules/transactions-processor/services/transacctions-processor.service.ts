import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-prelation-crud.dto';
import { UpdatePrelationCrudDto } from '../dto/update-prelation-crud.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OnEvent } from '@nestjs/event-emitter';
import { TransactionOnlinePgEntity } from '../entities/transaction-online.entity';
import { TransactionDuplicatePgEntity } from '../entities/transaction-duplicate.entity';

@Injectable()
export class TransactionsProcessorService {
  private readonly logger = new Logger(TransactionsProcessorService.name);

  constructor(
    @InjectRepository(TransactionOnlinePgEntity)
    private transactionOnlinePgEntity: Repository<TransactionOnlinePgEntity>,
    @InjectRepository(TransactionDuplicatePgEntity)
    private transactionDuplicatePgEntity: Repository<TransactionDuplicatePgEntity>,
  ) {}

  @OnEvent('trasaction.event')
  async create(createTransactionDto: Partial<CreateTransactionDto>) {
    try {
      const trxOnline = this.createTransactionEntity(createTransactionDto);
      await this.transactionOnlinePgEntity.save(trxOnline);
    } catch (error) {
      if (error?.code === '23505') {
        this.logger.error(
          'Error al intentar insertar debido a duplicidad: ',
          error,
        );

        const trxDuplicate = this.createTransactionEntity(createTransactionDto);
        await this.transactionDuplicatePgEntity.save(trxDuplicate);
      } else {
        console.error('unknow error');
        throw error;
      }
    }
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

  private createTransactionEntity(
    createTransactionDto: Partial<CreateTransactionDto>,
  ): TransactionOnlinePgEntity | TransactionDuplicatePgEntity {
    const trx = new TransactionOnlinePgEntity();

    trx.coFranqu = 2012;
    trx.coCancom = createTransactionDto.data.codigoEmpresa;
    trx.feLocale = createTransactionDto.data.fechaRecaudo.replace(
      /(\d{4})(\d{2})(\d{2})/,
      '$1-$2-$3',
    );
    trx.hoLocale = createTransactionDto.data.horaRecaudo.replace(
      /(\d{2})(\d{2})(\d{2})/,
      '$1:$2:$3',
    );
    trx.coRefere = createTransactionDto.data.numeroTicket;
    trx.coDocume = createTransactionDto.data.codigoCredito;
    trx.imPagado = createTransactionDto.data.montoRecaudo;
    trx.coTransa = createTransactionDto.data.codigoTransaccion;
    trx.coSecuen = createTransactionDto.data.numeroTicket;
    trx.tiForpag = null;
    trx.tiConsul = null;
    trx.coProduc = null;
    trx.nuDoccli = null;
    trx.coMoneda = '604';
    trx.coPlaveh = createTransactionDto.data.codigoPlaca;
    trx.caVenmt3 = null;
    trx.imPreuni = null;
    trx.imMonbru = createTransactionDto.data.montoBruto;
    trx.deCancom = createTransactionDto.data.descEstacion;
    trx.coRespue = null;
    trx.deRespue = null;
    trx.coAutori = null;
    trx.feRegist = new Date();
    trx.hoRegist = new Date()
      .toLocaleTimeString(undefined, { hour12: false })
      .slice(0, 5);
    trx.msRegist = null;
    trx.coEstado = 0; //defaul
    trx.coEstcon = 'P';
    trx.feProces = new Date();
    trx.coCanale = 0;
    return trx;
  }
}
