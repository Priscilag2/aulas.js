/* javascript e a Dom :
-A Dom é a arvóre de elementos.
-A Dom é um conjunto elementos é as ramificações.
-A Dom é arvóre de elementos do navegador.
-No javascript podemos manipular a "Dom"

*/
//Para pegar o elemento raiz da dom, usamos: document.documentElement;
console.log(document.documentElement); //Pega todos os dados da pagina
/*
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Título da Página</title>
</head>
<body>
<h1 id="paragrafo">Este é um parágrafo.</h1>
<p>Este é outro parágrafo.</p>
<button onclick="clicou()">Clique Aqui</button>
<script src="script.js"></script>
</body>
</html>
*/
//Para pegar um elemento específico por seu ID, usamos:
var paragrafo = document.getElementById("paragrafo");
console.log(paragrafo);
//Para adicionar ou remover uma classe em um elemento, usamos:
paragrafo.classList.add("classe1", "classe2");  //Adiciona mais de uma classe
paragrafo.classList.remove("classe1", "classe2");   //Remove mais de uma classe
//Verificando se um elemento possui uma determinada classe:
console.log(paragrafo.classList.contains("classe1"));    //Retorna true ou false
//Para alterar o conteúdo de um elemento:
paragrafo.innerHTML = "<strong>Este é um parágrafo com strong.</strong>";


