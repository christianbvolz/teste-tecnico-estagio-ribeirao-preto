const question1 = (num) => {
  if (num === 0 || num === 1) return 'pertence';

  // primeiros números da sequência de Fibonacci
  let f1 = 0;
  let f2 = 1;

  let result = 'não pertence';

  // enquanto num for maior que f2, continua gerando o próximo número da sequência de Fibonacci
  // Se f2 for maior que num quer dizer que num não pertence a sequência de Fibonacci
  while(num > f2) {
    
    // atualizando o valor dos 2 últimos números da sequência de Fibonacci
    const previous = f2;
    f2 += f1;
    f1 = previous;
    
    // f2 sempre será o proximo número da sequência então num é um numero da sequência se for igual a f2
    if (num === f2) {
      result = 'pertence';
      break;
    };
  }

  return result;
};

const isFibonacci = 34;

console.log(`Resposta questão 1:\nO número ${ isFibonacci } ${ question1(isFibonacci) } a sequência de Fibonacci.\n`);

const question2 = (string) => {
  const stringToArray = string.split('');

  const countA = stringToArray
    .reduce((acc, caracter) => (caracter.toLowerCase() === "a") ? acc + 1: acc, 0);

  return (countA === 0) ? 
    'não possui a.' :
    `possui ${ countA } a.`;
};

const stringQuestao2 = 'coco';

console.log(`Resposta questão 2:\nA string ${ stringQuestao2 } ${ question2(stringQuestao2) }\n`);

const question3 = () => {
  const indice = 12;
  let soma = 0;
  let k = 1;

  while(k < indice) {
    k += 1;
    soma += k;
  }

  return soma;
};

console.log(`Resposta questão 3:\nSOMA = ${ question3() }.\n`);

const question4 = () => {
  let a = [];
  let b = [];
  let c = [];
  let d = [];
  let e = [0,1];
  let f = [];

  for(let num = 1; a.length < 5; num += 2) {
    a.push(num);
  }

  for(let num = 2; b.length < 7; num *= 2) {
    b.push(num);
  }

  for(let num = 0; c.length < 8; num += 1) {
    c.push(num**2);
  }

  for(let num = 2; d.length < 5; num += 2) {
    d.push(num**2);
  }

  let f1 = 0;
  let f2 = 1;
  
  while(e.length < 8) {
    const previous = f2;
    f2 += f1;
    f1 = previous;
    e.push(f2);
  }

  return [a,b,c,d,e];
};

question4();

console.log(`Resposta questão 4:\nAs sequências são:
a) ${ question4()[0] }
b) ${ question4()[1] }
c) ${ question4()[2] }
d) ${ question4()[3] }
e) ${ question4()[4] }
f) Fico devendo.\n`);