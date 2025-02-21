export const isValidPlate = (plate: string): boolean => {
  // Validates Brazilian plate formats (both old and Mercosul)
  const oldFormat = /^[A-Z]{3}[0-9]{4}$/;
  const mercosulFormat = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
  
  return oldFormat.test(plate) || mercosulFormat.test(plate);
};

export const formatPlate = (plate: string): string => {
  return plate.toUpperCase().replace(/[^A-Z0-9]/g, '');
};