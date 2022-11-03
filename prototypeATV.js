// Criar uma função construtora de pessoas
// Deve conter o nome, sobrenome e idade
// Crie um nome no protótipo que retore o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.fullName = function () {
  return this.nome + " " + this.sobrenome
}

// Liste os métodos acessados
// por dados criados com NodeList,
// HTMLCollection, Document




// Liste os construtores dos dados abaixo:
const li = document.querySelector('li');

li;
// HTMLLIElement
li.click;
// Native Function
li.innerText;
// Native String Function
li.value;
// Native Number Function
li.hidden;
// Native Boolean Function
li.offsetLeft;
// Native Number Function
li.click();
// Undefined


// Qual o construtor do dado abaixo ?
li.hidden.constructor.name;
// Boolean