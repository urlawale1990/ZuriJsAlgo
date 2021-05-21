// Question 1
function convertFahrToCelsius(Fahr) { 
    const celsius = (Fahr - 32) * 5/9;
  
    if (isNaN(Fahr) || Fahr === true || Fahr === false) {
      if (Array.isArray(Fahr)) {
        return `${JSON.stringify(Fahr)} is not a valid number but a/an array`;
      }
      else if (Fahr === true || Fahr === false) {
        return `${JSON.stringify(Fahr)} is not a valid number but a/an boolean`;
      }
      else {
        return `${JSON.stringify(Fahr)} is not a valid number but a/an object`;
      }
    }
    else {
      return parseFloat(celsius.toFixed(4));
    }
  }
  
  
  // Question 2
  function checkYuGiOh(n) {
    let newData = [];
    let errorMessage = `invalid parameter: ${JSON.stringify(n)}`;
    
    if (isNaN(n)) return errorMessage;
    
    else for (let i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) newData.push('yu-gi-oh'); 
      else if (i % 3 == 0 && i % 5 == 0) newData.push('gi-oh');
      else if (i % 2 == 0 && i % 5 == 0) newData.push('yu-oh');
      else if (i % 2 == 0 && i % 3 == 0) newData.push('yu-gi');
      else if (i % 2 == 0) newData.push('yu');
      else if (i % 3 == 0) newData.push('gi');
      else if (i % 5 == 0) newData.push('oh');
      else newData.push(i);
    }
    return newData;
  }