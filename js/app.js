import { jogadores, banners } from "./objetos.js";

const meuGrid = document.querySelector('#grid');

// recuperar o elemento HTML que receberá o grid
// montando o grid - inserindo as images
banners.forEach(banner => {
    meuGrid.innerHTML += `
    <img src="${banner}" alt="imagem do banner" class= "img-grid">
    `
});

// montando o grid das imagens

const meuHero = document.querySelector('#hero');

// função para trocar o banner
function trocarBanner(src) {
    meuHero.style.backgroundImage = `var(--gradient), url(${src})`;


    // aplicar a animação toda vez que a imagem mudar
    meuHero.style.animation = 'none';
    meuHero.offsetHeight;
    meuHero.style.animation = 'myhero .5s linear forwards';
}

// definindo o click da imagem
document.addEventListener('click', function (event) {
    // verificar se o cara que recebeu o click possui a classe css img-grid
    if (event.target.classList.contains('img-grid')) {
        const src = event.target.getAttribute('src');
        trocarBanner(src);

    }

})

// deixar a imagem aleatória, nova imagem cada vez q a página é carregada
const numeroSorteado = Math.floor(Math.random() * banners.length);
const bannerinicial = banners[numeroSorteado]; ~
    trocarBanner(bannerinicial)