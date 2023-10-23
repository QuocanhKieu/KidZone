"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("subscribeJoin").component("subscribeJoin", {
  templateUrl: "subscribe-join/subscribe-join.template.html",
  controller: [
    "$http",
    "$scope",
    function subscribeJoinControlelr($http, $scope) {
      var self = this;
      window.scrollTo(0, 0);
      (self.firstName = ""),
        (self.lastName = ""),
        (self.email = ""),
        (self.emailConfirm = ""),
        (self.password = ""),
        (self.passwordConfirm = ""),
        (self.isInvalidEmail = false),
        // Function to register a new user
        (self.registerUser = function (username, email, password) {
          // Check if the email is already in use
          const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
          const userExists = existingUsers.some((user) => user.email === email);

          if (userExists) {
            self.isInvalidEmail = true;
            alert("Email already exists.");
            return;
          }

          // Create a new user object
          const newUser = {
            username: username,
            email: email,
            password: password, // You should hash and salt the password in a real application
          };

          // Store the user data in localStorage
          existingUsers.push(newUser);
          localStorage.setItem("users", JSON.stringify(existingUsers));

          // alert("Registration successful");
          var toastLiveExample = document.getElementById("liveToast");
              const toast = new bootstrap.Toast(toastLiveExample);
              console.log("toast enter")
              toast.show();


        });

      $(".the_form input").on("input", function (event) {
        $scope.$apply(function () {
          self.isInvalidEmail = false;
        });
        console.log("input event");
        console.log(self.isInvalidEmail);
      });
      $("#formFree").on("submit", function (event) {
        self.isInvalidEmail = false;

        if (self.email !== self.emailConfirm) {
          alert("Emails not match.");
          return;
        }
        if (self.password !== self.passwordConfirm) {
          alert("Passwords not match.");
          return;
        }
        self.registerUser(
          self.firstName + " " + self.lastName,
          self.email,
          self.password
        );
        event.preventDefault();
        event.stopPropagation();
      });
      // var toastLiveExample = document.getElementById('liveToast')
      // var btnToSub = document.getElementById('btnToSub')
      // if (btnToSub) {
      //   btnToSub.addEventListener('click', () => {
      //     const toast = new bootstrap.Toast(toastLiveExample)

      //     toast.show()
      //   })
      // }
    },
  ],
});
