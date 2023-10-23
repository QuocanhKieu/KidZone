
var itemGame = $(".allgames-item-game-container");


var app = {
  games: [
    {
      image: "./img/numbersImg/number1.png",
      name: "100 Snowballs",
    },
    {
      image: "./img/numbersImg/number2.png",
      name: "Dungeon Dash ",
    },
    {
      image: "./img/numbersImg/number3.png",
      name: "Adventure Man",
    },
    {
      image: "./img/numbersImg/number4.png",
      name: "Base Ten",
    },
    {
      image: "./img/numbersImg/number5.png",
      name: "Base 10",
    },
    {
      image: "./img/numbersImg/number6.png",
      name: "10 Fun",
    },
    {
      image: "./img/numbersImg/number7.png",
      name: "Candle Counting",
    },
    {
      image: "./img/numbersImg/number8.png",
      name: "Blast Off",
    },
    {
      image: "./img/numbersImg/number9.png",
      name: "Connect The Dots",
    },
    {
      image: "./img/numbersImg/number10.png",
      name: "Counting Fish",
    },
    {
      image: "./img/numbersImg/number11.png",
      name: "First to Five",
    },
    {
      image: "./img/numbersImg/number12.png",
      name: "Fuzz Bugs",
    },
    {
      image: "./img/numbersImg/number13.png",
      name: "Guess the Number",
    },
    {
      image: "./img/numbersImg/number14.png",
      name: "Interactive Number Chart",
    },
    {
      image: "./img/numbersImg/number15.png",
      name: "Number Bubble",
    },
    {
      image: "./img/numbersImg/number16.png",
      name: "Number Bingo",
    },
    {
      image: "./img/numbersImg/number17.png",
      name: "Number Ninja",
    },
    {
      image: "./img/numbersImg/number18.png",
      name: "Number chart",
    },
    {
      image: "./img/numbersImg/number19.png",
      name: "Number Grid Fire Works",
    },
    {
      image: "./img/numbersImg/number20.png",
      name: "Number Race",
    },
    {
      image: "./img/abcItemimg1.png",
      name: "Aphabet Sliders",
    },
    {
      image: "./img/abcItemimg2.png",
      name: "Aphabats",
    },
    {
      image: "./img/abcItemimg3.png",
      name: "Aphabet Bingo",
    },
    {
      image: "./img/abcItemimg4.png",
      name: "SnowMan",
    },
    {
      image: "./img/abcItemimg5.png",
      name: "MA Backpack",
    },
    {
      image: "./img/abcItemimg6.png",
      name: "Letter Bubble",
    },
    {
      image: "./img/abcItemimg7.png",
      name: "Letter Bubble",
    },
    {
      image: "./img/abcItemimg8.png",
      name: "Alphabet Order",
    },
    {
      image: "./img/abcItemimg9.png",
      name: "K3A",
    },
    {
      image: "./img/abcItemimg10.png",
      name: "Connect the dots",
    },
    {
      image: "./img/abcItemimg11.png",
      name: "Sight word",
    },
    {
      image: "./img/abcItemimg12.png",
      name: "Monster match",
    },
    {
      image: "./img/abcItemimg13.png",
      name: "Syllables",
    },
    {
      image: "./img/abcItemimg14.png",
      name: "Christmars Lights",
    },
    {
      image: "./img/abcItemimg15.png",
      name: "Ma Cupcake",
    },
    {
      image: "./img/abcItemimg16.png",
      name: "Rhyming words",
    },
    {
      image: "./img/abcItemimg17.png",
      name: "Lily",
    },
    {
      image: "./img/abcItemimg18.png",
      name: "Connect the Dots",
    },
    {
      image: "./img/abcItemimg19.png",
      name: "100",
    },
    {
      image: "./img/abcItemimg20.png",
      name: "Talk to Me",
    },
    {
      image: "./img/abcItemimg21.png",
      name: "Ma easter egg",
    },
    {
      image: "./img/abcItemimg22.png",
      name: "Ma Face",
    },
    {
      image: "./img/abcItemimg23.png",
      name: "Ma House",
    },
    {
      image: "./img/abcItemimg24.png",
      name: "Dungeon Dash",
    },
    {
      image: "./img/colorsImg/color1.png",
      name: "Magician Color Quest",
    },
    {
      image: "./img/colorsImg/color2.png",
      name: "Make a Valentine",
    },
    {
      image: "./img/colorsImg/color3.png",
      name: "Alan's Pizzeria ",
    },
    {
      image: "./img/colorsImg/color4.png",
      name: "Super Santa",
    },
    {
      image: "./img/colorsImg/color5.png",
      name: "Alarmy",
    },
    {
      image: "./img/colorsImg/color6.png",
      name: "Andy's Goft",
    },
    {
      image: "./img/colorsImg/color7.png",
      name: "Aqua Friends",
    },
    {
      image: "./img/colorsImg/color8.png",
      name: "Aqua Thief",
    },
    {
      image: "./img/colorsImg/color9.png",
      name: "Blobble",
    },
    {
      image: "./img/colorsImg/color10.png",
      name: "Blue Box",
    },
    {
      image: "./img/colorsImg/color11.png",
      name: "Cake Topping",
    },
    {
      image: "./img/colorsImg/color12.png",
      name: "Candy Pool",
    },
    {
      image: "./img/colorsImg/color13.png",
      name: "Candy Timbermen",
    },
    {
      image: "./img/colorsImg/color14.png",
      name: "Colorush",
    },
    {
      image: "./img/colorsImg/color15.png",
      name: "Cute Puzzle Witch",
    },
    {
      image: "./img/colorsImg/color16.png",
      name: "Fluffy Cuddlies",
    },
    {
      image: "./img/colorsImg/color17.png",
      name: "Jelly Collapse",
    },
    {
      image: "./img/colorsImg/color18.png",
      name: "Mila's Magic Shop",
    },
    {
      image: "./img/colorsImg/color19.png",
      name: "Rainbow Stacker",
    },
    {
      image: "./img/colorsImg/color20.png",
      name: "Paint",
    },
    {
      image: "./img/colorsImg/color21.png",
      name: "True Colors",
    },
  ],
  render: function () {
    const htmls = this.games.map((game) => {
      return `
          <a href="#!/games/24871" class="item-game">
              <img src="${game.image}" alt="" loading="lazy">
              <div class="game-title">
                  <h3>${game.name}</h3>
                  <div class="play-game">
                      <p>Number lession</p>
                      <i class="fa-solid fa-gamepad"></i>
                  </div>
              </div>
          </a>
          `;
    });

    // Sử dụng jQuery để thay đổi nội dung phần tử
    itemGame.html(htmls.join(""));
  },

  start: function () {
    this.render();
  },
};
$(document).ready(function () {
  app.start();
});

//carousel
$(".owl-carousel.allGame").owlCarousel({
  navText: [
    `<span class='custom-prev-button'><i class="fa-solid fa-caret-left"></i></span>`,
    `<span class='custom-next-button'><i class="fa-solid fa-caret-right"></i></span>`,
  ],
  loop: false,
  margin: 0,
  nav: true,
  autoWidth: true,
  autoheight: true,
  items: 6,
  dots: false,
  // responsive:{
  //     0:{
  //         items:3
  //     },
  //     600:{
  //         items:3
  //     },
  //     1000:{
  //         items:3
  //     }
  // }
});
