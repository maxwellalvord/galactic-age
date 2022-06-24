import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/styles.css";
import Venus from "./../src/js/venus.js";
import Jupiter from "./../src/js/jupiter.js";
import Mercury from "./../src/js/mercury.js";
import Mars from "./../src/js/mars.js";



$(document).ready(function () {
  $("#venus-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const venus = new Venus(age, lifexpec);
    let response = JSON.stringify(venus.venusTime(age), venus.venusRemain(age, lifexpec));
    $("#response").append("<p>" + response + "</p>");
  });
});

$(document).ready(function () {
  $("#jupiter-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const jupiter = new Jupiter(age, lifexpec);
    let response = JSON.stringify(jupiter.jupiterTime(age), jupiter.jupiterRemain(age, lifexpec));
    $("#response").append("<p>" + response + "</p>");
  });
});

$(document).ready(function () {
  $("#mercury-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const mercury = new Mercury(age, lifexpec);
    let response = JSON.stringify(mercury.mercuryTime(age), mercury.mercuryRemain(age, lifexpec));
    let response = JSON.stringify(mercury.mercuryTime(age), mercury.mercuryRemain(age, lifexpec));
    $("#response").append("<p>" + response + "</p>");
  });
});

$(document).ready(function () {
  $("#mars-calculator").submit(function (event) {
    event.preventDefault();
    const age = $("#age").val();
    const lifexpec = $("#lifexpec").val();
    const mars = new Mars(age, lifexpec);
    let response = JSON.stringify(mars.marsTime(age), mars.marsRemain(age, lifexpec));
    let response1 = JSON.stringify(mars.marsRemain(age, lifexpec));
    $("#response").append("<p>" + response + "</p>");
    $("#response1").append("<p>" + response1 + "</p>");
  });
});