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
  },
  en: {
    title: 'Traffic Violations Search',
    searchPlaceholder: 'Enter vehicle plate',
    search: 'Search',
    searching: 'Searching...',
    error: {
      notFound: 'No violations found for this plate.',
      invalidPlate: 'Please enter a valid plate.',
      generic: 'An error occurred while fetching data. Please try again.'
    },
    vehicle: {
      plate: 'Plate',
      chassis: 'Chassis',
      renavam: 'Registration'
    },
    violations: {
      title: 'Found Violations',
      agency: 'Agency',
      date: 'Date',
      description: 'Description',
      amount: 'Amount',
      status: 'Status'
    }
  },
  es: {
    title: 'Consulta de Infracciones',
    searchPlaceholder: 'Ingrese la matrícula',
    search: 'Buscar',
    searching: 'Buscando...',
    error: {
      notFound: 'No se encontraron infracciones para esta matrícula.',
      invalidPlate: 'Por favor, ingrese una matrícula válida.',
      generic: 'Ocurrió un error al buscar los datos. Intente nuevamente.'
    },
    vehicle: {
      plate: 'Matrícula',
      chassis: 'Chasis',
      renavam: 'Registro'
    },
    violations: {
      title: 'Infracciones Encontradas',
      agency: 'Agencia',
      date: 'Fecha',
      description: 'Descripción',
      amount: 'Monto',
      status: 'Estado'
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.pt;