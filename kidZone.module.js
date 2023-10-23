"use strict";

// Define the `phonecatApp` module
angular
  .module("kidZone", [
    "ngRoute",
    "ngAnimate",
    "commonCoreStandard",
    "home",
    "contactUs",
    "help",
    "parentTeacher",
    "allGamesTab",
    "abcsTab",
    "gameDetail",
    "subscribeJoin",
    "premiumTab",
  ])
  .run([
    "$rootScope",
    "$route",
    "$window",
    "$location",
    function ($rootScope, $route, $window, $location) {
      $rootScope.isUserNotFound = false;
      $rootScope.isIncorrectPassWord = false;
      $rootScope.loginEmail = "";
      $rootScope.loginPassword = "";

      // JSON.parse(localStorage.getItem('users')) || [];
      $rootScope.isUserLoggedIn =
        JSON.parse(localStorage.getItem('isUserLoggedIn')) || false;

      console.log($rootScope.isUserLoggedIn)

      window.addEventListener("load", function () {
        $(".curtain-loading").fadeOut();
        $(".loader").fadeOut();
        var body = document.body;
        body.classList.add("fade-in");

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
          // Show the loading curtain when a route change starts
          var body = document.body;
          // body.classList.remove("fade-in");

          // var conditionalUrl = "/home"; // Define your conditional URL here
          var noLoadingUrls = [
            "/commonCoreStandard",
            "/commonCoreGame",
            "/commonCorePrintable",
          ];

          if (
            current.$$route &&
            current.$$route.originalPath === "/help" &&
            next.$$route.originalPath === "/help"
          )
            return;

          if (
            current.$$route &&
            current.$$route.originalPath.includes("commonCore") &&
            next.$$route.originalPath.includes("commonCore")
          )
            return;

          $(".curtain-loading").show();
          $(".loader").show();
        });

        $rootScope.$on("$routeChangeSuccess", function () {
          var body = document.body;

          $(".curtain-loading").fadeOut(1000);
          $(".loader").fadeOut(700);
          body.classList.add("fade-in");
        });

        window.onscroll = function () {
          var backToTopButton = document.getElementById("back-to-top");
          // console.log(window.scrollY);
          if (window.scrollY > 500) {
            // Nếu vị trí cuộn vượt quá 200px, thêm lớp 'show'
            backToTopButton.classList.add("show");
          } else {
            // Nếu không, loại bỏ lớp 'show'
            backToTopButton.classList.remove("show");
          }
        };
        $rootScope.toTop = function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // This adds smooth scrolling animation
          });
        };




        $rootScope.logOut = function () {
      
          console.log($route.current);

          localStorage.setItem("isUserLoggedIn", "false");
          $rootScope.$apply(function () {
            $rootScope.isUserLoggedIn = false;
          });
          if ($route.current.originalPath === "/premiumTab") {
            $location.path("/home");
          }

        };
        
        $("#yesToLogout").on('click', function(event){
          $rootScope.logOut()
          $rootScope.reloadPage();
        } )

        
        $rootScope.login = function (email, password) {
          const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

          // Find a user with the provided email
          const user = storedUsers.find((u) => u.email === email);

          if (user) {
            if (user.password === password) {
              // Password matches, so the login is successful
              console.log("Login successful. Welcome, " + user.username + "!");

              localStorage.setItem("isUserLoggedIn", "true");
              $rootScope.$apply(function () {
                $rootScope.isUserLoggedIn = true;
              });
              alert("Login Success.")
              $rootScope.reloadPage();
              return true;
            } else {
              // Incorrect password
              $rootScope.$apply(function () {
                $rootScope.isIncorrectPassWord = true;
              });
              alert("Incorrect password. Please try again.");
              console.log("Incorrect password. Please try again.");
            }
          } else {
            // User with the provided email doesn't exist
            console.log("User not found. Please register an account.");
            $rootScope.$apply(function () {
              $rootScope.isUserNotFound = true;
            });
            alert("Email not Found. Please try again.")
            console.log($rootScope.isUserNotFound)
          }

          return false;
        };
        $(".mainLoginBtn").on("click", function (event) {
          $rootScope.$apply(function () {
            $rootScope.LoginEmail = "";
            $rootScope.LoginPassword = "";
            $rootScope.isIncorrectPassWord = false;
            $rootScope.isUserNotFound = false;
          });
  
          console.log("mainLoginClicked");
        });
        $("#loginForm").on("submit", function (event) {
          event.preventDefault();
          console.log("login");
          $rootScope.login($rootScope.LoginEmail, $rootScope.LoginPassword);
        });
        $("#loginForm").on("input", function (event) {
          event.preventDefault();
          $rootScope.$apply(function () {
            $rootScope.isUserNotFound = false;
            $rootScope.isIncorrectPassWord = false;
          })
        });
        $rootScope.reloadPage = function() {
          $window.location.reload();
        };
      });
    },
  ]);


