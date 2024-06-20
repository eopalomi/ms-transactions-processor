import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';

@Entity({ schema: 'recaud', name: 'tcfranqu' })
export class FranquiciaPgEntity {
  @PrimaryColumn({ type: 'smallint', comment: 'CODIGO DE FRANQUICIA' })
  co_franqu: number;

  @Column({ type: 'varchar', comment: 'FRANQUICIA' })
  no_franqu: string;

  @Column({ type: 'boolean', default: true, comment: 'ESTADO' })
  il_estado: boolean;

  @OneToMany(() => TransationPgEntity, (transation) => transation.franqu)
  tbtransaction: TransationPgEntity[];
}

@Entity({ schema: 'recaud', name: 'tbtrxonl' })
@Unique([
  'co_franqu',
  'fe_locale',
  'ho_locale',
  'co_refere',
  'im_pagado',
  'co_docume',
])
export class TransationPgEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: 'ID TRANSACCION ONLINE' })
  id_trxonl: number;

  @Column({ type: 'smallint', comment: 'CODIGO DE FRANQUICIA' })
  co_franqu: number;

  @Column({ type: 'varchar', length: 15, comment: 'CODIGO CANAL' })
  co_cancom: string;

  @Column({ type: 'date', comment: 'FECHA DE PAGO' })
  fe_locale: Date;

  @Column({ type: 'time', comment: 'HORA DE PAGO' })
  ho_locale: string;

  @Column({ type: 'varchar', comment: 'NUMERO DE REFERENCIA/VOUCHER' })
  co_refere: string;

  @Column({
    type: 'varchar',
    length: 14,
    comment: 'NUMERO DE REFERENCIA DEL DOCUMENTO/CREDITO',
  })
  co_docume: string;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    comment: 'IMPORTE PAGADO',
  })
  im_pagado: number;

  @Column({ type: 'char', length: 6, comment: 'CODIGO DE TRANSACCION' })
  co_transa: string;

  @Column({ type: 'varchar', nullable: true, comment: 'NUMERO DE SECUENCIA' })
  co_secuen: string;

  @Column({
    type: 'smallint',
    nullable: true,
    comment: 'TIPO DE FORMA DE PAGO',
  })
  ti_forpag: number;

  @Column({ type: 'smallint', nullable: true, comment: 'TIPO DE CONSULTA' })
  ti_consul: number;

  @Column({
    type: 'char',
    length: 3,
    nullable: true,
    comment: 'CODIGO DE PRODUCTO',
  })
  co_produc: string;

  @Column({
    type: 'varchar',
    length: 16,
    nullable: true,
    comment: 'NUMERO DE DOCUMENTO DEL CLIENTE',
  })
  nu_doccli: string;

  @Column({
    type: 'char',
    length: 3,
    nullable: true,
    comment: 'CODIGO DE MONEDA',
  })
  co_moneda: string;

  @Column({
    type: 'char',
    length: 16,
    nullable: true,
    comment: 'NUMERO DE PLACA',
  })
  co_plaveh: string;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
    comment: 'CANTIDAD VENDIDA MT3',
  })
  ca_venmt3: number;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
    comment: 'PRECIO UNITARIO',
  })
  im_preuni: number;

  @Column({
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
    comment: 'MONTO BRUTO',
  })
  im_monbru: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    comment: 'DETALLE CANAL',
  })
  de_cancom: string;

  @Column({
    type: 'char',
    length: 2,
    nullable: true,
    comment: 'CODIGO RESPUESTA',
  })
  co_respue: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: true,
    comment: 'DETALLE RESPUESTA',
  })
  de_respue: string;

  @Column({
    type: 'char',
    length: 12,
    nullable: true,
    comment: 'CODIGO DE AUTORIZACION',
  })
  co_autori: string;

  @Column({
    type: 'date',
    default: () => 'CURRENT_DATE',
    nullable: true,
    comment: 'FECHA DE REGISTRO',
  })
  fe_regist: Date;

  @Column({
    type: 'time',
    default: () => 'CURRENT_TIME',
    nullable: true,
    comment: 'HORA DE REGISTRO',
  })
  ho_regist: string;

  @Column({ type: 'int', nullable: true, comment: 'MS REGIST' })
  ms_regist: number;

  @Column({ type: 'smallint', nullable: true, comment: 'CODIGO DE ESTADO' })
  co_estado: number;

  @Column({
    type: 'char',
    length: 1,
    default: 'P',
    nullable: true,
    comment: 'CODIGO ESTADO CONCILIACION',
  })
  co_estcon: string;

  @Column({ type: 'date', nullable: true, comment: 'FECHA DE PROCESAMIENTO' })
  fe_proces: Date;

  @Column({ type: 'int', nullable: true, comment: 'CODIGO DE CANAL' })
  co_canale: number;

  @ManyToOne(() => FranquiciaPgEntity, (franqu) => franqu.tbtransaction)
  @JoinColumn({ name: 'co_franqu' })
  franqu: FranquiciaPgEntity;
}
