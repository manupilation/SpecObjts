const sabor = 'umami';
const bebida = new String("Guaraná");

// LENGTH
sabor.length // 5

// CHARAT
bebida.charAt(4) // a

const fraseFinal = sabor.concat(bebida, '!') // "umamiGuaraná!"

// INCLUDES
const fruta = 'Banana'
const listaFruta = 'Melancia, Banana, Laranja'
listaFruta.includes(fruta) // true

// ENDSWITH e STARTSWITH

console.log(fruta.endsWith('na')); // true
console.log(listaFruta.startsWith('Ma')); // false

// SLICE

const frase = 'Olá, Boas-Vindas!'
frase.slice(0, 3); // "Olá"
frase.slice(3, 6); // ", B"
frase.slice(4); // "Boas-Vindas!"
frase.slice(-4); // "das!"


// SUBSTRING 
const lang = 'Javascript';

lang.substring(3, 5) // "as"
lang.substring(0, 4) // "Java"
lang.substring(4) // "script"
lang.substring(-3) // "Javascript"

// IndexOf e LastIndexOf

const carro = 'Mazda';

carro.indexOf('z'); // 2
carro.lastIndexOf('a'); // 4


// PadStart e PadEnd
const valor = 'R$ 12'

valor.padStart(10, '-') // "-----R$ 12"
valor.padEnd(10, '-') // "R$ 12-----"

// repeat

valor.repeat(1) // "R$ 12R$ 12"

// replace 

valor.replace('1', '3') // "R$ 32"

// split

const gaveta = 'caderno lapis'

gaveta.split(' ') // [ "caderno", "lapis" ]

// join

gaveta.join(', ') // "caderno, lapis"

// trim, trimStart e trimEnd

const alerta = '      CUIDADO!  '
alerta.trim() // "CUIDADO!"
alerta.trimStart() // "CUIDADO!  "
alerta.trimEnd() // "      CUIDADO!"
