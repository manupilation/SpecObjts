function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + ' andou.';
}

Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou.';
}

const Eula = new Pessoa('Eula', 25)

console.log(Pessoa.prototype);
console.log(Eula);

// ------------------------------

const pais = 'brazil'
const cidade = new String('Rio')
