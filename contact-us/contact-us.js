$(function () {
  "use strict";

  $(".formForContact").on("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var name = $("#name").val();
    var email = $("#email").val();
    var phoneNum = $("#phoneNumber").val();

    if (!name.length || name.length > 50) {
      $("#name").addClass("is-invalid");
      $("#name").removeClass("is-valid");
      $("#name")[0].setCustomValidity("invalid name");
    } else {
      $("#name").removeClass("is-invalid");
      $("#name").addClass("is-valid");
      $("#name")[0].setCustomValidity("");
    }

    if (!email.includes("@gmail.com")) {
      console.log(email)
      console.log("not included");
      $("#email").removeClass("is-valid");
      $("#email").addClass("is-invalid");
      $("#email")[0].setCustomValidity("invalid email"); // required even though not rendered on the page
    } else {
      console.log("included");
      console.log(email)
      $("#email").addClass("is-valid");
      $("#email").removeClass("is-invalid");
      $("#email")[0].setCustomValidity("");
    }
    var phoneReg = /^[0-9()+\-.\s]*$/;

    if (!phoneNum || !phoneReg.test(phoneNum)) {
      $("#phoneNumber").removeClass("is-valid");
      $("#phoneNumber").addClass("is-invalid");
      $("#phoneNumber")[0].setCustomValidity("invalid phone number");
    } else {
      $("#phoneNumber").addClass("is-valid");
      $("#phoneNumber").removeClass("is-invalid");
      $("#phoneNumber")[0].setCustomValidity("");
    }

    if (!this.checkValidity()) {
      console.log("disqualified");
    } else {
      console.log("qualified");
      $("#FormContact").hide();
      $("#formTitle").hide();
      // $(".contactForm").append(`<p class="userInfo p-5 fs-2">
      //     Hi ${name}.<br>
      //     Email của bạn là: ${email}.<br>
      //     Số điện thoại của bạn là: ${phoneNum}.<br>
      //     Giới tính: ${$(
      //       "input[name='flexRadioDefault']:checked"
      //     ).val()}.<br>
      //     Sở Thích của bạn là: ${$("[type=checkbox]")
      //       .map((index, element) => {
      //         return element.value;
      //       })
      //       .get()
      //       .join(", ")}.<br>
      //       Bạn đã miêu tả bản thân như sau: <br>
      //       ${$("textarea").val()}
      //       </p>
      //   `);
      $(".contactForm").append(`
              <hr/>
              <div class="formSubmitted text-center">
              <div class="successContainer mb-4">
                <img src="./images/Success.png" alt="sucess" />
              </div>
              <h2>Thank You!</h2>
              <p>Your submission has been sent.</p>
            </div>
            `);
    }

    this.classList.add("was-validated");
  });

  $("html").on("click", function (e) {
    let elem = e.target.closest(
      ".formForContact",
      document.querySelector(".formForContact")
    );
    // console.log(elem);

    if (!elem) {
      // console.log("here in what caused the  html handler");
      $(".formForContact *").removeClass("is-invalid");
      $(".formForContact *").removeClass("is-valid");
      $(".formForContact").removeClass("was-validated");
    }
  });

  $("#map").on("mouseenter", function (e) {
    console.log(this);
    $(this).addClass("exp");
    $(".Address").addClass("coll");
  });
  $("#map").on("mouseleave", function (e) {
    $(this).removeClass("exp");
    $(".Address").removeClass("coll");
  });
});