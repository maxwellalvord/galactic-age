import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/styles.css";
import Venus from "./../src/js/venus.js";
import Jupiter from "./../src/js/venus.js";
import Mercury from "./../src/js/venus.js";
import Mars from "./../src/js/venus.js";



$(document).ready(function () {
  $("#venus-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const response = new Venus(age, lifexpec);
    $("#response").append("<p>" + response + "</p>");
  });
});

$(document).ready(function () {
  $("#jupiter-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const response = new Jupiter(age, lifexpec);
    $("#response").append("<p>" + response + "</p>");
  });
});

$(document).ready(function () {
  $("#mercury-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const response = new Mercury(age, lifexpec);
    $("#response").append("<p>" + response + "</p>");
  });
});

$(document).ready(function () {
  $("#mars-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const response = new Mars(age, lifexpec);
    $("#response").append("<p>" + response + "</p>");
  });
});