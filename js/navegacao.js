// logica das paginas de projeto
function CriarBotaoVoltar(){
    // 1. criar o elemento botão
    const btnVoltar = document.createElement('button');

    // 2. definir o estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // 3. lógica do click
    function navegar(){
        window.location.href = '../index.html'
    };

    btnVoltar.addEventListener('click', navegar);
    
    // btnVoltar.addEventListener('click', function(){
    //     window.location.href = '../index.html'

    // });

    // 4. adicionar o botão no final do body
    document.body.appendChild(btnVoltar); 
};




window.onload = CriarBotaoVoltar();
