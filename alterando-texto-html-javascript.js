//Alterando-texto-Html-Javascript// 

// - TextoContent=> Pega todos o conteúdo
//- InnerText=> Pega apenas o texto
//- InnerHtml=> Permite adiciona html e texto

const element =document.querySelector(".paragraph-js")
//element.textContent="o novo texto é esse"
//Posso também mudar o nome do meu texto usando o textContent, ele alterou o texto.

//element.innerHtml="texto novo <b>olá</b>"
//No innerHtml,eu consigo alterar o texto e também incluir o html <b></b> incluir tags também.

//element.innerHtml=""
//texto vazio

//innerHtml é o mais usado o mai versátil.

console.log(element.textContent) //Só Html
console.log(element.innerText)  // Leva em conta o css
console.log(element.innerHtml)  // trás tudo => Permite adcionar html

