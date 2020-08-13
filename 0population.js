// import fetch from 'node-fetch'
const Papa = require('papaparse')
let fs = require('fs')

let statesCensus = []
let statesCount = 0
fs.readFile('./srcdata/scprc-est2019-12.csv', 'utf-8', async (err, data) => {
  if (err) {
    console.error(err)
    return
	}

  let arrCensus = await Papa.parse( data, {
		delimiter: ',',
		linebreak: '\n',
		header: true,
		complete: function(res) {
			return res
		}
	}).data

	let area = '' // area = geographic grouping, eg 'state'
	const region = 'United States'
	for( let i=0, len=arrCensus.length; i<len; i++ ){
		area = arrCensus[i].NAME
		if( area === 'United States' ) continue // skip
		if( area === 'Puerto Rico Commonwealth' ) area = 'Puerto Rico'

		statesCount = statesCensus.push({
			area: area,
			pop: parseInt( arrCensus[i].POPESTIMATE2019 ),
			region: region,
		})
	}

	console.log(statesCount)
	fs.writeFileSync( './data/census-us.json', JSON.stringify(statesCensus) )
})


let worldCensus = []
let worldCount = 0
fs.readFile('./srcdata/world-population-un.csv', 'utf-8', async (err, data) => {
  if (err) {
    console.error(err)
    return
	}

  arrCensus = await Papa.parse( data, {
		delimiter: ',',
		linebreak: '\n',
		header: true,
		complete: function(res) {
			return res
		}
	}).data

	let area = '' // area = geographic grouping, eg 'state'
	let region = ''
	for( let i=0, len=arrCensus.length; i<len; i++ ){
		area = arrCensus[i].NAME
		if( arrCensus[i].Type === 'Subregion' || area === 'NORTHERN AMERICA' ){
			region = area
		}
		if( arrCensus[i].Type !== 'Country/Area' ) continue // skip

		worldCount = worldCensus.push({
			area: area,
			pop: Math.round( parseFloat( arrCensus[i][2020] ) ), // I *1000 in my spreadsheet
			region: region,
		})
	}

	console.log(worldCount)
	fs.writeFileSync( './data/census-world.json', JSON.stringify(worldCensus) )
})
