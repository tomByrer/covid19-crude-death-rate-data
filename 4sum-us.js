const fs = require('fs')

let disease = JSON.parse( fs.readFileSync('./data/covid-us.json', 'utf8') )
let census = JSON.parse( fs.readFileSync('./data/census-us.json', 'utf8') )

// reduce & zip population & disease stats
let tmpArr = []
let sumPostive = 0
let sumDeaths = 0
let area = ''
let pop = 0
let areasSumed = []
let countAreas = 0
for( let i=0, len = census.length; i < len; i++ ){
	sumPostive = 0
	sumDeaths = 0
	area = census[i].area
	pop = census[i].pop
	tmpArr = disease.filter(areaInAll => {
		return areaInAll.area === area
	})

	tmpArr.forEach(obj => {
		sumPostive += obj.positive
		sumDeaths += obj.deaths
	})
	countAreas = areasSumed.push({
		area: area,
		region: census[i].region,
		positive: sumPostive,
		deaths: sumDeaths,
		pop: pop,
		cdr: ( sumDeaths / pop ) * 100_000,
	})
}

// desending sort Crude Death Rate
areasSumed.sort(function(a, b) {
	return parseFloat(b.cdr) - parseFloat(a.cdr);
})

console.log("US count = "+ countAreas)
fs.writeFileSync( './data/sumed-us.json', JSON.stringify(areasSumed) )
