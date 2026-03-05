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
            alert(numeroProjeto)
            window.location.href = `./pages/projetos${numeroProjeto}.html`;
        });
    });
};