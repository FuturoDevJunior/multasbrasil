export interface ViolationData {
  placa: string;
  chassi: string;
  renavam: string;
  multas: Multa[];
}

export interface Multa {
  orgao: string;
  descricao: string;
  valor: string;
  data: string;
  status: string;
}