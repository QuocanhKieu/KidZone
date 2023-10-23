

var itemGame = $('.numbers-item-game-container');
var app = {

    games: [
        {
            image: './img/numbersImg/number1.png',
            name: '100 Snowballs',
        },
        {
            image: './img/numbersImg/number2.png',
            name: 'Dungeon Dash ',
        },
        {
            image: './img/numbersImg/number3.png',
            name: 'Adventure Man',

        },
        {
            image: './img/numbersImg/number4.png',
            name: 'Base Ten',
        },
        {
            image: './img/numbersImg/number5.png',
            name: 'Base 10',
        },
        {
            image: './img/numbersImg/number6.png',
            name: '10 Fun',
        },
        {
            image: './img/numbersImg/number7.png',
            name: 'Candle Counting',
        },
        {
            image: './img/numbersImg/number8.png',
            name: 'Blast Off',
        },
        {
            image: './img/numbersImg/number9.png',
            name: 'Connect The Dots',
        },
        {
            image: './img/numbersImg/number10.png',
            name: 'Counting Fish',
        },
        {
            image: './img/numbersImg/number11.png',
            name: 'First to Five',
        },
        {
            image: './img/numbersImg/number12.png',
            name: 'Fuzz Bugs',
        },
        {
            image: './img/numbersImg/number13.png',
            name: 'Guess the Number',
        },
        {
            image: './img/numbersImg/number14.png',
            name: 'Interactive Number Chart',
        },
        {
            image: './img/numbersImg/number15.png',
            name: 'Number Bubble',
        },
        {
            image: './img/numbersImg/number16.png',
            name: 'Number Bingo',
        },
        {
            image: './img/numbersImg/number17.png',
            name: 'Number Ninja',
        },
        {
            image: './img/numbersImg/number18.png',
            name: 'Number chart',
        },
        {
            image: './img/numbersImg/number19.png',
            name: 'Number Grid Fire Works',
        },
        {
            image: './img/numbersImg/number20.png',
            name: 'Number Race',
        },
        
    ],
    render: function () {
        const htmls = this.games.map(game => {
            return `
            <a href="#" class="item-game">
                <img src="${game.image}" alt="">
                <div class="game-title">
                    <h3>${game.name}</h3>
                    <div class="play-game">
                        <p>Number lession</p>
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