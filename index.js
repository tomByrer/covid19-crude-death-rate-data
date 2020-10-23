const fetch = require('node-fetch')
const Papa = require('papaparse')
const dayjs = require('dayjs')
const fs = require('fs')

// US global counts
let usTotal = {}
let usJhTotalPositive = 0
let usJhTotalDeaths = 0
let usTotalPop = 0

/**
 * Stringifies into JSON then minimally prettifies it with only newlines
 * @typedef {array} array of objects
 */
JSONprettifyMin = function( arr ){
  return JSON
    .stringify( arr )
    .replace( /([{,](?="))|(.(?=}))/g, '$&\n' )
    .replace( /("jhDiff":)/g, '$&\n' )
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

const convertCsv = async( src )=>{
	const response = await fetch( src );
  const csv = await response.text()
  const obj = Papa.parse(csv, {
		delimiter: ',',
		dynamicTyping: true,
		header: true,
		linebreak: '\n',
	})
	return obj.data
}

const getGithub = async( src )=>{
  const raw = 'https://raw.githubusercontent.com/'
  let res
  switch( src ){
    case 'jh':
      const path = raw + 'CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
      res = await convertCsv( path + dayjs().format('MM-DD-YYYY') + '.csv' )
      if ( !res.length ){ // todoay is empty, get yesterday
        res = await convertCsv( path + dayjs().subtract(1, 'day').format('MM-DD-YYYY') + '.csv' )
      }
      break
    default:
      res = await convertCsv( raw + 'COVID19Tracking/covid-public-api/master/v1/states/current.csv' )
  }
  return res
}

const recastJH = function( obj ){
	let jhUS = []
	let jhNotUS = []
	let countUS = 0
	let countNotUS = 0
	for ( let i=0, len = obj.length; i < len; i++ ){
		if( obj[i].Country_Region === 'US' ){
			countUS = jhUS.push({
				area: obj[i].Province_State,
				// county: obj[i].Admin2,
				// fips: obj[i].FIPS,
				positive: obj[i].Confirmed,
				deaths: obj[i].Deaths,
			})
		}else{
			countNotUS = jhNotUS.push({
				area: obj[i].Country_Region,
				// county: obj[i].Admin2,
				// fips: obj[i].FIPS,
				positive: obj[i].Confirmed,
				deaths: obj[i].Deaths,
			})
		}
	}
	console.log("JH US count = "+ countUS)
  console.log("JH outside US count = "+ countNotUS)
  jhWorld = jhUS.concat(jhNotUS)


  return {
    jhData: jhWorld,
    jhUpdated: obj[0].Last_Update
  }
}

const recastC19T = function( obj ){
	let c19tUSData = []
  let countC19tUS = 0
  for (let i=0, len = obj.length; i < len; i++) {
    countC19tUS = c19tUSData.push({
      area: getStateName( obj[i].state ),
      positive: obj[i].positive,
      deaths: obj[i].death,
    })
  }
  console.log("US C19T count = "+ countC19tUS)
  return {
    c19tUSData,
  }
}

// reduce & zip population & disease stats
const calcCDR = function( jhWorld ){

  const census = JSON.parse( fs.readFileSync('./resources/census.json', 'utf8') )
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
		tmpArr = jhWorld.filter(areaInAll => {
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

    if ( census[i].region === 'USA' ){
      usJhTotalPositive += sumPostive
      usJhTotalDeaths += sumDeaths
      usTotalPop += pop
    }
  }

  countAreas = worldSumed.push({
    area: 'USA total',
    region: 'USA',
    positive: usJhTotalPositive,
    deaths: usJhTotalDeaths,
    pop: usTotalPop,
    cdr: ( usJhTotalDeaths / usTotalPop ) * 100_000,
  })
  console.log("US sumed +: "+ usJhTotalPositive +"  deaths: "+ usJhTotalDeaths +"  pop: "+ usTotalPop)
	// desending sort Crude Death Rate
	// worldSumed.sort(function( a, b ){
	//   return parseFloat(b.cdr) - parseFloat(a.cdr);
	// })
  console.log("World sumed count = "+ countAreas)
  return worldSumed
}

// COVID19Tracking has more accurate US data IMHO
const mergeC19T = function({ jhCDR, c19t }){
  let found = {}
  let countUS = 0
  let usC19tToalPositive = 0
  let usC19tToalDeaths = 0
  let tObj = {}
  // let tCDR = 0
  // jhDiff = {}
  // let positiveDiff = 0
  // let deathsDiff = 0
  //skip last 'USA Total' entry
  for( let i=0,len = jhCDR.length-1; i < len; i++ ){
    tObj = jhCDR[i]
    found = c19t.find(record => record.area === tObj.area)
    if ( found === undefined ) continue;
    countUS += 1

    // tCDR = ( found.deaths / tObj.pop ) * 100_000,
    // jhDiff = {}
    // positiveDiff = tObj.positive - found.positive
    // if ( positiveDiff ) jhDiff.positive = positiveDiff
    // deathsDiff = tObj.deaths - found.deaths
    // if ( deathsDiff ){
    //   jhDiff.deaths = deathsDiff
    //   jhDiff.cdr = tObj.cdr - tCDR
    // }

    jhCDR[i] = {
      area: tObj.area,
      region: tObj.region,
      positive: found.positive,
      deaths: found.deaths,
      pop: tObj.pop,
      cdr: ( found.deaths / tObj.pop ) * 100_000,
    }
    if ( tObj.region === 'USA' ){
      usC19tToalPositive += found.positive
      usC19tToalDeaths += found.deaths
    }
    // if ( positiveDiff || deathsDiff  ){
    //   jhCDR[i]['jhDiff'] = jhDiff
    // }
  }
  jhCDR.pop() // remoce last 'USA Total' entry
  jhCDR.push({
    area: 'USA total',
    region: 'USA',
    positive: usC19tToalPositive,
    deaths: usC19tToalDeaths,
    pop: usTotalPop,
    cdr: ( usC19tToalDeaths / usTotalPop ) * 100_000,
  })
  console.log("US sumed +: "+ usC19tToalPositive +"  deaths: "+ usC19tToalDeaths +"  pop: "+ usTotalPop)

  console.log('Merged C19T: '+ countUS)
  return jhCDR
}

const main = async function(){
  const jhRaw = await getGithub('jh')
  const { jhData, jhUpdated } = recastJH( jhRaw )
  const jhCDR = calcCDR( jhData )
  let jhCDRSorted = [...jhCDR]
  jhCDRSorted.sort(function( a, b ){
	  return parseFloat(b.cdr) - parseFloat(a.cdr);
	})
  fs.writeFileSync( './covid19-cdr-johns-hopkins-only.json',JSONprettifyMin(jhCDRSorted) )
  // fs.writeFileSync( './covid19-jh.json', JSONprettifyMin(jhCDR) )

  /* merge in #COVID19Tracking US-only data */
  const c19tRaw = await getGithub('c19t')
  const { c19tUSData } = recastC19T( c19tRaw )
  let finalCDR = mergeC19T({ jhCDR, c19t: c19tUSData })
  // desending sort Crude Death Rate
  finalCDR.sort(function( a, b ){
	  return parseFloat(b.cdr) - parseFloat(a.cdr);
	})
  fs.writeFileSync( './covid19-cdr.json', JSONprettifyMin(finalCDR) )
  fs.writeFileSync( './updated.txt', jhUpdated )
}
main()
