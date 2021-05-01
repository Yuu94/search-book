function isIsbn13(value) {
  const checkDigit = value[12];
  const weighted = Array.from(value.slice(0, -1), (s, i) => {
    const w = 3

    if(i % 2){
      return Number(s) * w;
    }else{
      return Number(s);
    }
  });

  const sum = weighted.reduce((x, el) => x + el);
  const result = (sum % 10) ? String(10 - (sum % 10)) : '0';

  return checkDigit === result;
}

function isIsbn10(value) {
  const checkDigit = value[9];
  const weighted = Array.from(value.slice(0, -1), (s, i) => {
    const w = 10 - i;
    return Number(s) * w;
  });

  const sum = weighted.reduce((x, el) => x + el);
  let result = 11 - (sum % 11);

  switch(result){
    case 10:
      result = 'X';
      break;
    case 11:
      result = '0';
      break;
    default:
      result = String(result);
      break;
  }

  return checkDigit === result;
}

function isbnChecker(value) {
  const valLen = value.length;

  if(valLen === 13) {
    return isIsbn13(value);
  }
  if(valLen === 10) {
    return isIsbn10(value);
  }

  return false;
}

export default isbnChecker;