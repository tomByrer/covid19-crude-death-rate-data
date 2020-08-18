const Papa = require('papaparse')
let fs = require('fs')
const GithubContent = require('github-content')
/**
 * Stringifies into JSON then minimally prettifies it with only newlines
 * @typedef {array} array of objects
 */
JSONprettifyMin = function( arr ){
	return JSON.stringify( arr ).replace( /([{,](?="))|(.(?=}))/g, '$&\n' )
}

/**
 * Return long state name from abbreviation
 * @source https://github.com/COVID19Tracking/website/blob/1aa849931f113165d9dfe456361c761119e9699a/src/utilities/visualization.js
 * @typedef {str} abbreviation
 */
const getStateName = abbr => {
  const names = {
    AK: 'Alaska',
    AL: 'Alabama',
    AR: 'Arkansas',
    AS: 'American Samoa',
    AZ: 'Arizona',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    GU: 'Guam',
    HI: 'Hawaii',
    IA: 'Iowa',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    MA: 'Massachusetts',
    MD: 'Maryland',
    ME: 'Maine',
    MI: 'Michigan',
    MN: 'Minnesota',
    MO: 'Missouri',
    MP: 'N. Mariana Islands',
    MS: 'Mississippi',
    MT: 'Montana',
    NC: 'North Carolina',
    ND: 'North Dakota',
    NE: 'Nebraska',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NV: 'Nevada',
    NY: 'New York',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    PR: 'Puerto Rico',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VA: 'Virginia',
    VI: 'Virgin Islands',
    VT: 'Vermont',
    WA: 'Washington',
    WI: 'Wisconsin',
    WV: 'West Virginia',
    WY: 'Wyoming',
  }
  return names[abbr] || abbr
}


	let result = []
// World data from Johns Hopkins
const csse = new GithubContent({
	owner: 'CSSEGISandData',
	repo: 'COVID-19',
	branch: 'master' // defaults to master
})
// CSSE is at Johns Hopkins University
csse.file('csse_covid_19_data/csse_covid_19_daily_reports/08-17-2020.csv', function(err, file) {
	let result = []

	if (err) return console.log(err);
	console.log(file.path);
	let csv = file.contents.toString()

	let json = Papa.parse(csv, {
		delimiter: ',',
		dynamicTyping: true,
		header: true,
		linebreak: '\n',
	})
	// fs.writeFileSync( './resources/covid-jh.json', JSONprettifyMin(json.data) )
	// let csse = JSON.parse( fs.readFileSync('./resources/covid-jh.json', 'utf8') )

	// redeuce & plit data
	let csse = json.data
	let csseUS = []
	let csseNotUS = []
	let countUS = 0
	let countNotUS = 0
	for ( let i=0, len = csse.length; i < len; i++ ){
		if( csse[i].Country_Region === 'US' ){
			countUS = csseUS.push({
				area: csse[i].Province_State,
				// county: csse[i].Admin2,
				// fips: csse[i].FIPS,
				// updated: csse[i].Last_Update,
				positive: csse[i].Confirmed,
				deaths: csse[i].Deaths,
			})
		}else{
			countNotUS = csseNotUS.push({
				area: csse[i].Country_Region,
				// county: csse[i].Admin2,
				// fips: csse[i].FIPS,
				// updated: csse[i].Last_Update,
				positive: csse[i].Confirmed,
				deaths: csse[i].Deaths,
			})
		}
	}
	console.log("JH US count = "+ countUS)
	// fs.writeFileSync( './resources/covid-us-jh.json', JSONprettifyMin(csseUS) )
	console.log("Wolrd (not US) count = "+ countNotUS)
	// fs.writeFileSync( './resources/covid-world.json', JSONprettifyMin(csseNotUS) )
	// let disease = JSON.parse( fs.readFileSync('./resources/covid-world.json', 'utf8') )

	// combine with world cencus and calc CDR
	let census = JSON.parse( fs.readFileSync('./resources/census-world.json', 'utf8') )

	// reduce & zip population & disease stats
	let tmpArr = []
	let sumPostive = 0
	let sumDeaths = 0
	let area = ''
	let pop = 0
	let worldSumed = []
	let countAreas = 0
	for( let i=0, len = census.length; i < len; i++ ){
		sumPostive = 0
		sumDeaths = 0
		area = census[i].area
		pop = census[i].pop
		tmpArr = csseNotUS.filter(areaInAll => {
			return areaInAll.area === area
		})

		tmpArr.forEach(obj => {
			sumPostive += obj.positive
			sumDeaths += obj.deaths
		})
		countAreas = worldSumed.push({
			area: area,
			region: census[i].region,
			positive: sumPostive,
			deaths: sumDeaths,
			pop: pop,
			cdr: ( sumDeaths / pop ) * 100_000,
		})
	}

	// desending sort Crude Death Rate
	worldSumed.sort(function(a, b) {
		return parseFloat(b.cdr) - parseFloat(a.cdr);
	})

	console.log("World sumed count = "+ countAreas)
	// fs.writeFileSync( './resources/sumed-world.json', JSONprettifyMin(worldSumed) )


	/* COVID19Tracking */
	let c19tUS = []
	// US data from COVID19Tracking
	const c19t = new GithubContent({
		owner: 'COVID19Tracking',
		repo: 'covid-public-api',
		branch: 'master' // defaults to master
	})
	c19t.file('v1/states/current.csv', function(err, file) {
		if (err) return console.log(err);
		console.log('loaded from COVID19Tracking: '+ file.path);
		let csv = file.contents.toString()

		let json = Papa.parse(csv, {
			delimiter: ',',
			dynamicTyping: true,
			header: true,
			linebreak: '\n',
		})
		// console.log(wo rldJSON)
		// fs.writeFileSync( './resources/covid-c19t.json', JSONprettifyMin(json.data) )
		// let c19t = JSON.parse( fs.readFileSync('./resources/covid-c19t.json', 'utf8') )

		// reduce data
		let c19t = json.data
		let countC19tUS = 0
		for (let i=0, len = c19t.length; i < len; i++) {
				countC19tUS = c19tUS.push({
					area: getStateName( c19t[i].state ),
					// county: c19t[i].Admin2,
					// fips: c19t[i].FIPS,
					// updated: c19t[i].Last_Update,
					positive: c19t[i].positive,
					deaths: c19t[i].death,
				})
		}
		console.log("US C19T count = "+ countC19tUS)
		// fs.writeFileSync( './resources/covid-us-c19t.json', JSONprettifyMin(c19tUS) )
		// console.log('C19T: '+ c19tUS)

		/* merge JS & C19T US data */
		// let csseUS = JSON.parse( fs.readFileSync('./resources/covid-us-jh.json', 'utf8') )
		// let c19tUS = JSON.parse( fs.readFileSync('./resources/covid-us-c19t.json', 'utf8') )
		let census = JSON.parse( fs.readFileSync('./resources/census-us.json', 'utf8') )

		// reduce & zip population & disease stats
		tmpArr = []
		c19tRecord = []
		sumPostive = 0
		sumDeaths = 0
		area = ''
		pop = 0
		let usSumed = []
		countAreas = 0
		for( let i=0, len = census.length; i < len; i++ ){
			area = census[i].area
			pop = census[i].pop

			tmpArr = csseUS.filter(areaInAll => {
				return areaInAll.area === area
			})
			sumPostive = 0
			sumDeaths = 0
			tmpArr.forEach(obj => {
				sumPostive += obj.positive
				sumDeaths += obj.deaths
			})

			c19tRecord = c19tUS.find(record => record.area === area)

			// assume COVID19Tracking is more accurate than JH; NY & NM #s are too far off, CO seperates cert deaths
			countAreas = usSumed.push({
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
		usSumed.sort(function(a, b) {
			return parseFloat(b.cdr) - parseFloat(a.cdr);
		})

		console.log("US sumed count = "+ countAreas)
		// fs.writeFileSync( './resources/sumed-us.json', JSONprettifyMin(usSumed) )


		/* final collate */
		// let usSumed = JSON.parse( fs.readFileSync('./resources/sumed-us.json', 'utf8') )
		// let worldSumed = JSON.parse( fs.readFileSync('./resources/sumed-world.json', 'utf8') )

		result = [...usSumed, ...worldSumed ]

		// desending sort Crude Death Rate, positive cases, then area
		// https://stackoverflow.com/a/2784265/1324588
		result.sort(function mysortfunction(a, b) {

				const cdrA = a.cdr
				const cdrB = b.cdr
				if (cdrA < cdrB) return 1
				if (cdrA > cdrB) return -1

				const positiveA = a.positive
				const positiveB = b.positive
				if (positiveA < positiveB) return 1
				if (positiveA > positiveB) return -1

				const areaA = a.area
				const areaB = b.area
				if (areaA < areaB) return -1
				if (areaA > areaB) return 1

				return 0
		})

		console.log("total count = "+ result.length)
		fs.writeFileSync( './covid19-cdr.json', JSONprettifyMin(result) )
		fs.writeFileSync( './covid19-cdr.csv', Papa.unparse(result) )

	})

})

