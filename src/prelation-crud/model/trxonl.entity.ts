import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'recaud.tbtrxonl' })
export class Tbtrxonl {
  @PrimaryGeneratedColumn({ name: 'id_trxonl' })
  idTrxonl: number;

  @Column({ name: 'co_franqu', type: 'smallint' })
  coFranqu: number;

  @Column({ name: 'co_cancom', type: 'varchar', length: 15 })
  coCancom: string;

  @Column({ name: 'fe_locale', type: 'date' })
  feLocale: Date;

  @Column({ name: 'ho_locale', type: 'time' })
  hoLocale: string;

  @Column({ name: 'co_refere', type: 'varchar' })
  coRefere: string;

  @Column({ name: 'co_docume', type: 'varchar', length: 14 })
  coDocume: string;

  @Column({ name: 'im_pagado', type: 'numeric', precision: 12, scale: 2 })
  imPagado: number;

  @Column({ name: 'co_transa', type: 'char', length: 6 })
  coTransa: string;

  @Column({ name: 'co_secuen', type: 'varchar', nullable: true })
  coSecuen: string;

  @Column({ name: 'ti_forpag', type: 'smallint', nullable: true })
  tiForpag: number;

  @Column({ name: 'ti_consul', type: 'smallint', nullable: true })
  tiConsul: number;

  @Column({ name: 'co_produc', type: 'char', length: 3, nullable: true })
  coProduc: string;

  @Column({ name: 'nu_doccli', type: 'varchar', length: 16 })
  nuDoccli: string;

  @Column({ name: 'co_moneda', type: 'char', length: 3, nullable: true })
  coMoneda: string;

  @Column({ name: 'co_plaveh', type: 'char', length: 16, nullable: true })
  coPlaveh: string;

  @Column({
    name: 'ca_venmt3',
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  caVenmt3: number;

  @Column({
    name: 'im_preuni',
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  imPreuni: number;

  @Column({
    name: 'im_monbru',
    type: 'numeric',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  imMonbru: number;

  @Column({ name: 'de_cancom', type: 'varchar', length: 50, nullable: true })
  deCancom: string;

  @Column({ name: 'co_respue', type: 'char', length: 2, nullable: true })
  coRespue: string;

  @Column({ name: 'de_respue', type: 'varchar', length: 80, nullable: true })
  deRespue: string;

  @Column({ name: 'co_autori', type: 'char', length: 12, nullable: true })
  coAutori: string;

  @Column({
    name: 'fe_regist',
    type: 'date',
    nullable: true,
    default: () => 'now()',
  })
  feRegist: Date;

  @Column({
    name: 'ho_regist',
    type: 'time',
    nullable: true,
    default: () => 'now()',
  })
  hoRegist: string;

  @Column({ name: 'ms_regist', type: 'integer', nullable: true })
  msRegist: number;

  @Column({ name: 'co_estado', type: 'smallint', nullable: true })
  coEstado: number;

  @Column({
    name: 'co_estcon',
    type: 'char',
    length: 1,
    default: 'P',
    nullable: true,
  })
  coEstcon: string;

  @Column({ name: 'fe_proces', type: 'date', nullable: true })
  feProces: Date;

  @Column({ name: 'co_canale', type: 'integer', nullable: true })
  coCanale: number;
}
