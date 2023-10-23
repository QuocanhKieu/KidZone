$(function () {
  "use strict";

  $(".owl-carousel").owlCarousel({
    navText: [
      `<span class='custom-prev-button'><i class="fa-solid fa-caret-left"></i></span>`,
      `<span class='custom-next-button'><i class="fa-solid fa-caret-right"></i></span>`,
    ],
    mouseDrag: true,
    touchDrag: true,
    rewind: false,
    autoWidth: true,
    // stagePadding: 50,
    dots: false,
    loop: false,
    nav: true,
  });
});
