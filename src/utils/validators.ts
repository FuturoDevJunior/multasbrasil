export const isValidPlate = (plate: string): boolean => {
  if (!plate || typeof plate !== 'string') return false;

  const cleanPlate = formatPlate(plate);
  
  // Validates Brazilian plate formats (both old and Mercosul)
  const oldFormat = /^[A-Z]{3}[0-9]{4}$/;
  const mercosulFormat = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
  
  return oldFormat.test(cleanPlate) || mercosulFormat.test(cleanPlate);
};

export const formatPlate = (plate: string): string => {
  if (!plate || typeof plate !== 'string') return '';
  
  // Remove any special characters and spaces
  const cleanPlate = plate.replace(/[^A-Za-z0-9]/g, '');
  
  // Convert to uppercase
  return cleanPlate.toUpperCase();
};

export const formatViolationDate = (date: string): string => {
  try {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  } catch {
    return date;
  }
};

export const formatCurrency = (value: string): string => {
  try {
    const number = parseFloat(value.replace(/[^0-9.,]/g, '').replace(',', '.'));
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  } catch {
    return value;
  }
};