// Makes chart.htm & README.md

let fs = require('fs')

const css = fs.readFileSync('./resources/chart.css', 'utf8')
const updated = fs.readFileSync('./updated.txt', 'utf8')
let htm = `
<style>
${css}
</style>
<h2>COVID19 Crude Death Rate Chart</h2>
<p><a target='_blank' href='https://github.com/tomByrer/covid19-crude-death-rate-data#sources'>github.com/tomByrer/covid19-crude-death-rate-data</a> | Updated: ${updated} | CDR = ( deaths / population ) * 100_000</p>
<div id='key' class='chartkey'><a onclick='hide()'>Key:</a>
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
</div>
`;


const data = JSON.parse( fs.readFileSync('./covid19-cdr.json', 'utf8') )
const cdrMax = data[0].cdr
let cdrPercent = 0
let areaClass = {
	'USA': ' usa',
	'East Europe': ' euro',
	'South Europe': ' euro',
	'West Europe': ' euro',
	'North Europe': ' euro',
}
let region = ''
for (let i=0, len=data.length; i<len; i++ ){
	cdrPercent = data[i].cdr / cdrMax * 100
	region = (data[i].region === 'United States') ? 'USA' : data[i].region
	htm += `<section>
<div class='ranking'>${i+1}</div>
<div class='data'><p class='datatext'><span class='areaname${areaClass[region]}'>${data[i].area} </span> :
${region}
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
htm += `<script>
function hide() {
  const x = document.getElementById("key");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>`
fs.writeFileSync('./covid19-cdr.html', htm)
console.log('📊 Chart done')
