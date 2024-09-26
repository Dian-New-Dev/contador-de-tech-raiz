const arrayDeHits = [];

function inserirScorenoLocalStorage(filha1, filha2) {
    console.log(`esse é o primeiro log: ${filha1}, ${filha2}, ${arrayDeHits} `)
    const nomeDaTech = filha1.querySelector('h3').textContent;


    if (JSON.parse(localStorage.getItem("arrayDeTechs"))) {
        aumentarScore(nomeDaTech, filha2 )
    } else {
        arrayDeHits.push(nomeDaTech)
        console.log(arrayDeHits)
        localStorage.setItem("arrayDeTechs", JSON.stringify(arrayDeHits));
        aumentarScore(nomeDaTech, filha2 )
    }

    
    

    
    


}

function aumentarScore(nomeDaTech, filha2 ) {
    console.log('chegamos aqui')
    //apagar o numero de divs anterior
    filha2.querySelectorAll('.items');
    for (let i = 0; i < filha2.lenght; i++) {
        console.log('apagando a div:'+filha2[i])
        filha2[i].remove();
    }


    //renderizar o numero atualizado de divs
    const arrayDeTechsInformadasRec = JSON.parse(localStorage.getItem("arrayDeTechs"))
    const divDinamicaPai = document.getElementById('dynamic-div');
    const divsFilhas = divDinamicaPai.querySelectorAll('.divs-dinamicas');
    for (let i = 0; i < divsFilhas.length; i++) {
        const nomeDaTech2 = divsFilhas[i].querySelector('h3').textContent;
        arrayDeTechsInformadasRec.forEach(item => {
            if (nomeDaTech2 === item) {
                const novoItm = document.createElement('div');
                novoItm.classList.add('items')
                filha2.appendChild(novoItm)
            }
        })
    }
}

function contarNumeroDeDivs(div) {
    const array = div.querySelectorAll('.items');
    const numero = array.length;
    renderizarNumeroNaTela(div, numero, array)
}

function renderizarNumeroNaTela(div, numero, arrayDePontos) {
    const numeroRenderizado = document.createElement('h4');
    numeroRenderizado.textContent = numero;
    div.appendChild(numeroRenderizado)

    numeroRenderizado.addEventListener('click', function() {
        apagarUmPonto(div, arrayDePontos)
    })
}

function apagarUmPonto(div, arrayDePontos) {
    const indexADeletar = (arrayDePontos.length - 1);
    arrayDePontos[indexADeletar].remove();

}