// Devin "Lauren" Elder
// Term 1211
// Project 3
// Date

/*
console.log(json.dragCar.mustang);
console.log(json.dragCar.camaro);
console.log(json.dragCar.integra);
console.log(json.dragCar.viper);
*/



// Global Variables
//var mustangModHp =
//var camaroModHp =
//var integraModHp =
//var viperModHp =

// Procedure Method
var mustangOemHp = function() {
	var mOem = json.dragCar.mustang.oemHp
	console.log("The stock horsepower for the " + json.dragCar.mustang.engine + 
	" engine is " + mOem + "hp.");
	};
var camaroOemHp = function() {
	var cOem = json.dragCar.camaro.oemHp
	console.log("The stock horsepower for the " + json.dragCar.camaro.engine + 
	" engine is " + cOem + "hp.");
	};
var integraOemHp = function() {
	var iOem = json.dragCar.integra.oemHp
	console.log("The stock horsepower for the " + json.dragCar.integra.engine + 
	" Integra engine is " + iOem + "hp.");
	};
var viperOemHp = function() {
	var vOem = json.dragCar.viper.oemHp
	console.log("The stock horsepower for the " + json.dragCar.viper.engine + 
	" Viper engine is " + vOem + "hp.");
	};

// Accessor Method


mustangOemHp()
camaroOemHp()
integraOemHp()
viperOemHp()