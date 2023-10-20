function showCurrentTime() {
  let seattleCityElement = document.querySelector("#seattle");

  if (seattleCityElement) {
    let seattleDateElement = seattleCityElement.querySelector(".date");
    let seattleTimeElement = seattleCityElement.querySelector(".time");
    seattleDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY");

    seattleTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let viennaCityElement = document.querySelector("#vienna");
  if (viennaCityElement) {
    let viennaDateElement = viennaCityElement.querySelector(".date");
    let viennaTimeElement = viennaCityElement.querySelector(".time");

    viennaDateElement.innerHTML = moment()
      .tz("Europe/Vienna")
      .format("MMMM Do, YYYY");

    viennaTimeElement.innerHTML = moment()
      .tz("Europe/Vienna")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let sydneyCityElement = document.querySelector("#sydney");
  if (sydneyCityElement) {
    let sydneyDateElement = sydneyCityElement.querySelector(".date");
    let sydneyTimeElement = sydneyCityElement.querySelector(".time");

    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");

    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone
    .replace("_", " ")
    .replace("Los Angeles", "Seattle")
    .split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format("MMMM Do, YYYY")}</p>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
          
        </div>
        <a href="index.html" class="reset">Reset</a>`;
}

setInterval(showCurrentTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
