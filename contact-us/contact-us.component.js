"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("contactUs").component("contactUs", {
  templateUrl: "contact-us/contact-us.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
