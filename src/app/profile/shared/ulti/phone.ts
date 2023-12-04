export const phoneFormat = (input: string | number): string => {
    const inputStr = typeof input === 'number' ? input.toString() : input;
  
    if (!inputStr || isNaN(Number(inputStr)))
      return `input must be a number was sent ${inputStr}`;
  
    if (inputStr.length === 10) {
      return inputStr.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } else {
      return 'Please pass a 10-digit number';
    }
  };
  