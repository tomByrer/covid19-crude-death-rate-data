const fs = require('fs')
const JSONprettifyMin = require('./util').JSONprettifyMin

let csse = JSON.parse( fs.readFileSync('./data/covid-us-jh.json', 'utf8') )
let c19t = JSON.parse( fs.readFileSync('./data/covid-us-c19t.json', 'utf8') )
let census = JSON.parse( fs.readFileSync('./data/census-us.json', 'utf8') )

// reduce & zip population & disease stats
let tmpArr = []
let c19tRecord = []
let sumPostive = 0
let sumDeaths = 0
let area = ''
let pop = 0
let areasSumed = []
let countAreas = 0
for( let i=0, len = census.length; i < len; i++ ){
	area = census[i].area
	pop = census[i].pop

	tmpArr = csse.filter(areaInAll => {
		return areaInAll.area === area
	})
	sumPostive = 0
	sumDeaths = 0
	tmpArr.forEach(obj => {
		sumPostive += obj.positive
		sumDeaths += obj.deaths
	})

	c19tRecord = c19t.find(record => record.area === area)

	// assume COVID19Tracking is more accurate than JH; NY & NM #s are too far off, CO seperates cert deaths
	countAreas = areasSumed.push({
		area: area,
		region: census[i].region,
		positive: c19tRecord.positive,
		positiveJH: sumPostive,
		deaths: c19tRecord.deaths,
		deathsJH: sumDeaths,
		pop: pop,
		cdr: ( c19tRecord.deaths / pop ) * 100_000,
		cdrJH: ( sumDeaths / pop ) * 100_000,
	})
}

// desending sort Crude Death Rate
areasSumed.sort(function(a, b) {
	return parseFloat(b.cdr) - parseFloat(a.cdr);
})

console.log("US count = "+ countAreas)
fs.writeFileSync( './data/sumed-us.json', JSONprettifyMin(areasSumed) )
