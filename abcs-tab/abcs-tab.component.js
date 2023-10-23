"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("abcsTab").component("abcsTab", {
  templateUrl: "abcs-tab/abcs-tab.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
