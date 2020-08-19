// Makes chart.htm & README.md

let fs = require('fs')

const readme = fs.readFileSync('./resources/readme.md', 'utf8')
const css = fs.readFileSync('./resources/chart.css', 'utf8')
let htm = `
<style>
${css}
</style>
<h2>COVID19 Crude Death Rate Chart</h2>

<p class='chartkey' style='
	opacity: 0.61;
	margin: 0;
'>Key:
<section class='chartkey' style='
	opacity: 0.61;
	display: flex;
	margin: 0.13rem 0 0.13rem 0;
'>
<div class='ranking' style='
	height: 3rem;
	width: 3rem;
	margin: auto;
	border-radius: 50%;
	border: 4px double #4442;
	font-size: 1.1rem;
	line-height: 3rem;
	text-align: center;
'>Rank</div>
<div class='data' style='
	flex-grow: 1;
'><p class='datatext'><span class='areaname'>US State or Country</span> :
Region</p>
<svg width='100%' height='.3em' style='
	min-width: 300px;
	overflow: visible;
	padding: 0 1px;
	box-sizing: border-box;
	width: 100%;
'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
</svg>
<p class='cdrnum'><span class='areaname' style='
	margin: 0;
'>CDR</span> :
Deaths / Population</p>
</div></section></p>
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
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='${cdrPercent}%' height='.3em'></rect>
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
fs.writeFileSync('./README.md', readme + htm)
