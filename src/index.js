module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, '');
  const indexOfA = equation.indexOf('*x^2');
  const indexOfB = equation.indexOf('*x+') > 0 ? equation.indexOf('*x+') + 1 : equation.indexOf('*x-');
  const out = [];

  let a = equation.slice(0, indexOfA);
  let b = equation.slice(indexOfA + 4, equation.indexOf('*x+') > 0 ? indexOfB - 1 : indexOfB);
  let c = equation.slice(indexOfB + 2);

  let discriminant = b * b - 4 * a * c; 
  if (discriminant != 0) {
    if (discriminant > 0) {    
      if(equation[0] == '-'){
        out.push(Math.round((-b + Math.sqrt(discriminant)) / (2 * a)) , Math.round((-b - Math.sqrt(discriminant)) / (2 * a)));
      }
      else{
        out.push(Math.round((-b - Math.sqrt(discriminant)) / (2 * a)) , Math.round((-b + Math.sqrt(discriminant)) / (2 * a)));
      }        
    }
    else{
      out.push(0, 0);
    }	
  }
  else{
    out.push(2 * a / -b);
  }

  return out;
}