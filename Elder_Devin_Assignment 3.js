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
//var mModHp =
//var cModHp =
//var iModHp =
//var vModHp =

console.log("These are the stats for the cars that will be racing today.");

// Object Function
var carData = function(car) {
	var	returnMCar = car.mustang
	var	returnCCar = car.camaro
	var	returnICar = car.integra
	var	returnVCar = car.viper
return  returnMCar,
		returnCCar,
		returnICar,
		returnVCar
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
	var returnMModdedPsi = m / 20 + 1
	var returnCModdedPsi = c / 20 + 1
	var returnIModdedPsi = i / 20 + 1
	var returnVModdedPsi = v / 20 + 1
	return	mModdedPsi,
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
		var returnMModdedPsiHp = moddedPsi[0] + mCar.oemHp
		var returnCModdedPsiHp = moddedPsi[1] + cCar.oemHp
		var	returnIModdedPsiHp = moddedPsi[2] + iCar.oemHp
		var returnVModdedPsiHp = moddedPsi[3] + vCar.oemHp
		return	returnMModdedPsiHp,
				returnCModdedPsiHp,
				returnIModdedPsiHp,
				returnVModdedPsiHp
	var ModdedPsiHp = [
			mModdedPsiHp,
			cModdedPsiHp,
			iModdedPsiHp,
			iModdedPsiHp
		];
		for (var i = 0; i < 4; i++){
			var returnMModdedHp = mModdedPsiHp + mCar.nitrous
			var returnCModdedHp = cModdedPsiHp + cCar.nitrous
			var	returnIModdedHp = iModdedPsiHp + iCar.nitrous
			var returnVModdedHp = vModdedPsiHp + vCar.nitrous
			console.log(mModdedHp)
			return	returnMModdedHp, 
					returnCModdedHp, 
					returnIModdedHp, 
					returnVModdedHp
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

// Returned Variables
var	mCar = carData.returnMCar,
	cCar = carData.returnCCar,
	iCar = carData.returnICar,
	vCar = carData.returnVCar
var	mModdedPsi = boostPsi.returnMModdedPsi,
	cModdedPsi = boostPsi.returnCModdedPsi,
	iModdedPsi = boostPsi.returnIModdedPsi,
	vModdedPsi = boostPsi.returnVModdedPsi
var mModdedPsiHp = boostPsi.returnMModdedPsiHp,
	cModdedPsiHp = boostPsi.returnCModdedPsiHp,
	iModdedPsiHp = boostPsi.returnIModdedPsiHp,
	vModdedPsiHp = boostPsi.returnVModdedPsiHp
var mModdedHp = boostPsi.returnMModdedHp
	cModdedHp = boostPsi.returnCModdedHp
	iModdedHp = boostPsi.returnIModdedHp
	vModdedHp = boostPsi.returnVModdedHp

carData(json.dragCar)
stats(json)
boostPsi(mCar.boost, cCar.boost, iCar.boost, vCar.boost)
moddedHp()
wgtHpRatio()
winner()
console.log(mCar)