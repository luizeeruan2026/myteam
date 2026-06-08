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

// Montando os cards

// recuperando o elemento HTML que receberá os cards
const elGrid = document.querySelector('#grid-cards');

let totalJogadores = 0;

// percorrer o Array e para cada um dos jogadores montar um card
jogadores.forEach(jogador => {

    // verificamdo se o jogador é brasileiro
    if (jogador.nacionalidade.toLowerCase() === 'brasil' ||
        jogador.nacionalidade.toLowerCase() === 'espanha' ||
        jogador.nacionalidade.toLowerCase() === 'argentina' ||
        jogador.nacionalidade.toLowerCase() === 'geórgia') {


        elGrid.innerHTML += `
        <div class="col my-3">
        <div class="card">
        <img src="${jogador.foto}" class="card-img-top img-fluid jogador" alt="${jogador.nome}">
        <div class="card-body">
        <h5 class="card-title text-center">${jogador.nome}</h5>
        <div class="card-bio">
        <p>${jogador.clube_atual}</p>
        <p>${jogador.posicao}</p>
        <p>${jogador.idade} Anos</p>
        <p>${jogador.nacionalidade}</p>
        <p>${jogador.altura} cm </p>
        <p>${jogador.peso} Kg</p>
        </div>
        </div>
        </div>
        </div>
    `;
    totalJogadores++;
    console.log(totalJogadores)
    }
});

// Exibindo o total de jogadores encontrados 

document.querySelector('#totJogador').textContent = totalJogadores