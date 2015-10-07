//function to draw comparison chart
function drawComparisonChart() {
  //set options of chart
  var options = {
    width: 800,
    height: 400,
    chartArea: {width: '55%'},
    animation: {
      duration: 1000,
      easing: 'out'
    }
  };
  //create the chart
  var chart = new google.visualization.ColumnChart(document.getElementById('compareChartDiv'));
  //array to hold the data to be added to the data table
  var dataForChart = [['American Cancer Society', 72, 6, 22],
                      ['Autism Speaks', 70.5, 4.3, 25],
                      ['Disabled Veterans National Foundation', 45.5, 9.6, 45],
                      ['Feeding America', 98, 0.5, 1.5],
                      ['Habitat for Humanity', 84.1, 4.3, 11.6],
                      ['Cancer Fund of America', 42, 6.9, 51]]
  //create new data table to be used in the chart                    
  var data = new google.visualization.DataTable();
  //add in the necessary columns
  data.addColumn('string', 'Charity');
  data.addColumn('number', 'ProgramExpenses');
  data.addColumn('number', 'ManagementExpenses');
  data.addColumn('number', 'Fundraising')

  //declare buttons
  var addButtonA = document.getElementById('addA');
  var addButtonB = document.getElementById('addB');
  var addButtonC = document.getElementById('addC');
  var addButtonD = document.getElementById('addD');
  var addButtonE = document.getElementById('addE');
  var addButtonF = document.getElementById('addF');
  var resetButton = document.getElementById('reset');
  var compareAllButton = document.getElementById('compareAll');

  //function that displays the chart to the screen given the current data in the table
  function drawChart() {
    chart.draw(data, options);
  }

  function changeButton(button){
      if (button.disabled === true){

          $(button).css("background", "grey");
          console.log("changed Color");
      }
      if (button.disabled === false) {
          $(button).css("background", "df7366");
      }
  }

  addButtonA.onclick = function() {
    if (addButtonA.disabled == false){
      //add the first charity's data to the data table
      data.addRow(dataForChart[0]);
      //disable the button
      addButtonA.disabled = true;
    }
    changeButton(addButtonA);
    drawChart();
  };
  addButtonB.onclick = function() {
    if (addButtonB.disabled == false){
      //add the second charity's data to the data table
      data.addRow(dataForChart[1]);
      //disable the button
      addButtonB.disabled = true;
    }
    changeButton(addButtonB);
    drawChart();
  };
  addButtonC.onclick = function() {
    if (addButtonC.disabled == false){
      //add the third charity's data to the data table
      data.addRow(dataForChart[2]);
      //disable the button
      addButtonC.disabled = true;
    }
    changeButton(addButtonC);
    drawChart();
  };
  addButtonD.onclick = function() {
    if (addButtonD.disabled == false){
      //add the fourth charity's data to the data table
      data.addRow(dataForChart[3]);
      //disable the button
      addButtonD.disabled = true;
    }
    changeButton(addButtonD);
    drawChart();
  };
  addButtonE.onclick = function() {
    if (addButtonE.disabled == false){
      //add the fifth charity's data to the data table
      data.addRow(dataForChart[4]);
      //disable the button
      addButtonE.disabled = true;
    }
    changeButton(addButtonE);
    drawChart();
  };
  addButtonF.onclick = function() {
    if (addButtonF.disabled == false){
       //add the fifth charity's data to the data table
       data.addRow(dataForChart[5]);
       //disable the button
       addButtonF.disabled = true;
       }
        changeButton(addButtonF);
       drawChart();
    };

   function clearChart(){
    //clears all the rows in the data table
    numRows = data.getNumberOfRows();
    data.removeRows(0, numRows);
  }
  
  resetButton.onclick = function() {
    //clear all the rows from the data table
    clearChart();
    //make all the buttons pressable
    addButtonA.disabled = false;
    addButtonB.disabled = false;
    addButtonC.disabled = false;
    addButtonD.disabled = false;
    addButtonE.disabled = false;
    addButtonF.disabled = false;
    compareAllButton.disabled= false;

     changeButton(addButtonA);
      changeButton(addButtonB);
      changeButton(addButtonC);
      changeButton(addButtonD);
      changeButton(addButtonE);
      changeButton(addButtonF);
    //display the chart
    drawChart();
  }

  compareAllButton.onclick = function() {
    if (compareAllButton.disabled == false){
      //clear what was already in the data table
      clearChart();
      //disable all the other buttons (except for the reset button)
      addButtonA.disabled = true;
      addButtonB.disabled = true;
      addButtonC.disabled = true;
      addButtonD.disabled = true;
      addButtonE.disabled = true;
      addButtonF.disabled = true;
      compareAllButton.disabled = true;
      changeButton(addButtonA);
      changeButton(addButtonB);
      changeButton(addButtonC);
      changeButton(addButtonD);
      changeButton(addButtonE);
      changeButton(addButtonF);
      //loop through all of the data and add it to the data table
      for(var i = 0; i < dataForChart.length; i++){
        data.addRow(dataForChart[i]);
      }
    }
    //display the chart
    drawChart();
  }

  drawChart();
}

google.load('visualization', '1.1', {packages: ['corechart']});
google.setOnLoadCallback(drawComparisonChart);


