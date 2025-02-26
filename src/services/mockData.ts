import type { ViolationData } from '../types';

const mockViolations: Record<string, ViolationData> = {
  'ABC1234': {
    placa: 'ABC1234',
    chassi: '9BWZZZ377VT004251',
    renavam: '12345678901',
    multas: [
      {
        orgao: 'DETRAN-SP',
        descricao: 'Excesso de velocidade - até 20% acima do limite',
        valor: 'R$ 130,16',
        data: '2024-02-15',
        status: 'Pendente'
      },
      {
        orgao: 'DER-SP',
        descricao: 'Estacionar em local proibido',
        valor: 'R$ 195,23',
        data: '2024-01-20',
        status: 'Pago'
      }
    ]
  },
  'XYZ5678': {
    placa: 'XYZ5678',
    chassi: '9BGJK11Y04B403291',
    renavam: '98765432109',
    multas: [
      {
        orgao: 'PMSP',
        descricao: 'Avançar o sinal vermelho',
        valor: 'R$ 293,47',
        data: '2024-02-10',
        status: 'Pendente'
      },
      {
        orgao: 'DETRAN-SP',
        descricao: 'Dirigir utilizando telefone celular',
        valor: 'R$ 293,47',
        data: '2024-02-05',
        status: 'Pago'
      }
    ]
  },
  'DEF9012': {
    placa: 'DEF9012',
    chassi: '93YBB31BFJJ236712',
    renavam: '45678901234',
    multas: [
      {
        orgao: 'PRF',
        descricao: 'Dirigir sem cinto de segurança',
        valor: 'R$ 195,23',
        data: '2024-02-01',
        status: 'Pendente'
      },
      {
        orgao: 'DETRAN-SP',
        descricao: 'Estacionar em vaga de idoso',
        valor: 'R$ 293,47',
        data: '2024-01-15',
        status: 'Pago'
      },
      {
        orgao: 'CET-SP',
        descricao: 'Transitar em faixa exclusiva de ônibus',
        valor: 'R$ 293,47',
        data: '2024-01-10',
        status: 'Pendente'
      }
    ]
  },
  'GHI3456': {
    placa: 'GHI3456',
    chassi: '8AWPN45Z7MA123456',
    renavam: '78901234567',
    multas: [
      {
        orgao: 'DETRAN-RJ',
        descricao: 'Ultrapassagem em local proibido',
        valor: 'R$ 880,41',
        data: '2024-02-18',
        status: 'Pendente'
      },
      {
        orgao: 'PRF',
        descricao: 'Excesso de velocidade - mais de 50% acima do limite',
        valor: 'R$ 880,41',
        data: '2024-02-12',
        status: 'Pendente'
      }
    ]
  },
  'JKL7890': {
    placa: 'JKL7890',
    chassi: '9BRBL29E4P2017890',
    renavam: '23456789012',
    multas: [
      {
        orgao: 'DETRAN-MG',
        descricao: 'Estacionar sobre faixa de pedestres',
        valor: 'R$ 293,47',
        data: '2024-02-17',
        status: 'Pago'
      }
    ]
  },
  'MNO1234': {
    placa: 'MNO1234',
    chassi: '94DTEND8RKP567890',
    renavam: '34567890123',
    multas: [
      {
        orgao: 'DER-PR',
        descricao: 'Dirigir sob influência de álcool',
        valor: 'R$ 2.934,70',
        data: '2024-02-16',
        status: 'Pendente'
      },
      {
        orgao: 'PMPR',
        descricao: 'Recusar teste de alcoolemia',
        valor: 'R$ 2.934,70',
        data: '2024-02-16',
        status: 'Pendente'
      },
      {
        orgao: 'DETRAN-PR',
        descricao: 'CNH vencida há mais de 30 dias',
        valor: 'R$ 293,47',
        data: '2024-01-30',
        status: 'Pago'
      }
    ]
  }
};

export const getMockViolations = (plate: string): Promise<ViolationData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockViolations[plate.toUpperCase()];
      if (data) {
        resolve(data);
      } else {
        reject(new Error('NOT_FOUND'));
      }
    }, 800);
  });
};