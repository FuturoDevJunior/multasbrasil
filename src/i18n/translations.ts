export const translations = {
  pt: {
    title: 'Consulta de Multas',
    searchPlaceholder: 'Digite a placa do veículo',
    search: 'Buscar',
    searching: 'Buscando...',
    error: {
      notFound: 'Não foi possível encontrar multas para esta placa.',
      invalidPlate: 'Por favor, insira uma placa válida.',
      generic: 'Ocorreu um erro ao buscar os dados. Tente novamente.'
    },
    vehicle: {
      plate: 'Placa',
      chassis: 'Chassi',
      renavam: 'Renavam'
    },
    violations: {
      title: 'Multas Encontradas',
      agency: 'Órgão',
      date: 'Data',
      description: 'Descrição',
      amount: 'Valor',
      status: 'Status'
    }
  }
} as const;

export type TranslationKey = keyof typeof translations.pt;