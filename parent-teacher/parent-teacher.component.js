"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("parentTeacher").component("parentTeacher", {
  templateUrl: "parent-teacher/parent-teacher.template.html",
  controller: [
    "$http",
    function PhoneListController($http) {
      var self = this;
    },
  ],
});
