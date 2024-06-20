import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ schema: 'recaud', name: 'tbtrxsim' })
export class TrxSimulatePgEntity {
  @PrimaryColumn({ type: 'int', comment: 'ID TRANSACION ONLINE' })
  id_trxonl: number;

  @Column({ type: 'varchar', comment: 'NUMERO DE DOCUMENTO/CONTRATO' })
  nu_docume: string;

  @Column({ type: 'date', comment: 'FECHA PAGO' })
  fe_locale: Date;

  @Column({ type: 'int', comment: 'NUMERO DE CUOTA' })
  nu_cuotas: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    comment: 'IMPORTE PAGADO',
  })
  im_pagado: number;
}
