
// Load the Visualization API and chart packages
google.load('visualization', '1.0', {'packages':['corechart'], callback: function(){
    //console.log("autism");
    drawChartFromCSV("csvFiles/AutismSpeaksPercentages.csv", "Autism Speaks (2012)", 'chartDivAS');
    drawChartFromCSV("csvFiles/AmericanCancerSocietyPercentages.csv", "American Cancer Society (2012)", 'chartDiv');
    drawChartFromCSV("csvFiles/DVNFPercentages.csv", "Disabled Veterans National Foundation (2012)", 'chartDivDVNF');
    drawChartFromCSV("csvFiles/FeedingAmericaPercentages.csv", "Feeding America (2012)", 'chartDivFA');
    drawChartFromCSV("csvFiles/HabitatPercentages.csv", "Habitat for Humanity (2012)", 'chartDivHFH');
    drawChartFromCSV("csvFiles/CFOAPercentages.csv", "Cancer Fund of America (2012)", 'chartDivCFA');
}});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(function(){
    //console.log("autism");
    drawChartFromCSV("csvFiles/AutismSpeaksPercentages.csv", "Autism Speaks (2012)", 'chartDivAS');
    drawChartFromCSV("csvFiles/AmericanCancerSocietyPercentages.csv", "American Cancer Society (2012)", 'chartDiv');
    drawChartFromCSV("csvFiles/DVNFPercentages.csv", "Disabled Veterans National Foundation (2012)", 'chartDivDVNF');
    drawChartFromCSV("csvFiles/FeedingAmericaPercentages.csv", "Feeding America (2012)", 'chartDivFA');
    drawChartFromCSV("csvFiles/HabitatPercentages.csv", "Habitat for Humanity (2012)", 'chartDivHFH');
    drawChartFromCSV("csvFiles/CFOAPercentages.csv", "Cancer Fund of America (2012)", 'chartDivCFA');
});

function drawChartFromCSV(csvFile, title, chartDiv){
  // Get the csv file, and convert it into a string
  $.get(csvFile, function(csvString) {
    // transform the CSV string into a 2D array
    var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
    // convert the 2D array into a data table google charts can read
    var data = new google.visualization.arrayToDataTable(arrayData);
    //console.log("HERE!!" + data);
    

    var options = {
      title: title,
      hAxis: {title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(1).max},
      vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: 100},
      legend: 'none',
      trendlines: {
        0:{
          color: 'green'
        }
      }
    };
    //draw the chart
    var chart = new google.visualization.ColumnChart(document.getElementById(chartDiv));
    chart.draw(data, options);
  });
}

//drawChartFromCSV("csvFiles/AutismSpeaksPercentages.csv", "Autism Speaks", 'chartDivAS');
//drawChartFromCSV("csvFiles/AmericanCancerSocietyPercentages.csv", "American Cancer Society", 'chartDiv');
//drawChartFromCSV("csvFiles/DVNFPercentages.csv", "Disabled Veterans National Foundation", 'chartDivDVNF');
//drawChartFromCSV("csvFiles/FeedingAmericaPercentages.csv", "Feeding America", 'chartDivFA');
//drawChartFromCSV("csvFiles/HabitatPercentages.csv", "Habitat for Humanity", 'chartDivHFH');

function toggleVisibility(elementSelector) {
    var currentVisibility = false;
    if( $(elementSelector).css("visibility") === "visible") {
        currentVisibility = true;
    }
    var value = currentVisibility ? "hidden" : "visible";
    $(elementSelector).css("visibility", value);
}

$(document).ready(function() {

    $("#autismProgramPop").click(function(){
        toggleVisibility("#popupDivAS");

    });


    $("#ACSProgramPop").click(function(){
        toggleVisibility("#popupDivACS");
    });

    $("#FAProgramPop").click(function(){
        toggleVisibility("#popupDivFA");
    });

    $("#HFHProgramPop").click(function(){
        toggleVisibility("#popupDivHFH");
    });

    $("#CFAProgramPop").click(function(){
        toggleVisibility("#popupDivCFA");
    });

    $(window).resize(function(){
        //console.log("redrwa");
        drawChartFromCSV("csvFiles/AutismSpeaksPercentages.csv", "Autism Speaks (2012)", 'chartDivAS');
        drawChartFromCSV("csvFiles/AmericanCancerSocietyPercentages.csv", "American Cancer Society (2012)", 'chartDiv');
        drawChartFromCSV("csvFiles/DVNFPercentages.csv", "Disabled Veterans National Foundation (2012)", 'chartDivDVNF');
        drawChartFromCSV("csvFiles/FeedingAmericaPercentages.csv", "Feeding America (2012)", 'chartDivFA');
        drawChartFromCSV("csvFiles/HabitatPercentages.csv", "Habitat for Humanity (2012)", 'chartDivHFH');
        drawChartFromCSV("csvFiles/CFOAPercentages.csv", "Cancer Fund of America (2012)", 'chartDivCFA');
        drawPopASChartFromCSV();
        drawPopACSChartFromCSV();
        drawPopFAChartFromCSV();
        drawPopHFHChartFromCSV();
        drawPopCFAChartFromCSV();
    });


});