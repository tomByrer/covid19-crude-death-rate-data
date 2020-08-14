const fs = require('fs')

// cheery pick data, & split away US states since might use another source
// might not need area-arrays anymore; will use cencus data to loop
let csse = JSON.parse( fs.readFileSync('./data/covid-csse.json', 'utf8') )
let csseUS = []
let csseNotUS = []
let countUS = 0
let countNotUS = 0
for (let i=0, len = csse.length; i < len; i++) {
	if( csse[i].Country_Region === 'US' ){
		let tempArr = {
			area: csse[i].Province_State,
			// county: csse[i].Admin2,
			// fips: csse[i].FIPS,
			// updated: csse[i].Last_Update,
			positive: csse[i].Confirmed,
			deaths: csse[i].Deaths,
		}
		countUS = csseUS.push( tempArr )
	}else{
		let tempArr = {
			area: csse[i].Country_Region,
			// county: csse[i].Admin2,
			// fips: csse[i].FIPS,
			// updated: csse[i].Last_Update,
			positive: csse[i].Confirmed,
			deaths: csse[i].Deaths,
		}
		countNotUS = csseNotUS.push( tempArr )
	}
}

console.log("US count = "+ countUS)
fs.writeFileSync( './data/covid-us.json', JSON.stringify(csseUS, null, 1) )
console.log("Wolrd (not US) count = "+ countNotUS)
fs.writeFileSync( './data/covid-world.json', JSON.stringify(csseNotUS, null, 1) )

