const arrayDeInputs = [];

const dynamicDiv = document.getElementById('dynamic-div');

function handleInput(input) {
    const data = input;
    arrayDeInputs.push(data)
    if (arrayDeInputs.length !== 0) {
        arrayDeInputs.forEach(renderizarArrayDeInputs)
    }
}

function renderizarArrayDeInputs(item, index) {

    const divsADeletar = document.querySelectorAll('.divs-dinamicas');
    if (divsADeletar[0]) {
        divsADeletar.forEach(deletarDivsRenderizadas)
    }
    setTimeout(() => {
        renderizarNovoArray(item, index);        
    }, 100);
    

    

    

}

function deletarDivsRenderizadas(item) {
    item.remove();
    
}

function renderizarNovoArray(item, index) {
    const div = document.createElement('div');
    const divFilha1 = document.createElement('div');
    divFilha1.classList.add('filha1')
    const divFilha2 = document.createElement('div');
    divFilha2.classList.add('filha2')
    div.classList.add('divs-dinamicas');
    div.id = `id${index}`;
    const h3 = document.createElement('h3')
    h3.textContent = item;
    dynamicDiv.appendChild(div);
    div.appendChild(divFilha1);
    div.appendChild(divFilha2);
    divFilha1.appendChild(h3);
    divFilha1.addEventListener('click', function() {
        aumentarEsteScore(divFilha2);
    })
}

function aumentarEsteScore(div) {
    console.log('acionou')
    const item = document.createElement('div');
    item.classList.add('items')
    div.appendChild(item)

    contarNumeroDeDivs(div);
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