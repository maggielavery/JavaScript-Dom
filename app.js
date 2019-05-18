// from data.js
var tableData = data;
var button = d3.select("#filter-btn");

// YOUR CODE HERE!
var tbody = d3.select("tbody");
    tableData.forEach((sighting) => {
    var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

button.on("click", function() {
    d3.event.preventDefault();
    d3.select("tbody").html("");
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#cityval").property("value").toLowerCase();
    var stateValue = d3.select("#stateval").property("value").toLowerCase();
    var countryValue = d3.select("#countryval").property("value").toLowerCase();
    var shapeValue = d3.select("#shapeval").property("value").toLowerCase();

    if (dateValue !== "") {
        var filteredDates = tableData.filter(sighting => sighting.datetime === dateValue);
    }
    else {
        var filteredDates = tableData;
    }
    if (cityValue !== "") {
        var filteredCities = filteredDates.filter(sighting => sighting.city === cityValue);
    }
    else {
        var filteredCities = filteredDates;
    }
    if (stateValue !== "") {
        var filteredStates = filteredCities.filter(sighting => sighting.state === stateValue);
    }
    else {
        var filteredStates = filteredCities;
    }
    if (countryValue !== "") {
        var filteredCountries = filteredStates.filter(sighting => sighting.country === countryValue);
    }
    else {
        var filteredCountries = filteredStates;
    }
    if (shapeValue !== "") {
        var filteredData = filteredStates.filter(sighting => sighting.shape === shapeValue);
    }
    else {
        var filteredData = filteredStates;
    }

    console.log(cityValue);
    var tbody = d3.select("tbody");
    filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});
