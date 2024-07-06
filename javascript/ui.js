export class UI {
    displayGames(games) {
        const gamesGrid = document.querySelector('.games-grid .row');
        let gamesHtml = '';
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            gamesHtml += `
                <div class="col col-12  card-col">
                    <div class="card bg-transparent" data-id="${game.id}">
                        <figure>
                            <img src="${game.thumbnail}" class="card-img-top object-fit-cover h-100 p-3 pb-0" alt="${game.title}">
                        </figure>
                        <div class="card-body d-flex justify-content-between align-items-baseline py-0">
                            <h5 class="card-title text-white small">${game.title}</h5>
                            <span class="text-white nav-bg-color p-1 border-0 rounded-1">${game.genre}</span>
                        </div>
                        <div class="card-body pt-0">
                            <p class="card-text text-center">${game.shortDescription}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <span class="text-white p-1 border-0 rounded-1">${game.genre}</span>
                            <span class="text-white p-1 border-0 rounded-1">${game.platform}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        gamesGrid.innerHTML = gamesHtml;
    }

    displayGameDetails(gameDetails) {
        const gameDetailsSection = document.querySelector('.game-details');
        gameDetailsSection.innerHTML = `
            <div class="container">
                <header class="d-flex justify-content-between pt-4 text-white">
                    <h2>Details Game</h2>
                    <button id="btnClose" class="btn-close btn-close-white"></button>
                </header>
                <div class="row">
                    <div class="col-md-4">
                        <img src="${gameDetails.thumbnail}" alt="${gameDetails.title} image" class="w-100">
                    </div>
                    <div class="col-md-8">
                        <h3 class="text-white">Title: ${gameDetails.title}</h3>
                        <p class="text-white">Category: <span class="badge">${gameDetails.genre}</span></p>
                        <p class="text-white">Platform: <span class="badge">${gameDetails.platform}</span></p>
                        <p class="text-white">Status: <span class="badge">${gameDetails.status}</span></p>
                        <p class="text-white">${gameDetails.description}</p>
                        <a class="btn btn-outline-warning text-white" href="${gameDetails.gameUrl}" target="_blank">Show Game</a>
                    </div>
                </div>
            </div>
        `;
        gameDetailsSection.classList.remove('d-none');
        document.querySelector('.games').classList.add('d-none');
        let showGamesSection = function (){
            document.querySelector('.games').classList.remove('d-none');
            document.querySelector('.game-details').classList.add('d-none');
        }
        document.querySelector(".btn-close").addEventListener('click' ,showGamesSection);
    }

    

    
}
