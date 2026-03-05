// 1. lógica do menu principal (index, obter os elementos)
const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');
const btnP4 = document.querySelector('#inputP4');

// 2. definiçao das funcoes
const verificaBotao = () => {
    if (btnP1) {
        btnP1.addEventListener('click', () => {window.location.href='./pages/projeto01.html'});
        btnP2.addEventListener('click', () => {window.location.href='./pages/projeto02.html'});
        btnP3.addEventListener('click', () => {window.location.href='./pages/projeto03.html'});
        btnP4.addEventListener('click', () => {window.location.href='./pages/projeto04.html'});
    }
}

const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px';

    btnVoltar.addEventListener('click', () => {
        window.location.href = './index.html';
    });

    document.body.appendChild(btnVoltar);
}

if (btnP1) {
    verificaBotao();
} else {
    window.addEventListener('load', () => {
        console.log('A pagina carregou usando um método!');
        criarBotaoVoltar();
    });
};