"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("premiumTab").component("premiumTab", {
  templateUrl: "premium-tab/premium-tab.template.html",
  controller: [
    "$http", "$route",
    function allGamesTabController($http, $route) {
      var self = this;
    },
  ],
});
