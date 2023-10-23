// JavaScript-onload-fade IN.


var itemGame = $('.colors-item-game-container');
var app = {

    games: [
        {
            image: './img/colorsImg/color1.png',
            name: 'Magician Color Quest',
        },
        {
            image: './img/colorsImg/color2.png',
            name: 'Make a Valentine',
        },
        {
            image: './img/colorsImg/color3.png',
            name: "Alan's Pizzeria ",

        },
        {
            image: './img/colorsImg/color4.png',
            name: 'Super Santa',
        },
        {
            image: './img/colorsImg/color5.png',
            name: 'Alarmy',
        },
        {
            image: './img/colorsImg/color6.png',
            name: "Andy's Goft",
        },
        {
            image: './img/colorsImg/color7.png',
            name: 'Aqua Friends',
        },
        {
            image: './img/colorsImg/color8.png',
            name: 'Aqua Thief',
        },
        {
            image: './img/colorsImg/color9.png',
            name: 'Blobble',
        },
        {
            image: './img/colorsImg/color10.png',
            name: 'Blue Box',
        },
        {
            image: './img/colorsImg/color11.png',
            name: 'Cake Topping',
        },
        {
            image: './img/colorsImg/color12.png',
            name: 'Candy Pool',
        },
        {
            image: './img/colorsImg/color13.png',
            name: 'Candy Timbermen',
        },
        {
            image: './img/colorsImg/color14.png',
            name: 'Colorush',
        },
        {
            image: './img/colorsImg/color15.png',
            name: 'Cute Puzzle Witch',
        },
        {
            image: './img/colorsImg/color16.png',
            name: 'Fluffy Cuddlies',
        },
        {
            image: './img/colorsImg/color17.png',
            name: 'Jelly Collapse',
        },
        {
            image: './img/colorsImg/color18.png',
            name: "Mila's Magic Shop",
        },
        {
            image: './img/colorsImg/color19.png',
            name: 'Rainbow Stacker',
        },
        {
            image: './img/colorsImg/color20.png',
            name: 'Paint',
        },
        {
            image: './img/colorsImg/color21.png',
            name: 'True Colors',
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