"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("gameDetail").component("gameDetail", {
  templateUrl: "game-detail/game-detail.template.html",
  controller: [
    "$routeParams",
    "$http",
    function gameDetailController($routeParams, $http) {
      var self = this;
      self.gameId = $routeParams.gameId;
      $http
        .get("games-json/" + $routeParams.gameId + ".json")
        .then(function (response) {
          self.game = response.data;
          self.gameSrc = self.game.src;
          self.gameFrame = `  <iframe
          width="100%"
          height="100%"
          src=${self.gameSrc}
          scrolling="no"
          style="border: none"
        ></iframe>`;
          $(".gameDetailContainer").html(self.gameFrame);
          $(".gameName").text(self.game.title)
        });
      window.scrollTo(0, 300);
    },
  ],
});
