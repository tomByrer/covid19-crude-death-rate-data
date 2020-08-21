// Makes chart.htm & README.md

let fs = require('fs')

const css = fs.readFileSync('./resources/chart.css', 'utf8')
let htm = `
<style>
${css}
</style>
<h2>COVID19 Crude Death Rate Chart</h2>
<p>CDR = ( deaths / population ) * 100_000 | Sources for
<a target='_blank' href='https://github.com/tomByrer/covid19-crude-death-rate-data#sources'>data & code</a></p>
<p class='chartkey'>Key:
<section class='chartkey'>
<div class='ranking'>Rank</div>
<div class='data'><p class='datatext'><span class='areaname'>US State or Country</span> :
Region</p>
<svg width='100%'>
	<rect class='bg' fill='#4442' width='100%'></rect>
</svg>
<p class='cdrnum'><span class='areaname'>CDR</span> :
Deaths / Population</p>
</div></section>
</p>
`;


const data = JSON.parse( fs.readFileSync('./covid19-cdr.json', 'utf8') )
const cdrMax = data[0].cdr
let cdrPercent = 0
for (let i=0, len=data.length; i<len; i++ ){
	cdrPercent = data[i].cdr / cdrMax * 100
	htm += `<section>
<div class='ranking'>${i+1}</div>
<div class='data'><p class='datatext'><span class='areaname'>${data[i].area} </span> :
${( data[i].region === 'United States') ? 'USA' : data[i].region}
</p>
<svg width='100%'>
	<rect class='bg' fill='#4442' width='100%'></rect>
	<rect class='cdrC19T' width='${cdrPercent}%'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>${Math.round(data[i].cdr)}</span> :
${data[i].deaths} / ${data[i].pop}</p>
</div></section>
`
}

fs.writeFileSync('./covid19-cdr.html', htm)
