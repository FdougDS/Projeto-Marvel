/*
  OBJETIVO 1 - quando passar o mouse em cima da imagem selecionar o personagem

  - colocar a classe selecionado no personagem que tiver o mouse em cima para adicionar a animação

  - retirar a classe selecionado do personagem que está selecionado

  OBJETIVO 2 - trocar a imagem e nome do personagem grande quando passar o mouse em cima

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1

*/
//console.log('oi')

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return;

    /*=== OBJETICO 1 ===================*/

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    /*=== OBJETICO 2 ===================*/    

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/image/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado;

  });
});
