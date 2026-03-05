// 1. lógica automática para o menu (index)
// buscamos todos os inputs do tipo botão dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log("sei la")
console.log(botoesProjeto);

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // O index começa em 0, então somamos 1 para bater com "projeto01", "projeto02"...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
};

const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';
    
    // herdará o estilo de 'button' do css
    btnVoltar.className = 'btn-navegacao';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);
}

if (botoesProjeto.length === 0) {
    // adicionando um evento no v=navegador (objeto window).
    // Após o carregamento da página a função sera invocada()
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    })
}