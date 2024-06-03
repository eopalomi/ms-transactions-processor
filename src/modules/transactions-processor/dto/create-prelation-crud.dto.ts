export class CreateTransactionDto {
  eventName: string;
  correlationId: string;
  correlationIdPrior: string;
  creationDate: string;
  requestingEntity: string;
  data: {
    codigoPlaca: string;
    codigoCredito: string;
    numeroTicket: string;
    fechaRecaudo: string;
    horaRecaudo: string;
    cantidadVenta: number;
    precioUnitario: number;
    montoRecaudo: number;
    montoBruto: number;
    codigoEstacion: string;
    descEstacion: string;
    codigoEmpresa: string;
    codigoTransaccion: string;
  };

  constructor(
    eventName: string,
    correlationId: string,
    correlationIdPrior: string,
    creationDate: string,
    requestingEntity: string,
    data: any,
  ) {
    this.eventName = eventName;
    this.correlationId = correlationId;
    this.correlationIdPrior = correlationIdPrior;
    this.creationDate = creationDate;
    this.requestingEntity = requestingEntity;
    this.data = data;
  }
}
