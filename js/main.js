// 1. lógica do menu principal (index, obter os elementos)
const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');

// 2. método addEventListener com uma função anonima

btnP1.addEventListener('click', () => {
    window.location.href='./pages/projeto01.html'
});

btnP2.addEventListener('click', function abrirP2(){
    window.location.href='./pages/projeto02.html'
});

btnP3.addEventListener('click', function abrirP3(){
    window.location.href='./pages/projeto03.html'
});

