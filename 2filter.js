const fs = require('fs')

let all = JSON.parse( fs.readFileSync('./data/csse.json', 'utf8') ).data

// cheery pick data, & split away US states since might use another source
// might not need area-arrays anymore; will use cencus data to loop
let allUS = []
let allNotUS = []
let countUS = 0
let countNotUS = 0
// let statesAll = []
// let countriesAll = [] // not including US
for (let i=0, len = all.length; i < len; i++) {
	if( all[i].Country_Region === 'US' ){
		let tempArr = {
			area: all[i].Province_State,
			// county: all[i].Admin2,
			// fips: all[i].FIPS,
			// updated: all[i].Last_Update,
			positive: parseInt( all[i].Confirmed ),
			deaths: parseInt( all[i].Deaths ),
		}
		// statesAll.push( all[i].Province_State )
		countUS = allUS.push( tempArr )
	}else{
		let tempArr = {
			area: all[i].Country_Region,
			// county: all[i].Admin2,
			// fips: all[i].FIPS,
			// updated: all[i].Last_Update,
			positive: parseInt( all[i].Confirmed ),
			deaths: parseInt( all[i].Deaths ),
		}
		// countriesAll.push( all[i].Country_Region )
		countNotUS = allNotUS.push( tempArr )
	}
}

console.log("US count = "+ countUS)
fs.writeFileSync( './data/covid-us.json', JSON.stringify(allUS) )
// let statesUnique = [ ...new Set(statesAll) ]
// fs.writeFileSync( './data/us-states.json', JSON.stringify(statesUnique) )

console.log("Wolrd (not US) count = "+ countNotUS)
fs.writeFileSync( './data/covid-world.json', JSON.stringify(allNotUS) )
// let countriesUnique = [ ...new Set(countriesAll) ]
// fs.writeFileSync( './data/not-us-countries.json', JSON.stringify(countriesUnique) )

/*
	{
		"FIPS": "31153",
		"Admin2": "Sarpy",
		"Province_State": "Nebraska",
		"Country_Region": "US",
		"Last_Update": "2020-08-12 04:27:29",
		"Lat": "41.11314181",
		"Long_": "-96.11156432",
		"Confirmed": "2323",
		"Deaths": "11",
		"Recovered": "0",
		"Active": "2312",
		"Combined_Key": "Sarpy, Nebraska, US",
		"Incidence_Rate": "1240.9453193444306",
		"Case-Fatality_Ratio": "0.4735256134309083"
	},
*/
