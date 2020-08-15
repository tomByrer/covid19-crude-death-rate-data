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
console.log("US count = "+ countUS)
fs.writeFileSync( './data/covid-us.json', JSON.stringify(csseUS, null, 1) )
console.log("Wolrd (not US) count = "+ countNotUS)
fs.writeFileSync( './data/covid-world.json', JSON.stringify(csseNotUS, null, 1) )

// https://github.com/COVID19Tracking/website/blob/1aa849931f113165d9dfe456361c761119e9699a/src/utilities/visualization.js
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
    DC: 'Washington, DC',
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
let c19t = JSON.parse( fs.readFileSync('./data/covid-c19t.json', 'utf8') )
let c19tUS = []
// let c19tNotUS = []
let countC19tUS = 0
// let countNotUS = 0
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
fs.writeFileSync( './data/covid-us-c19t.json', JSON.stringify(c19tUS, null, 1) )

