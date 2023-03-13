// Listas de elementos
const listaDeTecla = document.querySelectorAll('.tecla');
const listaTeclado = ['Space', 'Enter']

// Função que recebe o parâmetro de um id de audio
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }

    else{
        alert('Elemento não encontrado!');
    }
            
for ( let contador = 0; contador < listaDeTecla.length; contador++) {
    
    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`; // template string (dinâmico)

    tecla.onclick = function(){
        tocaSom(idAudio); // função anonima, que nao recebe nenhum parametro 
    };

    tecla.onkeydown = function(evento) {

        if(evento.code == listaTeclado){
            tecla.classList.add('ativa');
        }    
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}