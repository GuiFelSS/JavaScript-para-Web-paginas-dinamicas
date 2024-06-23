function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log("Elemento não encontado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const intrumento = tecla.classList[1];

    const idAudio = `#som_${intrumento}`;
    // console.log(idAudio)

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }
    
    // console.log(contador);

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter' ) {  
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
