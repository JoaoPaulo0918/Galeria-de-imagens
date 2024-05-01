// Selecionando todos os botões
let btns = document.querySelectorAll('.gallery-card-btn');

// Adicionando evento de clique para cada botão.
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Aqui vai obter o caminho da imagem do atributo "data-img" do botão
        let imagePath = btn.getAttribute('data-img');

        // Aqui vai obter a div da imagem correspondente ao botão clicado
        let divCard = btn.parentElement;

        // Alterando o fundo do div para a nova imagem
        divCard.style.backgroundImage = `url(../img/${imagePath})`;
    });
});
