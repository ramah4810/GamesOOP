import { Game } from './games.js';
import { GameDetails } from './details.js';
import { UI } from './ui.js';

const ui = new UI(); 

const loader = document.querySelector('.loader');

const showLoader = () => {
    loader.style.display = 'block';
};

const hideLoader = () => {
    loader.style.display = 'none';
};

const apiOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'bc81b897demshdbbcdecb8c82f30p1e821djsn155c5f084842',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const fetchGames = async (category) => {
    showLoader();
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, apiOptions);
    const gamesData = await response.json();
    const games = Array.from(gamesData, game => new Game(game.id, game.title, game.thumbnail, game.short_description, game.genre, game.platform));
    ui.displayGames(games);
    hideLoader();
};

const fetchGameDetails = async (id) => {
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, apiOptions);
    const gameData = await response.json();
    const gameDetails = new GameDetails(gameData.id, gameData.title, gameData.thumbnail, gameData.description, gameData.genre, gameData.platform, gameData.status, gameData.game_url);
    ui.displayGameDetails(gameDetails);
};

const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active');
        }
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        fetchGames(category);
    });
}

document.querySelector('.games-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const gameId = card.getAttribute('data-id');
        fetchGameDetails(gameId);
    }
});

// document.querySelector('.game-details').addEventListener('click', function(e) {
//     if (e.target.classList.contains('btn-close')) {
//         ui.showGamesSection();
//     }
// });

fetchGames('mmorpg');

let navToggler = document.querySelector(".navbar-toggler");
let mobileNav = document.querySelector(".mobile-nav");
navToggler.addEventListener('click', function () {
    if (mobileNav.classList.contains("d-none")) {
        mobileNav.classList.remove("d-none");
    } else {
        mobileNav.classList.add("d-none");
    }
});


