// Devin "Lauren" Elder
// Term 1211
// Project 3
// Date

var json = {
	"dragCar": {
		"mustang": {
			"make":		"Ford",
			"model": 	"Mustang",
			"year":		"1993",
			"engine":	"347cid",
			"oemHp":	380,
			"moddedHp": 
			"nitrous":	100,
			"boost":	12,
			"weight":	3000
			},
		"camaro": {
			"make":		"Chevy",
			"model": 	"Camaro",
			"year":		"1986",
			"engine":	"350cid",
			"oemHp":	385,
			"moddedHp": 
			"nitrous":	150,
			"boost":	8,
			"weight":	3600
		},
		"integra": {
			"make":		"Acura",
			"model": 	"Integra Type R",
			"year":		"2000",
			"engine":	"110cid",
			"oemHp":	180,
			"moddedHp": 
			"nitrous":	75,
			"boost":	24,
			"weight":	2700
		},
		"viper": {
			"make":		"Dodge",
			"model": 	"Viper",
			"year":		"2010",
			"engine":	"510cid",
			"oemHp":	600,
			"moddedHp": 
			"nitrous":	0,
			"boost":	0,
			"weight":	3400
		}
	}
};

for (var key in json.dragCar) {
	var car = json.dragCar[key];
};