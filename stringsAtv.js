const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((t) => {
  if (t.descricao.startsWith('Taxa')) {
    return taxaTotal += Number(t.valor.slice(2))
  }

  recebimentoTotal += Number(t.valor.slice(2))
});

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

transportes.split(';')

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.replace(/span/ig, 'a'));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.length -1);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
const taxas = []

transacoes2.forEach((tr, i) => {
  tr.toLowerCase().includes('taxa') ? taxas.push(transacoes2[i]) : ''
});
