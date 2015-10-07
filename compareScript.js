/**
 * Created by carolinebraviak on 7/25/14.
 */



// Load the Visualization API and chart packages
google.load('visualization', '1.0', {'packages':['corechart'], callback: function(){
    console.log("autism");
//
}});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(function(){
    console.log("autism");

});


    var options = {

        width: 400,

        height: 240,

        vAxis: {minValue:0, maxValue:1000},

        animation: {

            duration: 1000,

            easing: 'out'

        }

    };


var chart = new google.visualization.ColumnChart(document.getElementById('compareDiv'));

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

var data = new google.visualization.DataTable();

data.addColumn('string', 'x');

data.addColumn('number', 'A');

data.addColumn('number', 'B');

data.addRow(['A', 123, 40]);

data.addRow(['B', 17, 20]);

var addButton = document.getElementById('b1');

var removeButton = document.getElementById('b2');

function drawChart() {

    // Disabling the buttons while the chart is drawing.

    addButton.disabled = true;

    removeButton.disabled = true;

    google.visualization.events.addListener(chart, 'ready',

        function() {

            // Enabling only relevant buttons.

            addButton.disabled = (data.getNumberOfColumns() - 1) >= chars.length;

            removeButton.disabled = (data.getNumberOfColumns() - 1) < 2;

        });

    chart.draw(data, options);

}
//
//function shuffleAndDrawChart() {
//
//    for (var i = 0; i < data.getNumberOfRows(); ++i) {
//
//        for (var j = 1; j < data.getNumberOfColumns(); ++j) {
//
//            var num = Math.floor(Math.random() * 1000);
//
//            data.setValue(i, j, num);
//
//        }
//
//    }
//
//    drawChart();
//
//}
//
//addButton.onclick = function() {
//
//    data.addColumn('number', chars[data.getNumberOfColumns() - 1]);
//
//    shuffleAndDrawChart();
//
//};
//
//removeButton.onclick = function() {
//
//    data.removeColumn(data.getNumberOfColumns() - 1);
//
//    shuffleAndDrawChart();
//
//};

drawChart();

