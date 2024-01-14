/* Documento => HTML

getElementById -> Trás um elemento pelo ID
getElementByClassName -> Trás todos os elementos com essa classe
getElementByTagName -> Trás todos os elementos pela taG
getElementByName -> Trás todos os elementos com esse Name

- querySelector -> Trás um elemento, o Primeiro que entrar
- querySelectorAll -> Trás todos os elementos que encontrar. Retorna uma lista de todos os elementos que correspondem a essa expressão */
// querySelectorAll -> Trás todos os elementos que correspondem a essa expressão */
/*Pegando um elemento por ID
let titulo = document.getElementById('titulo'); // <h1 id="titulo">Título</h1>
console.log(titulo);
// Pegando todos os elementos de uma Classe
let paragrafos = document.getElementsByClassName('paragrafo');
/* [<p class="paragrafo">Parágrafo 1.</p>, <p class="paragrafo">Par
ágrafo 2.</p>]
console.log(paragrafos[0]);
// Pegando todos os elementos de uma Tag
let divs = document.getElementsByTagName('div');
/* NodeList [div#conteudo, div.paragrafo:nth-child(3)] 
console.log(divs.length);
// Pegando todos os elementos com um nome específico
let camposNome = document.getElementsByName('nome');
/* NodeList [] ou NodeList [input#nome_do_usuario] 
console.log(camposNome[0].value);
// Usando o querySelector e o querySelectorAll
let primeiroH1 = document.querySelector('h1'); // H1 é o primeiro no DOM
console.log(primeiroH1);
let h1s = document.querySelectorAll('h1'); // Retorna uma lista dos H1's
console.log(h1s.length);
for (let i = 0; i < h1s.length; i++) {
    console.log(h1s[i]);
    }

    // Eventos em JavaScript
    //function mudarCorFundo() {
      //  let corpo = document.body;
      //  if (corpo.style.backgroundColor == 'red'){
       //     corpo.style.backgroundColor = 'blue';
       //     } else {
          //      corpo.style.backgroundColor = 'red';
              //  }
            //    }
            //    document.addEventListener("click", mudarCorFundo)*/

const input = document.getElementById("main-input")
console.log(input)


const elemento = document.getElementsByName("nome-completo")
console.log(elemento)

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

const elemenst2 = document.getElementsByTagName("p")
console.log(element2)

//querySelector=> Trás um elemento, o primeiro que encontrar.

const elementos = document.querySelector("p")
console.log(elementos)

//querySelectorAll=> Trás todos os elementos que encontrar.
const elementosTodos = document.querySelectorAll("p")
console.log(elementosTodos)

const element1 = document.querySelector("main-input")
console.log(element1)


const elementss =document.querySelector("main-input")
console.log(element.placeholder)
//Posso Também monstrar na tela oque tem no meu placeholder. 

const element =document.querySelector("main-input")
//Também posso trocar o nome do placeholder
element.placeholder="agora é texto"
console.log(element.placeholder)


const element =document.querySelector("main-input")
//também posso trocar o valor do meu placeholder, com esses valores...
element.value= 1245666
console.log(element.placeholder)


const elementi =document.querySelector("img")
console.log(elementi)



const elementis =document.querySelector("img")
//alterando elementos.
elementi.src="./js.jpg"
console.log(elementi.src)










