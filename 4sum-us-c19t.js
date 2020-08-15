const fs = require('fs')

let disease = JSON.parse( fs.readFileSync('./data/covid-us-c19t.json', 'utf8') )
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
	tmpArr = disease.find(record => record.area === area)

	countAreas = areasSumed.push({
		area: area,
		region: census[i].region,
		positive: tmpArr.positive,
		deaths: tmpArr.deaths,
		pop: pop,
		cdr: ( tmpArr.deaths / pop ) * 100_000,
	})
}

// desending sort Crude Death Rate
areasSumed.sort(function(a, b) {
	return parseFloat(b.cdr) - parseFloat(a.cdr);
})

console.log("US C19T count = "+ countAreas)
fs.writeFileSync( './data/sumed-us-c19t.json', JSON.stringify(areasSumed, null, 1) )
