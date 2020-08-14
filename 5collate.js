const Papa = require('papaparse')
const fs = require('fs')

let us = JSON.parse( fs.readFileSync('./data/sumed-us.json', 'utf8') )
let world = JSON.parse( fs.readFileSync('./data/sumed-world.json', 'utf8') )

let all = [...us, ...world]

// desending sort Crude Death Rate, positive cases, then area
// https://stackoverflow.com/a/2784265/1324588
all.sort(function mysortfunction(a, b) {

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

console.log("total count = "+ all.length)
fs.writeFileSync( './covid19-cdr.json', JSON.stringify(all) )
fs.writeFileSync( './covid19-cdr.csv', Papa.unparse(all) )
