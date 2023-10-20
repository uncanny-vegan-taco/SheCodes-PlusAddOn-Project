function showCurrentTime() {
  let seattleCityElement = document.querySelector("#seattle");
  let seattleDateElement = seattleCityElement.querySelector(".date");
  let seattleTimeElement = seattleCityElement.querySelector(".time");

  seattleDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do, YYYY");

  seattleTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let viennaCityElement = document.querySelector("#vienna");
  let viennaDateElement = viennaCityElement.querySelector(".date");
  let viennaTimeElement = viennaCityElement.querySelector(".time");

  viennaDateElement.innerHTML = moment()
    .tz("Europe/Vienna")
    .format("MMMM Do, YYYY");

  viennaTimeElement.innerHTML = moment()
    .tz("Europe/Vienna")
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyCityElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyCityElement.querySelector(".date");
  let sydneyTimeElement = sydneyCityElement.querySelector(".time");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do, YYYY");

  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
}
setInterval(showCurrentTime, 1000);
