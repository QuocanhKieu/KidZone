
//Render item Games
var itemGame = $('.item-game-container');
var app = {

    games: [
        {
            gameId: '25047',
            image: './img/abcItemimg1.png',
            name: 'Aphabet Sliders',
        },
        {
            gameId:'24954',
            image: './img/abcItemimg2.png',
            name: 'Aphabats',
        },
        {
            gameId:'24871',
            image: './img/abcItemimg3.png',
            name: 'Aphabet Bingo',

        },
        {
            gameId:'24790',
            image: './img/abcItemimg4.png',
            name: 'SnowMan',
        },
        {
            gameId:'24784',
            image: './img/abcItemimg5.png',
            name: 'MA Backpack',
        },
        {
            gameId:'20543',
            image: './img/abcItemimg6.png',
            name: 'Letter Bubble',
        }
        
    ],
    render: function () {
        const htmls = this.games.map(game => {
            return `
            <a href="#!/games/${game.gameId}" class="item-game">
                <img src="${game.image}" alt="">
                <div class="game-title">
                    <h3>${game.name}</h3>
                    <div class="play-game">
                        <p>ABC lession</p>
                        <i class="fa-solid fa-gamepad"></i>
                    </div>
                </div>
            </a>
            `
        });

        // Sử dụng jQuery để thay đổi nội dung phần tử
        itemGame.html(htmls.join(''));
    },

    start: function () {
        this.render();
    }
}

$(document).ready(function () {
    app.start();
});




