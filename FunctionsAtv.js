// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const sectionPs = document.querySelectorAll('p');

const somaParagrafos = Array.prototype.reduce.call(sectionPs, function(acc, cur) {
  return acc + cur.innerText.length
}, 0); // 655


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newElement(tag, classe, conteudo) {
  const elementTag = document.createElement(tag);
  elementTag.classList = classe;
  elementTag.innerText = conteudo;

  return elementTag;
}



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newFunc = newElement.bind(document, 'h1', 'titulo');

const a = newFunc('Abre-te sezamo!')

document.body.appendChild(a)
