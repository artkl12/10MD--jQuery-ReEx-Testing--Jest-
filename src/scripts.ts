import $ from "jquery";
import nameDoesntContainAnySymbol from "./utils/only contain letters/onlyLetters";
import validEmail from "./utils/mailValidation/mail";
import mailContainsCharAt from "./utils/mailcontains@/mailcontains@";
import passwordContainsNumberChar from "./utils/passwordValid/password";
import nameLengthFrom2To50 from "./utils/length/length";

$(".js-wrapper").html(
  `<form class="js-form">
    
  <input type="text" class="js-name" placeholder="name"> <span id="js-name-span"></span><img id="img-name" style="width: 15px"><br><br>
  <input type="text" class="js-email" placeholder="email"> <span id="js-email-span"></span><img id="img-email" style="width: 15px"><br><br>
  <input type="text" class="js-password" placeholder="password"> <span id="js-password-span"></span><img id="img-psw" style="width: 15px"><br><br>
  <button type="submit">Submit</button>
  </form>
  `
);

$(".js-name").on("focusout", () => {
  const name = $(".js-name").val();
  const nameWithoutSymbols = nameDoesntContainAnySymbol(name);
  const nameLengthIsValid = nameLengthFrom2To50(name);
  if (!nameLengthIsValid) {
    $("#js-name-span").text("name needs to be 2 - 50 characters long");
    $(".js-name").css("border-color", "red");
  } else if (!nameWithoutSymbols) {
    $("#js-name-span").text("don`t use symbols and numbers");
    $(".js-name").css("border-color", "red");
  } else {
    $("#js-name-span").text("");
    $(".js-name").css("border-color", "lightgreen");
    $("#img-name").attr("src", "assets/images/check.png");
  }
});

$(".js-email").on("focusout", () => {
  const email = $(".js-email").val();
  const emailIs5charlong = validEmail(email);
  const emailContainCharAt = mailContainsCharAt(email);

  if (!emailIs5charlong) {
    $("#js-email-span").text(
      "email needs to be at least 5 chars long or/and contain a ' . ' and @ !"
    );
    $(".js-email").css("border-color", "red");
  } else if (!emailContainCharAt) {
    $("#js-email-span").text("email needs to contain one char @ !");
    $(".js-email").css("border-color", "red");
  } else {
    $("#js-email-span").text("");
    $(".js-email").css("border-color", "lightgreen");
    $("#img-email").attr("src", "assets/images/check.png");
  }
});

$(".js-password").on("focusout", () => {
  const password = $(".js-password").val();
  const pswIsValid = passwordContainsNumberChar(password);
  if (!pswIsValid) {
    $("#js-password-span").text(
      "password must be at least 8 characters long, contain a letter, a number and a symbol!"
    );
    $(".js-password").css("border-color", "red");
  } else {
    $("#js-password-span").text("");
    $(".js-password").css("border-color", "lightgreen");
    $("#img-psw").attr("src", "assets/images/check.png");
  }
});

$(".js-form").on("submit", (e) => {
  e.preventDefault();

  const name = $(".js-name").val();
  const nameWithoutSymbols = nameDoesntContainAnySymbol(name);
  const nameLengthIsValid = nameLengthFrom2To50(name);
  const email = $(".js-email").val();
  const emailIs5charlong = validEmail(email);
  const emailContainCharAt = mailContainsCharAt(email);
  const password = $(".js-password").val();
  const pswIsValid = passwordContainsNumberChar(password);

  if (!nameLengthIsValid) {
    alert("Error! Form is not valid!");
  } else if (!nameWithoutSymbols) {
    alert("Error! Form is not valid!");
  } else if (!emailIs5charlong) {
    alert("Error! Form is not valid!");
  } else if (!emailContainCharAt) {
    alert("Error! Form is not valid!");
  } else if (!pswIsValid) {
    alert("Error! Form is not valid!");
  } else {
    alert("Congrats! :)");
  }

  $('input[type="text"], textarea').val("");
  $("input").css("border-color", "");
  $("span").text("");
  $("img").attr("src", "");
});
