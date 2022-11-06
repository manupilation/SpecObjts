const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

let primeiraComida = comidas.shift();
let ultimaComida = comidas.pop();
comidas.push('Arroz'); // ['Frango', 'Carne', 'Arroz']
comidas.unshift('Peixe', 'Batata'); // ['Peixe', 'Batata', 'Frango', 'Carne', 'Arroz']

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort(); // ['Brenda', 'Joana', 'Julia', 'Kleber', 'Marcio']

estudantes.reverse(); // ['Marcio', 'Kleber', 'Julia', 'Joana', 'Brenda']

const includesJoana = estudantes.includes('Joana'); // true
const includesJuliana = estudantes.indexOf('Juliana'); // -1
// console.log(includesJoana, includesJuliana);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const sectionToUl = html.split(/section/gi).join('ul');

const divToIl = sectionToUl.split(/div/ig).join('il')

console.log(divToIl);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros2 = carros.slice();
console.log(carros2);
carros2.pop();
