// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})

// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

const honda = Object.create(carro);
honda.init('Honda').acelerar();

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

const carro = {
  rodas: 4,
  mala: true,
}

// Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}

// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // true


