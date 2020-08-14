// import fetch from 'node-fetch'
const Papa = require('papaparse')
let fs = require('fs')
const GithubContent = require('github-content')
var gc = new GithubContent({
  owner: 'CSSEGISandData',
  repo: 'COVID-19',
  branch: 'master' // defaults to master
})

let worldCSV = ''
gc.file('csse_covid_19_data/csse_covid_19_daily_reports/08-13-2020.csv', function(err, file) {
  if (err) return console.log(err);
  console.log(file.path);
	worldCSV = file.contents.toString()

	let worldJSON = Papa.parse(worldCSV, {
		delimiter: ',',
		linebreak: '\n',
		header: true,
	})
	// console.log(wo rldJSON)
	fs.writeFileSync( './data/csse.json', JSON.stringify(worldJSON) )
})

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
