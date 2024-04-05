// Calcular a sequencia de Fibonacci dado um valor máximo
function sequenciaFibonacci(maximo) {
    let fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] + fibonacci[i - 2] <= maximo) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      i++;
    }
    return fibonacci;
  }
  
  // Calcular todos os números perfeitos em um intervalo (valor de início e fim)
  function numerosPerfeitosNoIntervalo(inicio, fim) {
    let numerosPerfeitos = [];
    for (let num = inicio; num <= fim; num++) {
      let soma = 0;
      for (let divisor = 1; divisor <= num / 2; divisor++) {
        if (num % divisor === 0) {
          soma += divisor;
        }
      }
      if (soma === num && num !== 0) {
        numerosPerfeitos.push(num);
      }
    }
    return numerosPerfeitos;
  }
  
  // Identificar se um número é primo
  function ehNumeroPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Calcular o fatorial de um número inteiro
  function fatorial(num) {
    if (num === 0 || num === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  // Dados três valores de comprimentos de retas, verificar se podem formar um triângulo e qual tipo
  function tipoTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) return "Não é possível formar um triângulo";
    if (a === b && b === c) return "Triângulo Equilátero";
    if (a === b || a === c || b === c) return "Triângulo Isósceles";
    return "Triângulo Escaleno";
  }
  
  // Multiplicar duas matrizes 3x3
  function multiplicarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < 3; i++) {
      resultado[i] = [];
      for (let j = 0; j < 3; j++) {
        resultado[i][j] = 0;
        for (let k = 0; k < 3; k++) {
          resultado[i][j] += matriz1[i][k] * matriz2[k][j];
        }
      }
    }
    return resultado;
  }
  
  // Verificar se um número de CPF é válido
  function ehCPFValido(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    const cpfArray = cpf.split('').map(Number);
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += cpfArray[i] * (10 - i);
    }
    let mod = soma % 11;
    let digitoVerificador1 = mod < 2 ? 0 : 11 - mod;
    if (digitoVerificador1 !== cpfArray[9]) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += cpfArray[i] * (11 - i);
    }
    mod = soma % 11;
    let digitoVerificador2 = mod < 2 ? 0 : 11 - mod;
    return digitoVerificador2 === cpfArray[10];
  }
  