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
		js.dragCar.mustang.boost + ", Weight: " + js.dragCar.integra.weight);
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
	var vModdedPsi = v / 20 + 1
	return	vModdedPsi,
			cModdedPsi,
			iModdedPsi,
			vModdedPsi
	var moddedHp = function() {
		var moddedPsi = [
			vModdedPsi,
			cModdedPsi,
			iModdedPsi,
			vModdedPsi
		];
	for (var i = 0; i < 4; i++) {
		var mModdedPsiHp = moddedPsi[0] + mCar.oemHp
		var cModdedPsiHp = moddedPsi[1] + cCar.oemHp
		var	iModdedPsiHp = moddedPsi[2] + iCar.oemHp
		var vModdedPsiHp = moddedPsi[3] + vCar.oemHp
		return	mModdedPsiHp,
				cModdedPsiHp,
				iModdedPsiHp,
				vModdedPsiHp
	var ModdedPsiHp = [
			mModdedPsiHp,
			cModdedPsiHp,
			iModdedPsiHp,
			iModdedPsiHp
		];
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
		};
	};
};

// Number Function
var wgtHpRatio = function() {
		mWgtHpRatio = mCar.weight / mModdedHp
		cWgtHpRatio = cCar.weight / cModdedHp
		iWgtHpRatio = iCar.weight / iModdedHp
		vWgtHpRatio = vCar.weight / vModdedHp
	return	mWgtHpRatio,
			cWgtHpRatio,
			iWgtHpRatio,
			vWgtHpRatio
};

// Boolean Function
var winner = function() {
	if (mWgtHpRatio < cWgtHpRatio) {
		var winnerOneRatio = mWgtHpRatio
		var winnerOneModel = mCar.model
		console.log("The " + mCar.model + " has the highest power to weight ratio and" +
		" beats the " + cCar.model + ".")
	return	winnerOneRatio,
			winnerOneModel
		if (iWgtHpRatio < vWgtHpRatio) {
			var winnerTwoRatio = iWgtHpRatio
			var winnerTwoModel = iCar.model
			console.log("The " + iCar.model + " has the highest power to weight ratio" +
			" and beats the " + vCar.model + ".")
		return	winnerTwoRatio,
				winnerTwoModel
		} else {
			var winnerTwoRatio = vWgtHpRatio
			var winnerTwoModel = vCar.model
			console.log("The " + vCar.model + " has the highest power to weight ratio" +
			" and beats the " + iCar.model + ".")
		return	winnerTwoRatio,
				winnerTwoModel
		};
	} else {
		var winnerOneRatio = cWgtHpRatio
		var winnerOneModel = cCar.model
		console.log("The " + cCar.model + " has the highest power to weight ratio and" +
		" beats the " + mCar.model + ".")
	return	winnerOneRatio,
			winnerOneModel
	};
	if (winnerOneRatio < winnerTwoRatio) {
		var winnerThreeRatio = winnerOneRatio
		var winnerThreeModel = winnerOneModel
		console.log("The " + winnerOneModel + " has the highest power to weight ratio and"
		+ " beats the " + winnerTwoModel + ".")
	return winnerOne;
	} else {
		var winnerThreeRatio = winnerTwoRatio
		var winnerThreeModel = winnerTwoModel
		console.log("The " + winnerTwoModel + " has the highest power to weight ratio and"
		+ " beats the " + winnerOneModel + ".")
	};
};

carData(json.dragCar)
stats(json)
boostPsi(mCar.boost,
		cCar.boost,
		iCar.boost,
		vCar.boost)
moddedHp()
wgtHpRatio()
winner()
console.log(vModdedPsi)