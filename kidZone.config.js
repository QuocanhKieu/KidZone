"use strict";

angular.module("kidZone").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/home", {
        template: "<home></home>",
      })
      .when("/contacUs", {
        template: "<contact-us></contact-us>",
      })
      .when("/help", {
        template: "<help></help>",
      })
      .when("/allGamesTab", {
        template: "<all-games-tab></all-games-tab>",
      })
      .when("/parentTeacher", {
        template: "<parent-teacher></parent-teacher>",
      })
      .when("/commonCoreStandard", {
        template: "<common-core-standard></common-core-standard>",
      })
      .when("/allGamesTab/abcsTab", {
        template: "<abcs-tab></abcs-tab>",
      })
      .when("/subscribeJoin", {
        template: "<subscribe-join></subscribe-join>",
      })
      .when("/premiumTab", {
        template: "<premium-tab></premium-tab>",
      })
      
      .when("/games/:gameId", {
        template: "<game-detail></game-detail>",
      })

      .otherwise("/home");
  },
]);
