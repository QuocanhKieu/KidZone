"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("commonCoreStandard").component("commonCoreStandard", {
  templateUrl: "common-core/common-core-standard.template.html",
  controller: [
    function commonCore() {
      var self = this;
      self.commonStandardToggle = 1;
      self.commonGameToggle = 0;
      self.commonPrintableToggle = 0;

      self.toggleCommon = function (id, event) {
        $(".menu-select [type=button]").removeClass("active");
        $(event.target).addClass("active");
        self.commonStandardToggle = 0;
        self.commonGameToggle = 0;
        self.commonPrintableToggle = 0;
        switch (id) {
          case "corePrint":
            self.commonPrintableToggle = 1;
            break;
          case "coreGame":
            self.commonGameToggle = 1;
            break;
          case "accordionExample":
            self.commonStandardToggle = 1;
            break;
          default:
            self.commonStandardToggle = 1;
        }
      };
    },
  ],
});
