function Mage(int, mana = 100) {
  this.inteligence = int;
  this.mana = mana;
}

function Warrior(str, vel = 50) {
  this.strength = str;
  this.velocity = vel;
}

const Arthur = new Warrior(60, 60);
const Morgana = new Mage(120)

console.log(Arthur);
console.log(Morgana);