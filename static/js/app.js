var tbody = d3.select("tbody");
var tableData = data;


console.log(data);


tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});



var submit = d3.select("#submit");
submit.on("click", function() {

  d3.event.preventDefault();
  var inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);
