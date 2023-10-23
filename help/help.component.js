"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("help").component("help", {
  templateUrl: "help/help.template.html",
  controller: [
    "$location",
    "$anchorScroll",
    function PhoneListController($location, $anchorScroll) {
      var self = this;
      self.scrollToSection = function (sectionId) {
        $location.hash(sectionId);
        $anchorScroll();
      };
    },
  ],
});
