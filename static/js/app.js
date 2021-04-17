// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(tableData) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  tableData.forEach((tableRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(tableRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var Filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let filterValue = changedElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
      //  block of code to be executed if the condition is true
    if (filterValue) {
      Filters[filterId] = filterValue; 
    }
      //  block of code to be executed if the condition is false
    else {
      delete Filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    // call the filterTable() function from Step 7 
    filterTable(); 
};
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {

  // 8. Set the filtered data to the tableData.
  var filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.keys(Filters).forEach((filter) => {
    filteredData = filteredData.filter(row => row[filter] === Filters[filter]);
  })
  
  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
};
  
  
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
