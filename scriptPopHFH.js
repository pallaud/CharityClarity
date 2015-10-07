// Load the Visualization API and chart packages
google.load('visualization', '1.0', {'packages':['corechart'], callback: drawPopHFHChartFromCSV});
      
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawPopHFHChartFromCSV);

function drawPopHFHChartFromCSV(){
  // Get the csv file, and convert it into a string
  $.get("csvFiles/HabitatProgramPercentages.csv", function(csvString) {
    // transform the CSV string into a 2D array
    var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
    // convert the 2D array into a data table google charts can read
    var data = new google.visualization.arrayToDataTable(arrayData);
    //console.log(data);
    
//    var data = google.visualization.arrayToDataTable([
//          ['Catagory', 'Percentage'],
//          ['2004',  1000],
//          ['2005',  1170],
//          ['2006',  660],
//          ['2007',  1030]
//        ]);
//
    // define chart options
    var options = {
      title: "Habitat For Humanity Program Expenses",
        slices: {2: {offset: 0.2}
        },
        colors: ['blue', 'green', 'black']
//        width: 525,
//        height: 375
//      hAxis: {title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(1).max},
//      vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: 100},
//      legend: 'none',
//      trendlines: {
//        0:{
//          color: 'green'
//        }
//      }
    };
    //draw the chart
    var chart = new google.visualization.PieChart(document.getElementById('popupDivHFH'));
    chart.draw(data, options);
  });
}

console.log("num1");