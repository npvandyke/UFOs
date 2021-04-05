// Import the data from the data.js
const tableData = data; 
// Reference the HTML table (which has tbody tags) using d3
var tbody = d3.select("tbody");
// Create a function to build a dynamic table 
function buildTable(data) {
    tbody.html(""); //clears any existing table data 
    // Loop through each object in the data and append a row and cells for each value
    // in the row 
    data.forEach((dataRow) => {
    //append a row to the table body
    let row = tbody.append("tr"); 
    // loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {  
      let cell = row.append("td"); 
      cell.text(val);  
      }
    );
  });
}