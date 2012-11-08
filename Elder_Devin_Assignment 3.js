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
var nitrous = [
		json.dragCar.mustang.nitrous,
		json.dragCar.camaro.nitrous,
		json.dragCar.integra.nitrous,
		json.dragCar.viper.nitrous
	];
var oemHp = [
		json.dragCar.mustang.oemHp,
		json.dragCar.camaro.oemHp,
		json.dragCar.integra.oemHp,
		json.dragCar.viper.oemHp
	];
//var mModHp =
//var cModHp =
//var iModHp =
//var vModHp =

console.log("These are the stats for the cars that will be racing today.");

// Object Function
var carData = function(car) {
	mCar = car.mustang;
	cCar = car.camaro;
	iCar = car.integra;
	vCar = car.viper;
return  mCar,
		cCar,
		iCar,
		vCar
};

// String Function
var stats = function(js) {
	var mStats = js.dragCar.mustang
		console.log("Make: " + js.dragCar.mustang.make + ", Model: " + 
		js.dragCar.mustang.model + ", Year: " + js.dragCar.mustang.year + ", Engine: " 
		+ js.dragCar.mustang.engine + ", Stock Hp: " + js.dragCar.mustang.oemHp + 
		", Nitrous: " + js.dragCar.mustang.nitrous + ", Boost: " + 
		js.dragCar.mustang.boost + ", Weight: " + js.dragCar.mustang.weight);
	var cStats = js.dragCar.camaro
		console.log("Make: " + js.dragCar.camaro.make + ", Model: " + 
		js.dragCar.camaro.model + ", Year: " + js.dragCar.camaro.year + ", Engine: " 
		+ js.dragCar.camaro.engine + ", Stock Hp: " + js.dragCar.camaro.oemHp + 
		", Nitrous: " + js.dragCar.camaro.nitrous + ", Boost: " + 
		js.dragCar.camaro.boost + ", Weight: " + js.dragCar.camaro.weight);
	var iStats = js.dragCar.integra
		console.log("Make: " + js.dragCar.integra.make + ", Model: " + 
		js.dragCar.integra.model + ", Year: " + js.dragCar.integra.year + ", Engine: " 
		+ js.dragCar.integra.engine + ", Stock Hp: " + js.dragCar.integra.oemHp + 
		", Nitrous: " + js.dragCar.integra.nitrous + ", Boost: " + 
		js.dragCar.mustang.boost + ", Weight: " + js.dragCar.mustang.weight);
	var vStats = js.dragCar.viper
		console.log("Make: " + js.dragCar.viper.make + ", Model: " + 
		js.dragCar.viper.model + ", Year: " + js.dragCar.viper.year + ", Engine: " 
		+ js.dragCar.viper.engine + ", Stock Hp: " + js.dragCar.viper.oemHp + 
		", Nitrous: " + js.dragCar.viper.nitrous + ", Boost: " + 
		js.dragCar.viper.boost + ", Weight: " + js.dragCar.viper.weight);
};

// Array Function
var boostPsi = function(m, c, i ,v) {
	var vModdedPsi = m / 20 + 1
	var cModdedPsi = c / 20 + 1
	var iModdedPsi = i / 20 + 1
	var vModdedPsi = boostPsi[3] / 20 + 1
	var moddedHp = function() {
	return	moddedPsiHp = [
			vModdedPsi,
			cModdedPsi,
			iModdedPsi,
			vModdedPsi
		];
	for (var i = 0; i < 4; i++) {
		var mModdedPsiHp = moddedPsi[0] + oemHp[0]
		var cModdedPsiHp = moddedPsi[1] + oemHp[1]
		var	iModdedPsiHp = moddedPsi[2] + oemHp[2]
		var vModdedPsiHp = moddedPsi[3] + oemHp[3]
		for (var i = 0; i < 4; i++){
			var mModdedHp = mModdedPsiHp + nitrous[i]
			var cModdedHp = cModdedPsiHp + nitrous[i]
			var	iModdedHp = iModdedPsiHp + nitrous[i]
			var vModdedHp = vModdedPsiHp + nitrous[i]
			console.log(mModdedHp)
			return	mModdedHp, 
					cModdedHp, 
					iModdedHp, 
					vModdedHp
			};
		return	mModdedPsiHp,
				cModdedPsiHp,
				iModdedPsiHp,
				vModdedPsiHp
		};
	};
};
	
console.log(vModdedHp)


carData(json.dragCar);
stats(json);
boostPsi(json.dragCar.mustang.boost,
		json.dragCar.camaro.boost,
		json.dragCar.integra.boost,
		json.dragCar.viper.boost);	
moddedHp();
