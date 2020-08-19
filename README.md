# COVID-19 Crude Death Rate Data

To help research which countries have the most deaths via population ratio, expressed in 'per 100,000 people'.
Final output is sorted by CDR and positive tests, then a chart is [annxed below](#ranking)

## Instructions

You can view the [`covid19-cdr.csv`](https://github.com/tomByrer/covid19-crude-death-rate-data/blob/master/covid19-cdr.csv#L1), `covid19-cdr.json`, & [`covid19-cdr.html` chart](https://raw.githack.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr.html)  files directly for now.  If you want to download a single file, I find the "Raw" button helps.


1. Install [NodeJS](https://nodejs.org).  Might need to reboot, add to path, etc.
2. In a CLI, run `node 1collect`; the output will be in `/data`
3. etc for other JS scripts that start with a number; expected to be in order.

### Warnings

* I use [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data, but also list Johns Hopkins
* BETA: API, CSV headers, & code likely to change drastcily.
* BETA: some of the smaller countries & territories might not have the correct data
* Right now, needs to be ran manually & uploaded; not automated
* Might use [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data

### Design Decisions

* split US & World data, incase they are sources & updated differently
* `world` = 'not US'

## Sources

US Census data:
https://www2.census.gov/programs-surveys/popest/datasets/2010-2019/state/detail/SCPRC-EST2019-18+POP-RES.csv

World Population COVID19 Estimates:
https://population.un.org/wpp/Download/Standard/CSV/

COVID-19 deaths:
Center for Systems Science and Engineering (CSSE) at Johns Hopkins University
https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data

US COVID19Tracking data (more transparent in adjustments, and tends to be lower than Johns Hopkins')
https://github.com/COVID19Tracking/covid-public-api/blob/master/v1/states/current.csv


## Changelog

+ 0.4.0 created chart script to merge with README
+ 0.3.0 merged scripts into 1 file; no need for intermediate data files
+ 0.2.0 + COVID19Tracking data, staging files now have number fields early as possile
+ 0.1.1 changed 'confirmed' to 'positive', so help specify that info is for tests & not deaths
+ 0.1.0 intal release

## TODO

-[ ] Clean up non-matching cencus-covid countries & territories like Virgin Islands
-[ ] US totals
-[ ] Date of import
-[ ] Compare [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data

### Maybe

-[ ] Other countries' states/regions

## License

* code (c)2020 Tom Byrer, released GPL3
* data varous open source licenses, as found in Sources above

## Ranking

(Github doesn't like how I attached the HTML here.  You can view a better rendered [COVID-19 chart here](https://raw.githack.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr.html).)
<style>
section {
	display: flex;
	margin: 0.13rem 0 0.13rem 0;
}

.ranking {
	height: 3rem;
	width: 3rem;
	margin: auto;
	border-radius: 50%;
	border: 4px double #4442;
	font-size: 1.1rem;
	line-height: 3rem;
	text-align: center;
}
.data {
	flex-grow: 1;
}


svg {
min-width: 300px;
overflow: visible;
padding: 0 1px;
box-sizing: border-box;
width: 100%;
}

line {
stroke-width: 4px;
vector-effect: non-scaling-stroke;
shape-rendering: crispEdges;
}
.markers line {
stroke: #fffb;
}

svg rect {
	height: 0.4rem
}
svg .cdrC19T {
fill: #f1f9;
}
svg .rating {
transform:translate(0,1.35rem)
}

.datatext {
	margin: 0.3rem 0 1px 0;
	font-size: 1.1rem;
}

.areaname {
	font-size: 1.3rem;
}

.chartkey {
	opacity: 0.61;
}
p.chartkey {
	margin: 0;
}

.cdrnum {
	margin: 0;
}
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
<section>
<div class='ranking'>1</div>
<div class='data'><p class='datatext'><span class='areaname'>New Jersey </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='100%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>179</span> :
15925 / 8882190</p>
</div></section>
<section>
<div class='ranking'>2</div>
<div class='data'><p class='datatext'><span class='areaname'>New York </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='72.43419192904548%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>130</span> :
25264 / 19453561</p>
</div></section>
<section>
<div class='ranking'>3</div>
<div class='data'><p class='datatext'><span class='areaname'>Massachusetts </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='71.5264693331869%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>128</span> :
8839 / 6892503</p>
</div></section>
<section>
<div class='ranking'>4</div>
<div class='data'><p class='datatext'><span class='areaname'>Connecticut </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='69.70939354943543%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>125</span> :
4456 / 3565287</p>
</div></section>
<section>
<div class='ranking'>5</div>
<div class='data'><p class='datatext'><span class='areaname'>San Marino </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='68.89869424692954%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>124</span> :
42 / 34000</p>
</div></section>
<section>
<div class='ranking'>6</div>
<div class='data'><p class='datatext'><span class='areaname'>Louisiana </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='54.6378173944918%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>98</span> :
4554 / 4648794</p>
</div></section>
<section>
<div class='ranking'>7</div>
<div class='data'><p class='datatext'><span class='areaname'>Rhode Island </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='53.91338423870838%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>97</span> :
1024 / 1059361</p>
</div></section>
<section>
<div class='ranking'>8</div>
<div class='data'><p class='datatext'><span class='areaname'>Belgium </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='47.854005772854045%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>86</span> :
9944 / 11590000</p>
</div></section>
<section>
<div class='ranking'>9</div>
<div class='data'><p class='datatext'><span class='areaname'>District of Columbia </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='47.33879173666042%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>85</span> :
599 / 705749</p>
</div></section>
<section>
<div class='ranking'>10</div>
<div class='data'><p class='datatext'><span class='areaname'>Peru </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='44.456699074482295%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>80</span> :
26281 / 32972000</p>
</div></section>
<section>
<div class='ranking'>11</div>
<div class='data'><p class='datatext'><span class='areaname'>Mississippi </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='39.880222380009855%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>72</span> :
2128 / 2976149</p>
</div></section>
<section>
<div class='ranking'>12</div>
<div class='data'><p class='datatext'><span class='areaname'>Andorra </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='38.39067626251299%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>69</span> :
53 / 77000</p>
</div></section>
<section>
<div class='ranking'>13</div>
<div class='data'><p class='datatext'><span class='areaname'>Michigan </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='36.90471203885684%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>66</span> :
6608 / 9986857</p>
</div></section>
<section>
<div class='ranking'>14</div>
<div class='data'><p class='datatext'><span class='areaname'>Illinois </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='35.18126097029454%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>63</span> :
7993 / 12671821</p>
</div></section>
<section>
<div class='ranking'>15</div>
<div class='data'><p class='datatext'><span class='areaname'>Arizona </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='34.704684814735806%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>62</span> :
4529 / 7278717</p>
</div></section>
<section>
<div class='ranking'>16</div>
<div class='data'><p class='datatext'><span class='areaname'>Spain </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='34.172483637358106%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>61</span> :
28646 / 46755000</p>
</div></section>
<section>
<div class='ranking'>17</div>
<div class='data'><p class='datatext'><span class='areaname'>United Kingdom </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='34.05860385850487%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>61</span> :
41454 / 67886000</p>
</div></section>
<section>
<div class='ranking'>18</div>
<div class='data'><p class='datatext'><span class='areaname'>Delaware </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='33.96578034177523%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>61</span> :
593 / 973764</p>
</div></section>
<section>
<div class='ranking'>19</div>
<div class='data'><p class='datatext'><span class='areaname'>Maryland </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='33.6735052216898%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>60</span> :
3650 / 6045680</p>
</div></section>
<section>
<div class='ranking'>20</div>
<div class='data'><p class='datatext'><span class='areaname'>Pennsylvania </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='32.67130800155284%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>59</span> :
7499 / 12801989</p>
</div></section>
<section>
<div class='ranking'>21</div>
<div class='data'><p class='datatext'><span class='areaname'>Italy </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='32.6558784642398%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>59</span> :
35400 / 60462000</p>
</div></section>
<section>
<div class='ranking'>22</div>
<div class='data'><p class='datatext'><span class='areaname'>Sweden </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='31.960659194539204%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>57</span> :
5787 / 10099000</p>
</div></section>
<section>
<div class='ranking'>23</div>
<div class='data'><p class='datatext'><span class='areaname'>Chile </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='30.67398921498195%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>55</span> :
10513 / 19116000</p>
</div></section>
<section>
<div class='ranking'>24</div>
<div class='data'><p class='datatext'><span class='areaname'>Brazil </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='28.479668622950545%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>51</span> :
108536 / 212559000</p>
</div></section>
<section>
<div class='ranking'>25</div>
<div class='data'><p class='datatext'><span class='areaname'>Indiana </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='26.221413375179885%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>47</span> :
3165 / 6732219</p>
</div></section>
<section>
<div class='ranking'>26</div>
<div class='data'><p class='datatext'><span class='areaname'>France </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='26.00515382927054%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>47</span> :
30434 / 65274000</p>
</div></section>
<section>
<div class='ranking'>27</div>
<div class='data'><p class='datatext'><span class='areaname'>Florida </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='25.690946634742794%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>46</span> :
9893 / 21477737</p>
</div></section>
<section>
<div class='ranking'>28</div>
<div class='data'><p class='datatext'><span class='areaname'>South Carolina </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='25.381316119949936%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>46</span> :
2343 / 5148714</p>
</div></section>
<section>
<div class='ranking'>29</div>
<div class='data'><p class='datatext'><span class='areaname'>Georgia </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='25.1836994439919%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>45</span> :
4794 / 10617423</p>
</div></section>
<section>
<div class='ranking'>30</div>
<div class='data'><p class='datatext'><span class='areaname'>Mexico </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='24.667582651722498%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>44</span> :
57023 / 128933000</p>
</div></section>
<section>
<div class='ranking'>31</div>
<div class='data'><p class='datatext'><span class='areaname'>Panama </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='23.111457378244996%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>41</span> :
1788 / 4315000</p>
</div></section>
<section>
<div class='ranking'>32</div>
<div class='data'><p class='datatext'><span class='areaname'>Alabama </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='22.022554387800945%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>39</span> :
1936 / 4903185</p>
</div></section>
<section>
<div class='ranking'>33</div>
<div class='data'><p class='datatext'><span class='areaname'>Netherlands </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='20.161726087826885%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>36</span> :
6194 / 17135000</p>
</div></section>
<section>
<div class='ranking'>34</div>
<div class='data'><p class='datatext'><span class='areaname'>Ireland </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='20.03748212211326%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>36</span> :
1774 / 4938000</p>
</div></section>
<section>
<div class='ranking'>35</div>
<div class='data'><p class='datatext'><span class='areaname'>Nevada </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='19.954897430086536%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>36</span> :
1102 / 3080156</p>
</div></section>
<section>
<div class='ranking'>36</div>
<div class='data'><p class='datatext'><span class='areaname'>Texas </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='19.716425161884317%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>35</span> :
10250 / 28995881</p>
</div></section>
<section>
<div class='ranking'>37</div>
<div class='data'><p class='datatext'><span class='areaname'>Ecuador </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='19.230297381584577%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>34</span> :
6083 / 17643000</p>
</div></section>
<section>
<div class='ranking'>38</div>
<div class='data'><p class='datatext'><span class='areaname'>New Mexico </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='19.098622638506637%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>34</span> :
718 / 2096829</p>
</div></section>
<section>
<div class='ranking'>39</div>
<div class='data'><p class='datatext'><span class='areaname'>Ohio </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='18.470672809579998%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>33</span> :
3871 / 11689100</p>
</div></section>
<section>
<div class='ranking'>40</div>
<div class='data'><p class='datatext'><span class='areaname'>Iowa </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='17.48348118113788%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>31</span> :
989 / 3155070</p>
</div></section>
<section>
<div class='ranking'>41</div>
<div class='data'><p class='datatext'><span class='areaname'>Minnesota </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='17.47537087259051%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>31</span> :
1767 / 5639632</p>
</div></section>
<section>
<div class='ranking'>42</div>
<div class='data'><p class='datatext'><span class='areaname'>New Hampshire </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='17.392413959810582%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>31</span> :
424 / 1359711</p>
</div></section>
<section>
<div class='ranking'>43</div>
<div class='data'><p class='datatext'><span class='areaname'>Colorado </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='17.220478114076986%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>31</span> :
1778 / 5758736</p>
</div></section>
<section>
<div class='ranking'>44</div>
<div class='data'><p class='datatext'><span class='areaname'>Colombia </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='16.849937134382625%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>30</span> :
15372 / 50883000</p>
</div></section>
<section>
<div class='ranking'>45</div>
<div class='data'><p class='datatext'><span class='areaname'>California </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='16.010275186331306%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>29</span> :
11342 / 39512223</p>
</div></section>
<section>
<div class='ranking'>46</div>
<div class='data'><p class='datatext'><span class='areaname'>Virginia </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='15.656601516255241%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>28</span> :
2396 / 8535519</p>
</div></section>
<section>
<div class='ranking'>47</div>
<div class='data'><p class='datatext'><span class='areaname'>Armenia </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='15.51087072322114%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>28</span> :
824 / 2963000</p>
</div></section>
<section>
<div class='ranking'>48</div>
<div class='data'><p class='datatext'><span class='areaname'>North Macedonia </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='14.646662501479044%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>26</span> :
547 / 2083000</p>
</div></section>
<section>
<div class='ranking'>49</div>
<div class='data'><p class='datatext'><span class='areaname'>Canada </span> :
NORTHERN AMERICA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='13.411036403734949%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>24</span> :
9075 / 37742000</p>
</div></section>
<section>
<div class='ranking'>50</div>
<div class='data'><p class='datatext'><span class='areaname'>Washington </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='13.074197258820734%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>23</span> :
1785 / 7614893</p>
</div></section>
<section>
<div class='ranking'>51</div>
<div class='data'><p class='datatext'><span class='areaname'>Switzerland </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='12.830536184291075%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>23</span> :
1991 / 8655000</p>
</div></section>
<section>
<div class='ranking'>52</div>
<div class='data'><p class='datatext'><span class='areaname'>Kyrgyzstan </span> :
Central Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='12.78963820098619%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>23</span> :
1496 / 6524000</p>
</div></section>
<section>
<div class='ranking'>53</div>
<div class='data'><p class='datatext'><span class='areaname'>North Carolina </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='12.74181439788482%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>23</span> :
2396 / 10488084</p>
</div></section>
<section>
<div class='ranking'>54</div>
<div class='data'><p class='datatext'><span class='areaname'>Missouri </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='12.740962025145192%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>23</span> :
1402 / 6137428</p>
</div></section>
<section>
<div class='ranking'>55</div>
<div class='data'><p class='datatext'><span class='areaname'>Tennessee </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='11.646407059268745%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>21</span> :
1426 / 6829174</p>
</div></section>
<section>
<div class='ranking'>56</div>
<div class='data'><p class='datatext'><span class='areaname'>Arkansas </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='11.440374390820669%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>21</span> :
619 / 3017804</p>
</div></section>
<section>
<div class='ranking'>57</div>
<div class='data'><p class='datatext'><span class='areaname'>South Africa </span> :
Southern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='11.268064692609943%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>20</span> :
11982 / 59309000</p>
</div></section>
<section>
<div class='ranking'>58</div>
<div class='data'><p class='datatext'><span class='areaname'>Luxembourg </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='11.048109498899093%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>20</span> :
124 / 626000</p>
</div></section>
<section>
<div class='ranking'>59</div>
<div class='data'><p class='datatext'><span class='areaname'>Nebraska </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='10.43761104407787%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>19</span> :
362 / 1934408</p>
</div></section>
<section>
<div class='ranking'>60</div>
<div class='data'><p class='datatext'><span class='areaname'>Kentucky </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='10.361850733823218%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>19</span> :
830 / 4467673</p>
</div></section>
<section>
<div class='ranking'>61</div>
<div class='data'><p class='datatext'><span class='areaname'>Wisconsin </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='10.144531704581283%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>18</span> :
1059 / 5822434</p>
</div></section>
<section>
<div class='ranking'>62</div>
<div class='data'><p class='datatext'><span class='areaname'>Portugal </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='9.730701420632073%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>17</span> :
1779 / 10197000</p>
</div></section>
<section>
<div class='ranking'>63</div>
<div class='data'><p class='datatext'><span class='areaname'>South Dakota </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='9.709244521844631%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>17</span> :
154 / 884659</p>
</div></section>
<section>
<div class='ranking'>64</div>
<div class='data'><p class='datatext'><span class='areaname'>Oklahoma </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='9.613070453311277%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>17</span> :
682 / 3956971</p>
</div></section>
<section>
<div class='ranking'>65</div>
<div class='data'><p class='datatext'><span class='areaname'>Honduras </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='8.913885535824239%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>16</span> :
1583 / 9905000</p>
</div></section>
<section>
<div class='ranking'>66</div>
<div class='data'><p class='datatext'><span class='areaname'>Romania </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='8.781727787902769%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>16</span> :
3029 / 19238000</p>
</div></section>
<section>
<div class='ranking'>67</div>
<div class='data'><p class='datatext'><span class='areaname'>Idaho </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='8.52045752592739%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>15</span> :
273 / 1787065</p>
</div></section>
<section>
<div class='ranking'>68</div>
<div class='data'><p class='datatext'><span class='areaname'>Bosnia and Herzegovina </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='8.261723514435666%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>15</span> :
486 / 3281000</p>
</div></section>
<section>
<div class='ranking'>69</div>
<div class='data'><p class='datatext'><span class='areaname'>Iraq </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='8.256100850006113%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>15</span> :
5954 / 40223000</p>
</div></section>
<section>
<div class='ranking'>70</div>
<div class='data'><p class='datatext'><span class='areaname'>North Dakota </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='7.977683633012765%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>14</span> :
109 / 762062</p>
</div></section>
<section>
<div class='ranking'>71</div>
<div class='data'><p class='datatext'><span class='areaname'>Kansas </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='7.7536884257536896%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>14</span> :
405 / 2913314</p>
</div></section>
<section>
<div class='ranking'>72</div>
<div class='data'><p class='datatext'><span class='areaname'>Dominican Republic </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='7.614580809519178%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>14</span> :
1481 / 10848000</p>
</div></section>
<section>
<div class='ranking'>73</div>
<div class='data'><p class='datatext'><span class='areaname'>Guatemala </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='7.437307087707048%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>13</span> :
2389 / 17916000</p>
</div></section>
<section>
<div class='ranking'>74</div>
<div class='data'><p class='datatext'><span class='areaname'>Argentina </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='7.174896579530871%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>13</span> :
5814 / 45196000</p>
</div></section>
<section>
<div class='ranking'>75</div>
<div class='data'><p class='datatext'><span class='areaname'>Montenegro </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='7.105112539871411%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>13</span> :
80 / 628000</p>
</div></section>
<section>
<div class='ranking'>76</div>
<div class='data'><p class='datatext'><span class='areaname'>Kuwait </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='6.555634976790277%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>12</span> :
502 / 4271000</p>
</div></section>
<section>
<div class='ranking'>77</div>
<div class='data'><p class='datatext'><span class='areaname'>Oman </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='6.421730656263651%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>12</span> :
588 / 5107000</p>
</div></section>
<section>
<div class='ranking'>78</div>
<div class='data'><p class='datatext'><span class='areaname'>Utah </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='6.419617549143976%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>12</span> :
369 / 3205958</p>
</div></section>
<section>
<div class='ranking'>79</div>
<div class='data'><p class='datatext'><span class='areaname'>Germany </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='6.148418939574155%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>11</span> :
9236 / 83784000</p>
</div></section>
<section>
<div class='ranking'>80</div>
<div class='data'><p class='datatext'><span class='areaname'>Puerto Rico </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='6.04259398976381%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>11</span> :
346 / 3193694</p>
</div></section>
<section>
<div class='ranking'>81</div>
<div class='data'><p class='datatext'><span class='areaname'>Denmark </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.980034161773507%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>11</span> :
621 / 5792000</p>
</div></section>
<section>
<div class='ranking'>82</div>
<div class='data'><p class='datatext'><span class='areaname'>Monaco </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.720526506460572%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>10</span> :
4 / 39000</p>
</div></section>
<section>
<div class='ranking'>83</div>
<div class='data'><p class='datatext'><span class='areaname'>Bahrain </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.669270320077773%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>10</span> :
173 / 1702000</p>
</div></section>
<section>
<div class='ranking'>84</div>
<div class='data'><p class='datatext'><span class='areaname'>Saudi Arabia </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.504778494080991%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>10</span> :
3436 / 34814000</p>
</div></section>
<section>
<div class='ranking'>85</div>
<div class='data'><p class='datatext'><span class='areaname'>El Salvador </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.314374416385782%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>10</span> :
618 / 6486000</p>
</div></section>
<section>
<div class='ranking'>86</div>
<div class='data'><p class='datatext'><span class='areaname'>Maine </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.269586900447849%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>9</span> :
127 / 1344212</p>
</div></section>
<section>
<div class='ranking'>87</div>
<div class='data'><p class='datatext'><span class='areaname'>Oregon </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.249907231029877%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>9</span> :
397 / 4217737</p>
</div></section>
<section>
<div class='ranking'>88</div>
<div class='data'><p class='datatext'><span class='areaname'>Vermont </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.184318536710509%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>9</span> :
58 / 623989</p>
</div></section>
<section>
<div class='ranking'>89</div>
<div class='data'><p class='datatext'><span class='areaname'>West Virginia </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='5.104002006437225%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>9</span> :
164 / 1792147</p>
</div></section>
<section>
<div class='ranking'>90</div>
<div class='data'><p class='datatext'><span class='areaname'>Suriname </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.560828628660217%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>8</span> :
48 / 587000</p>
</div></section>
<section>
<div class='ranking'>91</div>
<div class='data'><p class='datatext'><span class='areaname'>Austria </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.514775957838677%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>8</span> :
729 / 9006000</p>
</div></section>
<section>
<div class='ranking'>92</div>
<div class='data'><p class='datatext'><span class='areaname'>Israel </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.458917784090744%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>8</span> :
692 / 8656000</p>
</div></section>
<section>
<div class='ranking'>93</div>
<div class='data'><p class='datatext'><span class='areaname'>Albania </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.457359517282082%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>8</span> :
230 / 2878000</p>
</div></section>
<section>
<div class='ranking'>94</div>
<div class='data'><p class='datatext'><span class='areaname'>Montana </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.383614940419066%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>8</span> :
84 / 1068778</p>
</div></section>
<section>
<div class='ranking'>95</div>
<div class='data'><p class='datatext'><span class='areaname'>Serbia </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.321822746654415%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>8</span> :
677 / 8737000</p>
</div></section>
<section>
<div class='ranking'>96</div>
<div class='data'><p class='datatext'><span class='areaname'>Bulgaria </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='4.11008467476269%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>7</span> :
512 / 6948000</p>
</div></section>
<section>
<div class='ranking'>97</div>
<div class='data'><p class='datatext'><span class='areaname'>Turkey </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.965279409219833%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>7</span> :
5996 / 84339000</p>
</div></section>
<section>
<div class='ranking'>98</div>
<div class='data'><p class='datatext'><span class='areaname'>Sao Tome and Principe </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.8202146190404505%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>7</span> :
15 / 219000</p>
</div></section>
<section>
<div class='ranking'>99</div>
<div class='data'><p class='datatext'><span class='areaname'>Kazakhstan </span> :
Central Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.76943304749481%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>7</span> :
1269 / 18777000</p>
</div></section>
<section>
<div class='ranking'>100</div>
<div class='data'><p class='datatext'><span class='areaname'>Qatar </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.7364112299660475%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>7</span> :
193 / 2881000</p>
</div></section>
<section>
<div class='ranking'>101</div>
<div class='data'><p class='datatext'><span class='areaname'>Belarus </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.618388908613422%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
613 / 9449000</p>
</div></section>
<section>
<div class='ranking'>102</div>
<div class='data'><p class='datatext'><span class='areaname'>Cabo Verde </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.611339575121692%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
36 / 556000</p>
</div></section>
<section>
<div class='ranking'>103</div>
<div class='data'><p class='datatext'><span class='areaname'>Hungary </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.510484589057792%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
608 / 9660000</p>
</div></section>
<section>
<div class='ranking'>104</div>
<div class='data'><p class='datatext'><span class='areaname'>Eswatini </span> :
Southern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.5099868456666488%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
73 / 1160000</p>
</div></section>
<section>
<div class='ranking'>105</div>
<div class='data'><p class='datatext'><span class='areaname'>Slovenia </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.4607947154885923%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
129 / 2079000</p>
</div></section>
<section>
<div class='ranking'>106</div>
<div class='data'><p class='datatext'><span class='areaname'>Finland </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.362009487148322%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
334 / 5541000</p>
</div></section>
<section>
<div class='ranking'>107</div>
<div class='data'><p class='datatext'><span class='areaname'>Djibouti </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.3307012883010563%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
59 / 988000</p>
</div></section>
<section>
<div class='ranking'>108</div>
<div class='data'><p class='datatext'><span class='areaname'>Costa Rica </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.3285513476931956%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
304 / 5094000</p>
</div></section>
<section>
<div class='ranking'>109</div>
<div class='data'><p class='datatext'><span class='areaname'>Equatorial Guinea </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.299598057985188%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
83 / 1403000</p>
</div></section>
<section>
<div class='ranking'>110</div>
<div class='data'><p class='datatext'><span class='areaname'>Wyoming </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='3.276587555254743%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>6</span> :
34 / 578759</p>
</div></section>
<section>
<div class='ranking'>111</div>
<div class='data'><p class='datatext'><span class='areaname'>Egypt </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.8194418792847467%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
5173 / 102334000</p>
</div></section>
<section>
<div class='ranking'>112</div>
<div class='data'><p class='datatext'><span class='areaname'>Azerbaijan </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.794532773103779%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
508 / 10139000</p>
</div></section>
<section>
<div class='ranking'>113</div>
<div class='data'><p class='datatext'><span class='areaname'>Poland </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.777924975047223%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
1885 / 37847000</p>
</div></section>
<section>
<div class='ranking'>114</div>
<div class='data'><p class='datatext'><span class='areaname'>Ukraine </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.706243041007363%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
2122 / 43734000</p>
</div></section>
<section>
<div class='ranking'>115</div>
<div class='data'><p class='datatext'><span class='areaname'>Bahamas </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.6965077234651935%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
19 / 393000</p>
</div></section>
<section>
<div class='ranking'>116</div>
<div class='data'><p class='datatext'><span class='areaname'>Norway </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.6853550686802325%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
261 / 5421000</p>
</div></section>
<section>
<div class='ranking'>117</div>
<div class='data'><p class='datatext'><span class='areaname'>Estonia </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.6479528308917906%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>5</span> :
63 / 1327000</p>
</div></section>
<section>
<div class='ranking'>118</div>
<div class='data'><p class='datatext'><span class='areaname'>Maldives </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.371216393851725%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
23 / 541000</p>
</div></section>
<section>
<div class='ranking'>119</div>
<div class='data'><p class='datatext'><span class='areaname'>Croatia </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.2554621560795214%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
166 / 4105000</p>
</div></section>
<section>
<div class='ranking'>120</div>
<div class='data'><p class='datatext'><span class='areaname'>Alaska </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.2110449387279343%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
29 / 731545</p>
</div></section>
<section>
<div class='ranking'>121</div>
<div class='data'><p class='datatext'><span class='areaname'>India </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.09346102379964%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
51797 / 1380004000</p>
</div></section>
<section>
<div class='ranking'>122</div>
<div class='data'><p class='datatext'><span class='areaname'>Czechia </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.0780911608701316%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
399 / 10709000</p>
</div></section>
<section>
<div class='ranking'>123</div>
<div class='data'><p class='datatext'><span class='areaname'>United Arab Emirates </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='2.052795608840098%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
364 / 9890000</p>
</div></section>
<section>
<div class='ranking'>124</div>
<div class='data'><p class='datatext'><span class='areaname'>Afghanistan </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.970068035276332%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>4</span> :
1375 / 38928000</p>
</div></section>
<section>
<div class='ranking'>125</div>
<div class='data'><p class='datatext'><span class='areaname'>Mauritania </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.883160419304198%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
157 / 4650000</p>
</div></section>
<section>
<div class='ranking'>126</div>
<div class='data'><p class='datatext'><span class='areaname'>Algeria </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.753983010900299%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
1379 / 43851000</p>
</div></section>
<section>
<div class='ranking'>127</div>
<div class='data'><p class='datatext'><span class='areaname'>Antigua and Barbuda </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.7074020440201196%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
3 / 98000</p>
</div></section>
<section>
<div class='ranking'>128</div>
<div class='data'><p class='datatext'><span class='areaname'>Lithuania </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.6597302749732687%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
81 / 2722000</p>
</div></section>
<section>
<div class='ranking'>129</div>
<div class='data'><p class='datatext'><span class='areaname'>Iceland </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.635634411671278%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
10 / 341000</p>
</div></section>
<section>
<div class='ranking'>130</div>
<div class='data'><p class='datatext'><span class='areaname'>Guyana </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.6300229594330158%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
23 / 787000</p>
</div></section>
<section>
<div class='ranking'>131</div>
<div class='data'><p class='datatext'><span class='areaname'>Hawaii </span> :
USA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.5757111783548394%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
40 / 1415872</p>
</div></section>
<section>
<div class='ranking'>132</div>
<div class='data'><p class='datatext'><span class='areaname'>Pakistan </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.5591848006247027%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
6175 / 220892000</p>
</div></section>
<section>
<div class='ranking'>133</div>
<div class='data'><p class='datatext'><span class='areaname'>Liechtenstein </span> :
Western Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.4677666694208047%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
1 / 38000</p>
</div></section>
<section>
<div class='ranking'>134</div>
<div class='data'><p class='datatext'><span class='areaname'>Gambia </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.4537995062446862%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>3</span> :
63 / 2417000</p>
</div></section>
<section>
<div class='ranking'>135</div>
<div class='data'><p class='datatext'><span class='areaname'>Philippines </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.3645899631072242%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
2681 / 109581000</p>
</div></section>
<section>
<div class='ranking'>136</div>
<div class='data'><p class='datatext'><span class='areaname'>Barbados </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.3603691082436726%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
7 / 287000</p>
</div></section>
<section>
<div class='ranking'>137</div>
<div class='data'><p class='datatext'><span class='areaname'>Gabon </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.3279793675712042%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
53 / 2226000</p>
</div></section>
<section>
<div class='ranking'>138</div>
<div class='data'><p class='datatext'><span class='areaname'>Libya </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.2744427230045874%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
157 / 6871000</p>
</div></section>
<section>
<div class='ranking'>139</div>
<div class='data'><p class='datatext'><span class='areaname'>Indonesia </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.2656887631418359%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
6207 / 273524000</p>
</div></section>
<section>
<div class='ranking'>140</div>
<div class='data'><p class='datatext'><span class='areaname'>Bangladesh </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.2510449569791378%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
3694 / 164689000</p>
</div></section>
<section>
<div class='ranking'>141</div>
<div class='data'><p class='datatext'><span class='areaname'>Greece </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.2307666401935942%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
230 / 10423000</p>
</div></section>
<section>
<div class='ranking'>142</div>
<div class='data'><p class='datatext'><span class='areaname'>Malta </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.1356927623120252%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
9 / 442000</p>
</div></section>
<section>
<div class='ranking'>143</div>
<div class='data'><p class='datatext'><span class='areaname'>Paraguay </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.13379985258778%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
145 / 7133000</p>
</div></section>
<section>
<div class='ranking'>144</div>
<div class='data'><p class='datatext'><span class='areaname'>Nicaragua </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.0776176724623086%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
128 / 6625000</p>
</div></section>
<section>
<div class='ranking'>145</div>
<div class='data'><p class='datatext'><span class='areaname'>Morocco </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.0290391989182517%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
681 / 36911000</p>
</div></section>
<section>
<div class='ranking'>146</div>
<div class='data'><p class='datatext'><span class='areaname'>Sudan </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.0214014493079986%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
803 / 43849000</p>
</div></section>
<section>
<div class='ranking'>147</div>
<div class='data'><p class='datatext'><span class='areaname'>Yemen </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='1.00045920972725%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
535 / 29826000</p>
</div></section>
<section>
<div class='ranking'>148</div>
<div class='data'><p class='datatext'><span class='areaname'>Haiti </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.9586886042134659%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
196 / 11403000</p>
</div></section>
<section>
<div class='ranking'>149</div>
<div class='data'><p class='datatext'><span class='areaname'>Australia </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.9580199390525439%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
438 / 25500000</p>
</div></section>
<section>
<div class='ranking'>150</div>
<div class='data'><p class='datatext'><span class='areaname'>Latvia </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.9463437274738593%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
32 / 1886000</p>
</div></section>
<section>
<div class='ranking'>151</div>
<div class='data'><p class='datatext'><span class='areaname'>Guinea-Bissau </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.9352537619175251%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
33 / 1968000</p>
</div></section>
<section>
<div class='ranking'>152</div>
<div class='data'><p class='datatext'><span class='areaname'>Cyprus </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.9241944231647153%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
20 / 1207000</p>
</div></section>
<section>
<div class='ranking'>153</div>
<div class='data'><p class='datatext'><span class='areaname'>Liberia </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.9042231992714962%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
82 / 5058000</p>
</div></section>
<section>
<div class='ranking'>154</div>
<div class='data'><p class='datatext'><span class='areaname'>Lebanon </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.8580789759690857%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
105 / 6825000</p>
</div></section>
<section>
<div class='ranking'>155</div>
<div class='data'><p class='datatext'><span class='areaname'>Senegal </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.8527492928885325%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
256 / 16744000</p>
</div></section>
<section>
<div class='ranking'>156</div>
<div class='data'><p class='datatext'><span class='areaname'>Cameroon </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.8467331716835005%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>2</span> :
403 / 26546000</p>
</div></section>
<section>
<div class='ranking'>157</div>
<div class='data'><p class='datatext'><span class='areaname'>Zambia </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.8009483914071756%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
264 / 18384000</p>
</div></section>
<section>
<div class='ranking'>158</div>
<div class='data'><p class='datatext'><span class='areaname'>Namibia </span> :
Southern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.7902025988853447%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
36 / 2541000</p>
</div></section>
<section>
<div class='ranking'>159</div>
<div class='data'><p class='datatext'><span class='areaname'>Lesotho </span> :
Southern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.7811643338654144%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
30 / 2142000</p>
</div></section>
<section>
<div class='ranking'>160</div>
<div class='data'><p class='datatext'><span class='areaname'>Central African Republic </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.7044064471464648%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
61 / 4830000</p>
</div></section>
<section>
<div class='ranking'>161</div>
<div class='data'><p class='datatext'><span class='areaname'>Uruguay </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.6422007304316704%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
40 / 3474000</p>
</div></section>
<section>
<div class='ranking'>162</div>
<div class='data'><p class='datatext'><span class='areaname'>Belize </span> :
Central America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.560554104904428%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
4 / 398000</p>
</div></section>
<section>
<div class='ranking'>163</div>
<div class='data'><p class='datatext'><span class='areaname'>Zimbabwe </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.5066031766217269%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
135 / 14863000</p>
</div></section>
<section>
<div class='ranking'>164</div>
<div class='data'><p class='datatext'><span class='areaname'>Kenya </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.49996493122894237%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
482 / 53771000</p>
</div></section>
<section>
<div class='ranking'>165</div>
<div class='data'><p class='datatext'><span class='areaname'>Japan </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.4903851195724527%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
1112 / 126476000</p>
</div></section>
<section>
<div class='ranking'>166</div>
<div class='data'><p class='datatext'><span class='areaname'>Sierra Leone </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.48244756264527394%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
69 / 7977000</p>
</div></section>
<section>
<div class='ranking'>167</div>
<div class='data'><p class='datatext'><span class='areaname'>Trinidad and Tobago </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.4784142968233645%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
12 / 1399000</p>
</div></section>
<section>
<div class='ranking'>168</div>
<div class='data'><p class='datatext'><span class='areaname'>Malawi </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.4723247055386552%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
162 / 19130000</p>
</div></section>
<section>
<div class='ranking'>169</div>
<div class='data'><p class='datatext'><span class='areaname'>Comoros </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.4487654414550966%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
7 / 870000</p>
</div></section>
<section>
<div class='ranking'>170</div>
<div class='data'><p class='datatext'><span class='areaname'>Mauritius </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.43848375344332213%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
10 / 1272000</p>
</div></section>
<section>
<div class='ranking'>171</div>
<div class='data'><p class='datatext'><span class='areaname'>Cuba </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.43331965591446736%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
88 / 11327000</p>
</div></section>
<section>
<div class='ranking'>172</div>
<div class='data'><p class='datatext'><span class='areaname'>Ghana </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.4289980655771812%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
239 / 31073000</p>
</div></section>
<section>
<div class='ranking'>173</div>
<div class='data'><p class='datatext'><span class='areaname'>Uzbekistan </span> :
Central Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.393287265570103%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
236 / 33469000</p>
</div></section>
<section>
<div class='ranking'>174</div>
<div class='data'><p class='datatext'><span class='areaname'>Tajikistan </span> :
Central Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.3742512623224362%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
64 / 9538000</p>
</div></section>
<section>
<div class='ranking'>175</div>
<div class='data'><p class='datatext'><span class='areaname'>Madagascar </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.34442771362162394%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
171 / 27691000</p>
</div></section>
<section>
<div class='ranking'>176</div>
<div class='data'><p class='datatext'><span class='areaname'>Mali </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.3442739459655732%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
125 / 20251000</p>
</div></section>
<section>
<div class='ranking'>177</div>
<div class='data'><p class='datatext'><span class='areaname'>Somalia </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.3263755999328713%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
93 / 15893000</p>
</div></section>
<section>
<div class='ranking'>178</div>
<div class='data'><p class='datatext'><span class='areaname'>Slovakia </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.31667200303621024%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>1</span> :
31 / 5460000</p>
</div></section>
<section>
<div class='ranking'>179</div>
<div class='data'><p class='datatext'><span class='areaname'>Nigeria </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.26434610152768406%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
977 / 206140000</p>
</div></section>
<section>
<div class='ranking'>180</div>
<div class='data'><p class='datatext'><span class='areaname'>Tunisia </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.2642700289810874%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
56 / 11819000</p>
</div></section>
<section>
<div class='ranking'>181</div>
<div class='data'><p class='datatext'><span class='areaname'>Ethiopia </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.2639232506720963%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
544 / 114964000</p>
</div></section>
<section>
<div class='ranking'>182</div>
<div class='data'><p class='datatext'><span class='areaname'>Jamaica </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.2637122148368349%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
14 / 2961000</p>
</div></section>
<section>
<div class='ranking'>183</div>
<div class='data'><p class='datatext'><span class='areaname'>Chad </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.25806100945374916%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
76 / 16426000</p>
</div></section>
<section>
<div class='ranking'>184</div>
<div class='data'><p class='datatext'><span class='areaname'>Singapore </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.25742369279072574%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
27 / 5850000</p>
</div></section>
<section>
<div class='ranking'>185</div>
<div class='data'><p class='datatext'><span class='areaname'>New Zealand </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.25446970875897823%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
22 / 4822000</p>
</div></section>
<section>
<div class='ranking'>186</div>
<div class='data'><p class='datatext'><span class='areaname'>Georgia </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.23769798657453994%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
17 / 3989000</p>
</div></section>
<section>
<div class='ranking'>187</div>
<div class='data'><p class='datatext'><span class='areaname'>South Sudan </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.23418181807982463%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
47 / 11194000</p>
</div></section>
<section>
<div class='ranking'>188</div>
<div class='data'><p class='datatext'><span class='areaname'>Guinea </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.21659421345751312%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
51 / 13133000</p>
</div></section>
<section>
<div class='ranking'>189</div>
<div class='data'><p class='datatext'><span class='areaname'>Malaysia </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.21540788728137006%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
125 / 32366000</p>
</div></section>
<section>
<div class='ranking'>190</div>
<div class='data'><p class='datatext'><span class='areaname'>Nepal </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.2048233956091908%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
107 / 29137000</p>
</div></section>
<section>
<div class='ranking'>191</div>
<div class='data'><p class='datatext'><span class='areaname'>China </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.18224559067928395%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
4703 / 1439324000</p>
</div></section>
<section>
<div class='ranking'>192</div>
<div class='data'><p class='datatext'><span class='areaname'>Togo </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.1818974034093182%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
27 / 8279000</p>
</div></section>
<section>
<div class='ranking'>193</div>
<div class='data'><p class='datatext'><span class='areaname'>Benin </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.17943002590791327%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
39 / 12123000</p>
</div></section>
<section>
<div class='ranking'>194</div>
<div class='data'><p class='datatext'><span class='areaname'>Niger </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.158982286413903%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
69 / 24207000</p>
</div></section>
<section>
<div class='ranking'>195</div>
<div class='data'><p class='datatext'><span class='areaname'>Angola </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.14934010048509616%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
88 / 32866000</p>
</div></section>
<section>
<div class='ranking'>196</div>
<div class='data'><p class='datatext'><span class='areaname'>Burkina Faso </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.14675560154472955%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
55 / 20903000</p>
</div></section>
<section>
<div class='ranking'>197</div>
<div class='data'><p class='datatext'><span class='areaname'>Western Sahara </span> :
Northern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.093425684150738%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
1 / 597000</p>
</div></section>
<section>
<div class='ranking'>198</div>
<div class='data'><p class='datatext'><span class='areaname'>Botswana </span> :
Southern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.07114175183417165%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
3 / 2352000</p>
</div></section>
<section>
<div class='ranking'>199</div>
<div class='data'><p class='datatext'><span class='areaname'>Fiji </span> :
Melanesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.062249032854900195%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
1 / 896000</p>
</div></section>
<section>
<div class='ranking'>200</div>
<div class='data'><p class='datatext'><span class='areaname'>Jordan </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.060131967834744324%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
11 / 10203000</p>
</div></section>
<section>
<div class='ranking'>201</div>
<div class='data'><p class='datatext'><span class='areaname'>Thailand </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.04634609941838758%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
58 / 69800000</p>
</div></section>
<section>
<div class='ranking'>202</div>
<div class='data'><p class='datatext'><span class='areaname'>Rwanda </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.03445036036935799%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
8 / 12952000</p>
</div></section>
<section>
<div class='ranking'>203</div>
<div class='data'><p class='datatext'><span class='areaname'>Mozambique </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.03390585619330734%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
19 / 31255000</p>
</div></section>
<section>
<div class='ranking'>204</div>
<div class='data'><p class='datatext'><span class='areaname'>Sri Lanka </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.028652055658613753%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
11 / 21413000</p>
</div></section>
<section>
<div class='ranking'>205</div>
<div class='data'><p class='datatext'><span class='areaname'>Papua New Guinea </span> :
Melanesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.018701844228676844%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
3 / 8947000</p>
</div></section>
<section>
<div class='ranking'>206</div>
<div class='data'><p class='datatext'><span class='areaname'>Uganda </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.018290527132547578%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
15 / 45741000</p>
</div></section>
<section>
<div class='ranking'>207</div>
<div class='data'><p class='datatext'><span class='areaname'>Burundi </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0.004690533465477301%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
1 / 11891000</p>
</div></section>
<section>
<div class='ranking'>208</div>
<div class='data'><p class='datatext'><span class='areaname'>Mongolia </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 3278000</p>
</div></section>
<section>
<div class='ranking'>209</div>
<div class='data'><p class='datatext'><span class='areaname'>Eritrea </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 3546000</p>
</div></section>
<section>
<div class='ranking'>210</div>
<div class='data'><p class='datatext'><span class='areaname'>Cambodia </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 16719000</p>
</div></section>
<section>
<div class='ranking'>211</div>
<div class='data'><p class='datatext'><span class='areaname'>Bhutan </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 772000</p>
</div></section>
<section>
<div class='ranking'>212</div>
<div class='data'><p class='datatext'><span class='areaname'>Seychelles </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 98000</p>
</div></section>
<section>
<div class='ranking'>213</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Vincent and the Grenadines </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 111000</p>
</div></section>
<section>
<div class='ranking'>214</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Lucia </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 184000</p>
</div></section>
<section>
<div class='ranking'>215</div>
<div class='data'><p class='datatext'><span class='areaname'>Timor-Leste </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 1318000</p>
</div></section>
<section>
<div class='ranking'>216</div>
<div class='data'><p class='datatext'><span class='areaname'>Grenada </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 113000</p>
</div></section>
<section>
<div class='ranking'>217</div>
<div class='data'><p class='datatext'><span class='areaname'>Dominica </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 72000</p>
</div></section>
<section>
<div class='ranking'>218</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Kitts and Nevis </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 53000</p>
</div></section>
<section>
<div class='ranking'>219</div>
<div class='data'><p class='datatext'><span class='areaname'>Holy See </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 1000</p>
</div></section>
<section>
<div class='ranking'>220</div>
<div class='data'><p class='datatext'><span class='areaname'>American Samoa </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 55000</p>
</div></section>
<section>
<div class='ranking'>221</div>
<div class='data'><p class='datatext'><span class='areaname'>Anguilla </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 15000</p>
</div></section>
<section>
<div class='ranking'>222</div>
<div class='data'><p class='datatext'><span class='areaname'>Aruba </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 107000</p>
</div></section>
<section>
<div class='ranking'>223</div>
<div class='data'><p class='datatext'><span class='areaname'>Bermuda </span> :
NORTHERN AMERICA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 62000</p>
</div></section>
<section>
<div class='ranking'>224</div>
<div class='data'><p class='datatext'><span class='areaname'>Bolivia (Plurinational State of) </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 11673000</p>
</div></section>
<section>
<div class='ranking'>225</div>
<div class='data'><p class='datatext'><span class='areaname'>Bonaire, Sint Eustatius and Saba </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 26000</p>
</div></section>
<section>
<div class='ranking'>226</div>
<div class='data'><p class='datatext'><span class='areaname'>British Virgin Islands </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 30000</p>
</div></section>
<section>
<div class='ranking'>227</div>
<div class='data'><p class='datatext'><span class='areaname'>Brunei Darussalam </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 437000</p>
</div></section>
<section>
<div class='ranking'>228</div>
<div class='data'><p class='datatext'><span class='areaname'>Cayman Islands </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 66000</p>
</div></section>
<section>
<div class='ranking'>229</div>
<div class='data'><p class='datatext'><span class='areaname'>Channel Islands </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 174000</p>
</div></section>
<section>
<div class='ranking'>230</div>
<div class='data'><p class='datatext'><span class='areaname'>China, Hong Kong SAR </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 7497000</p>
</div></section>
<section>
<div class='ranking'>231</div>
<div class='data'><p class='datatext'><span class='areaname'>China, Macao SAR </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 649000</p>
</div></section>
<section>
<div class='ranking'>232</div>
<div class='data'><p class='datatext'><span class='areaname'>China, Taiwan Province of China </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 23817000</p>
</div></section>
<section>
<div class='ranking'>233</div>
<div class='data'><p class='datatext'><span class='areaname'>Congo </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 5518000</p>
</div></section>
<section>
<div class='ranking'>234</div>
<div class='data'><p class='datatext'><span class='areaname'>Cook Islands </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 18000</p>
</div></section>
<section>
<div class='ranking'>235</div>
<div class='data'><p class='datatext'><span class='areaname'>Curaçao </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 164000</p>
</div></section>
<section>
<div class='ranking'>236</div>
<div class='data'><p class='datatext'><span class='areaname'>Côte d'Ivoire </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 26378000</p>
</div></section>
<section>
<div class='ranking'>237</div>
<div class='data'><p class='datatext'><span class='areaname'>Dem. People's Republic of Korea </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 25779000</p>
</div></section>
<section>
<div class='ranking'>238</div>
<div class='data'><p class='datatext'><span class='areaname'>Democratic Republic of the Congo </span> :
Middle Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 89561000</p>
</div></section>
<section>
<div class='ranking'>239</div>
<div class='data'><p class='datatext'><span class='areaname'>Falkland Islands (Malvinas) </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 3000</p>
</div></section>
<section>
<div class='ranking'>240</div>
<div class='data'><p class='datatext'><span class='areaname'>Faroe Islands </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 49000</p>
</div></section>
<section>
<div class='ranking'>241</div>
<div class='data'><p class='datatext'><span class='areaname'>French Guiana </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 299000</p>
</div></section>
<section>
<div class='ranking'>242</div>
<div class='data'><p class='datatext'><span class='areaname'>French Polynesia </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 281000</p>
</div></section>
<section>
<div class='ranking'>243</div>
<div class='data'><p class='datatext'><span class='areaname'>Gibraltar </span> :
Southern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 34000</p>
</div></section>
<section>
<div class='ranking'>244</div>
<div class='data'><p class='datatext'><span class='areaname'>Greenland </span> :
NORTHERN AMERICA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 57000</p>
</div></section>
<section>
<div class='ranking'>245</div>
<div class='data'><p class='datatext'><span class='areaname'>Guadeloupe </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 400000</p>
</div></section>
<section>
<div class='ranking'>246</div>
<div class='data'><p class='datatext'><span class='areaname'>Guam </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 169000</p>
</div></section>
<section>
<div class='ranking'>247</div>
<div class='data'><p class='datatext'><span class='areaname'>Iran (Islamic Republic of) </span> :
Southern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 83993000</p>
</div></section>
<section>
<div class='ranking'>248</div>
<div class='data'><p class='datatext'><span class='areaname'>Isle of Man </span> :
Northern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 85000</p>
</div></section>
<section>
<div class='ranking'>249</div>
<div class='data'><p class='datatext'><span class='areaname'>Kiribati </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 119000</p>
</div></section>
<section>
<div class='ranking'>250</div>
<div class='data'><p class='datatext'><span class='areaname'>Lao People's Democratic Republic </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 7276000</p>
</div></section>
<section>
<div class='ranking'>251</div>
<div class='data'><p class='datatext'><span class='areaname'>Marshall Islands </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 59000</p>
</div></section>
<section>
<div class='ranking'>252</div>
<div class='data'><p class='datatext'><span class='areaname'>Martinique </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 375000</p>
</div></section>
<section>
<div class='ranking'>253</div>
<div class='data'><p class='datatext'><span class='areaname'>Mayotte </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 273000</p>
</div></section>
<section>
<div class='ranking'>254</div>
<div class='data'><p class='datatext'><span class='areaname'>Micronesia (Fed. States of) </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 115000</p>
</div></section>
<section>
<div class='ranking'>255</div>
<div class='data'><p class='datatext'><span class='areaname'>Montserrat </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 5000</p>
</div></section>
<section>
<div class='ranking'>256</div>
<div class='data'><p class='datatext'><span class='areaname'>Myanmar </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 54410000</p>
</div></section>
<section>
<div class='ranking'>257</div>
<div class='data'><p class='datatext'><span class='areaname'>Nauru </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 11000</p>
</div></section>
<section>
<div class='ranking'>258</div>
<div class='data'><p class='datatext'><span class='areaname'>New Caledonia </span> :
Melanesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 285000</p>
</div></section>
<section>
<div class='ranking'>259</div>
<div class='data'><p class='datatext'><span class='areaname'>Niue </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 2000</p>
</div></section>
<section>
<div class='ranking'>260</div>
<div class='data'><p class='datatext'><span class='areaname'>Northern Mariana Islands </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 58000</p>
</div></section>
<section>
<div class='ranking'>261</div>
<div class='data'><p class='datatext'><span class='areaname'>Palau </span> :
Micronesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 18000</p>
</div></section>
<section>
<div class='ranking'>262</div>
<div class='data'><p class='datatext'><span class='areaname'>Puerto Rico </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 2861000</p>
</div></section>
<section>
<div class='ranking'>263</div>
<div class='data'><p class='datatext'><span class='areaname'>Republic of Korea </span> :
Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 51269000</p>
</div></section>
<section>
<div class='ranking'>264</div>
<div class='data'><p class='datatext'><span class='areaname'>Republic of Moldova </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 4034000</p>
</div></section>
<section>
<div class='ranking'>265</div>
<div class='data'><p class='datatext'><span class='areaname'>Russian Federation </span> :
Eastern Europe
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 145934000</p>
</div></section>
<section>
<div class='ranking'>266</div>
<div class='data'><p class='datatext'><span class='areaname'>Réunion </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 895000</p>
</div></section>
<section>
<div class='ranking'>267</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Barthélemy </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 10000</p>
</div></section>
<section>
<div class='ranking'>268</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Helena </span> :
Western Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 6000</p>
</div></section>
<section>
<div class='ranking'>269</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Martin (French part) </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 39000</p>
</div></section>
<section>
<div class='ranking'>270</div>
<div class='data'><p class='datatext'><span class='areaname'>Saint Pierre and Miquelon </span> :
NORTHERN AMERICA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 6000</p>
</div></section>
<section>
<div class='ranking'>271</div>
<div class='data'><p class='datatext'><span class='areaname'>Samoa </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 198000</p>
</div></section>
<section>
<div class='ranking'>272</div>
<div class='data'><p class='datatext'><span class='areaname'>Sint Maarten (Dutch part) </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 43000</p>
</div></section>
<section>
<div class='ranking'>273</div>
<div class='data'><p class='datatext'><span class='areaname'>Solomon Islands </span> :
Melanesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 687000</p>
</div></section>
<section>
<div class='ranking'>274</div>
<div class='data'><p class='datatext'><span class='areaname'>State of Palestine </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 5101000</p>
</div></section>
<section>
<div class='ranking'>275</div>
<div class='data'><p class='datatext'><span class='areaname'>Syrian Arab Republic </span> :
Western Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 17501000</p>
</div></section>
<section>
<div class='ranking'>276</div>
<div class='data'><p class='datatext'><span class='areaname'>Tokelau </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 1000</p>
</div></section>
<section>
<div class='ranking'>277</div>
<div class='data'><p class='datatext'><span class='areaname'>Tonga </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 106000</p>
</div></section>
<section>
<div class='ranking'>278</div>
<div class='data'><p class='datatext'><span class='areaname'>Turkmenistan </span> :
Central Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 6031000</p>
</div></section>
<section>
<div class='ranking'>279</div>
<div class='data'><p class='datatext'><span class='areaname'>Turks and Caicos Islands </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 39000</p>
</div></section>
<section>
<div class='ranking'>280</div>
<div class='data'><p class='datatext'><span class='areaname'>Tuvalu </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 12000</p>
</div></section>
<section>
<div class='ranking'>281</div>
<div class='data'><p class='datatext'><span class='areaname'>United Republic of Tanzania </span> :
Eastern Africa
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 59734000</p>
</div></section>
<section>
<div class='ranking'>282</div>
<div class='data'><p class='datatext'><span class='areaname'>United States Virgin Islands </span> :
Caribbean
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 104000</p>
</div></section>
<section>
<div class='ranking'>283</div>
<div class='data'><p class='datatext'><span class='areaname'>United States of America </span> :
NORTHERN AMERICA
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 331003000</p>
</div></section>
<section>
<div class='ranking'>284</div>
<div class='data'><p class='datatext'><span class='areaname'>Vanuatu </span> :
Melanesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 307000</p>
</div></section>
<section>
<div class='ranking'>285</div>
<div class='data'><p class='datatext'><span class='areaname'>Venezuela (Bolivarian Republic of) </span> :
South America
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 28436000</p>
</div></section>
<section>
<div class='ranking'>286</div>
<div class='data'><p class='datatext'><span class='areaname'>Viet Nam </span> :
South-Eastern Asia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 97339000</p>
</div></section>
<section>
<div class='ranking'>287</div>
<div class='data'><p class='datatext'><span class='areaname'>Wallis and Futuna Islands </span> :
Polynesia
</p>
<svg width='100%' height='.3em'>
	<rect class='bg' fill='#4442' width='100%' height='.3em'></rect>
	<rect class='cdrC19T' width='0%' height='.3em'></rect>
	<g class='markers'>
		<line x1="25%" x2="25%" y2="9"></line>
		<line x1="50%" x2="50%" y2="9"></line>
		<line x1="75%" x2="75%" y2="9"></line>
	</g>
</svg>
<p class='cdrnum'><span class='areaname'>0</span> :
0 / 11000</p>
</div></section>
