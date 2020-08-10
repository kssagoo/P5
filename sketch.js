 var api='http://api.openweathermap.org/data/2.5/weather?q=';
 var key='&APPID=c7a2e0544f3b5641d1979c135147e354';
 var unit='&units=metric';
 //var city='Berlin';
 //var url=api+city+key+unit;
 // //var city='London';
  //var her;
 var weather;
 var input;
  	//var url=api+her+key+unit;  
function setup() {
  // put setup code here
  createCanvas(400,400);
var click=select('#btn1');
click.mousePressed(kanwal);
input=select('#input1');
}
function kanwal(){

	var url=api+input.value()+key+unit;
	textSize(25);
	loadJSON(url,Myfunction);
}
//  //createElement('h3','temperature in London is:');

// function getInfo(){
	
// }
function Myfunction(data){
weather=data;
 //console.log(weather);
}
function draw() {
background("#12365c");
if(weather){
	fill("white");
	text("Temprature:",25,40);
	text(weather.main.temp,165,40);
}
}
