// import fetch from 'node-fetch'
const Papa = require('papaparse')
let fs = require('fs')
const GithubContent = require('github-content')

// World data from Johns Hopkins
const csse = new GithubContent({
  owner: 'CSSEGISandData',
  repo: 'COVID-19',
  branch: 'master' // defaults to master
})
csse.file('csse_covid_19_data/csse_covid_19_daily_reports/08-13-2020.csv', function(err, file) {
  if (err) return console.log(err);
  console.log(file.path);
	let csv = file.contents.toString()

	let json = Papa.parse(csv, {
		delimiter: ',',
		dynamicTyping: true,
		header: true,
		linebreak: '\n',

	})
	// console.log(wo rldJSON)
	fs.writeFileSync( './data/covid-csse.json', JSON.stringify(json.data, null, 1) )
})

/*
"FIPS": 36061,
"Admin2": "New York City",
"Province_State": "New York",
"Country_Region": "US",
"Last_Update": "2020-08-14 04:51:19",
"Lat": 40.76727260000001,
"Long_": -73.97152637,
"Confirmed": 229167,
"Deaths": 23610,
"Recovered": 0,
"Active": 205557,
"Combined_Key": "New York City, New York, US",
"Incidence_Rate": 2748.854868710684,
"Case-Fatality_Ratio": 10.30253046904659
*/


// US data from COVID19Tracking
const c19t = new GithubContent({
  owner: 'COVID19Tracking',
  repo: 'covid-public-api',
  branch: 'master' // defaults to master
})
c19t.file('v1/states/current.csv', function(err, file) {
  if (err) return console.log(err);
  console.log(file.path);
	let csv = file.contents.toString()

	let json = Papa.parse(csv, {
		delimiter: ',',
		dynamicTyping: true,
		header: true,
		linebreak: '\n',
	})
	// console.log(wo rldJSON)
	fs.writeFileSync( './data/covid-c19t.json', JSON.stringify(json.data, null, 1) )
})

/*
"date": 20200814,
"state": "NY",
"positive": 424167,
"negative": 6477669,
"pending": null,
"hospitalizedCurrently": 554,
"hospitalizedCumulative": 89995,
"inIcuCurrently": 127,
"inIcuCumulative": null,
"onVentilatorCurrently": 59,
"onVentilatorCumulative": null,
"recovered": 73997,
"dataQualityGrade": "A",
"lastUpdateEt": "8/13/2020 23:59",
"dateModified": "2020-08-13T23:59:00.000Z",
"checkTimeEt": "08/13 19:59",
"death": 25232,
"hospitalized": 89995,
"dateChecked": "2020-08-13T23:59:00.000Z",
"totalTestsViral": null,
"positiveTestsViral": null,
"negativeTestsViral": null,
"positiveCasesViral": 424167,
"deathConfirmed": null,
"deathProbable": null,
"totalTestEncountersViral": null,
"totalTestsPeopleViral": 6901836,
"totalTestsAntibody": null,
"positiveTestsAntibody": null,
"negativeTestsAntibody": null,
"totalTestsPeopleAntibody": null,
"positiveTestsPeopleAntibody": null,
"negativeTestsPeopleAntibody": null,
"totalTestsPeopleAntigen": null,
"positiveTestsPeopleAntigen": null,
"totalTestsAntigen": null,
"positiveTestsAntigen": null,
"fips": 36,
"positiveIncrease": 727,
"negativeIncrease": 84728,
"total": 6901836,
"totalTestResults": 6901836,
"totalTestResultsIncrease": 85455,
"posNeg": 6901836,
"deathIncrease": 4,
"hospitalizedIncrease": 0,
"hash": "a683888b5fe695bfaf533d7ece1c6c6fecbe28c7",
"commercialScore": 0,
"negativeRegularScore": 0,
"negativeScore": 0,
"positiveScore": 0,
"score": 0,
"grade": null
*/