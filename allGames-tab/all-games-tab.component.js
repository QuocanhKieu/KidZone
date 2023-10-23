"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("allGamesTab").component("allGamesTab", {
  templateUrl: "allGames-tab/all-games-tab.template.html",
  controller: [
    "$http", "$route",
    function allGamesTabController($http, $route) {
      var self = this;
      self.reloadContent = function() {
        $route.reload();
      }
    },
  ],
});
