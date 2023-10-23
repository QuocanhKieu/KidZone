
//Render item Games
var itemGame = $('.item-game-container');
var app = {

    games: [
        {
            image: './img/abcItemimg1.png',
            name: 'Aphabet Sliders',
        },
        {
            image: './img/abcItemimg2.png',
            name: 'Aphabats',
        },
        {
            image: './img/abcItemimg3.png',
            name: 'Aphabet Bingo',

        },
        {
            image: './img/abcItemimg4.png',
            name: 'SnowMan',
        },
        {
            image: './img/abcItemimg5.png',
            name: 'MA Backpack',
        },
        {
            image: './img/abcItemimg6.png',
            name: 'Letter Bubble',
        },
        {
            image: './img/abcItemimg7.png',
            name: 'Letter Bubble',
        },
        {
            image: './img/abcItemimg8.png',
            name: 'Alphabet Order',
        },
        {
            image: './img/abcItemimg9.png',
            name: 'K3A',
        },
        {
            image: './img/abcItemimg10.png',
            name: 'Connect the dots',
        },
        {
            image: './img/abcItemimg11.png',
            name: 'Sight word',
        },
        {
            image: './img/abcItemimg12.png',
            name: 'Monster match',
        },
        {
            image: './img/abcItemimg13.png',
            name: 'Syllables',
        },
        {
            image: './img/abcItemimg14.png',
            name: 'Christmars Lights',
        },
        {
            image: './img/abcItemimg15.png',
            name: 'Ma Cupcake',
        },
        {
            image: './img/abcItemimg16.png',
            name: 'Rhyming words',
        },
        {
            image: './img/abcItemimg17.png',
            name: 'Lily',
        },
        {
            image: './img/abcItemimg18.png',
            name: 'Connect the Dots',
        },
        {
            image: './img/abcItemimg19.png',
            name: '100',
        },
        {
            image: './img/abcItemimg20.png',
            name: 'Talk to Me',
        },
        {
            image: './img/abcItemimg21.png',
            name: 'Ma easter egg',
        },
        {
            image: './img/abcItemimg22.png',
            name: 'Ma Face',
        },
        {
            image: './img/abcItemimg23.png',
            name: 'Ma House',
        },
        {
            image: './img/abcItemimg24.png',
            name: 'Dungeon Dash',
        },
    ],
    render: function () {
        const htmls = this.games.map(game => {
            return `
            <a href="#!/games/24784" class="item-game">
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





//carousel 
$('.owl-carousel').owlCarousel({
    navText: [
        `<span class='custom-prev-button'><i class="fa-solid fa-caret-left"></i></span>`,
        `<span class='custom-next-button'><i class="fa-solid fa-caret-right"></i></span>`,
      ],
    loop:false,
    margin:0,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

