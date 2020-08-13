const fs = require('fs')

let disease = JSON.parse( fs.readFileSync('./data/covid-world.json', 'utf8') )
let census = JSON.parse( fs.readFileSync('./data/census-world.json', 'utf8') )

// reduce & zip population & disease stats
let tmpArr = []
let sumConfirmed = 0
let sumDeaths = 0
let area = ''
let pop = 0
let areasSumed = []
let countAreas = 0
for( let i=0, len = census.length; i < len; i++ ){
	sumConfirmed = 0
	sumDeaths = 0
	area = census[i].area
	pop = census[i].pop
	tmpArr = disease.filter(areaInAll => {
		return areaInAll.area === area
	})

	tmpArr.forEach(obj => {
		sumConfirmed += obj.confirmed
		sumDeaths += obj.deaths
	})
	countAreas = areasSumed.push({
		area: area,
		region: census[i].region,
		confirmed: sumConfirmed,
		deaths: sumDeaths,
		pop: pop,
		cdr: ( sumDeaths / pop ) * 100_000,
	})
}

// desending sort Crude Death Rate
areasSumed.sort(function(a, b) {
	return parseFloat(b.cdr) - parseFloat(a.cdr);
})

console.log("World count = "+ countAreas)
fs.writeFileSync( './data/sumed-world.json', JSON.stringify(areasSumed) )
