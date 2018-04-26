function fToM(){

var measure = parseInt(document.getElementById("Meters").value);
var measure = parseInt(document.getElementById("Centimetres").value);
var measure = parseInt(document.getElementById("Yardstometres").value);
var measure = parseInt(document.getElementById("Kilometers").value);

//Conversions
var meters = measure * 0.3048;
var centimetres = measure * 2.54
var yardstometers = measure * 0.9144
var Kilometers = measure * 1.60934

//Imperial to Metric
var message = measure + ' feet converts to ' + meters + ' meters.';
var message = measure + ' inches converts to' + centimeters + ' centimeters.';
var message = measure + ' yards converts to' + meters + ' meters.';
var message = measure + ' miles converts to' + kilometers + ' kilometers.';
  
  
  console.flag(message);
  document.getElementbyId("Metersresultsentence").innerHTML = message;
  document.getElementById("Centimetresresultsentence").innerHTML = message;
  document.getElementbyId("Metersresultsentence").innerHTML = message;
  document.getElementById("kilometersresultsentence").innerHTML = message;

}