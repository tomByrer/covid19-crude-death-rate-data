# COVID-19 Crude Death Rate Data

[Charting](https://raw.githack.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr.html) to help research which countries have the most deaths via population ratio, expressed in 'per 100,000 people'.
Final output is sorted by CDR and positive tests.

## Note: All COVID19 stats are inaccurate, only use for approximation

1. China stopped reporting all numbers a few months in.
2. There is no standard in methods, machines, or even levels between the same methods & machines.  A positive or negitive level is surprisingly arbitrary, which may be dictated by local or national govenernments, but not nation-wide in USA & certainly not standardized globally.
3. Sometimes level governance is changed after a few months, but old data may not be updated.  Again more arbitrary numbers.
4. Seems to be rare that the testers are tested?...

Since the US "Covid Tracking Project" has shut down & the above points, I will unlikely update this, unless I need fresh data for a discussion.

## Instructions

You can view the results of my last run in the [`covid19-cdr.html` chart](https://raw.githack.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr.html) and [`covid19-cdr.json` data](https://raw.githubusercontent.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr.json) files directly.

If you want to get a fresh update yourself, here are the steps:

1. Install [NodeJS](https://nodejs.org).  Might need to reboot, add to path, etc.
2. In a CLI, run `npm install`
3. run 'npm start'
4. `covid19-cdr.html` & `covid19-cdr.json` should be updated.

### Warnings

* I use [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data, but use Johns Hopkins for world data.  If you want to see how the Johns Hopkins data looks (typically higher for some US states), check out the [`covid19-cdr-johns-hopkins-only.json`](https://raw.githubusercontent.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr-johns-hopkins-only.json)
* BETA: API & code likely to change drastically.
* BETA: some of the smaller countries & territories might not have the correct data
* Right now, needs to be ran manually & uploaded; not automated

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

+ 0.6.0 USA totals, split Johns Hopkins-only data
+ 0.5.2 `start` script
+ 0.5.1 chart: + updated & click to hide key
+ 0.5.0 refactored, JSON has Johns Hopkins diff, but no longer outputs CSV
+ 0.4.3 tweaked chart header
+ 0.4.2 automated JH date updates
+ 0.4.1 removed chart from README
+ 0.4.0 created chart script to merge with README
+ 0.3.0 merged scripts into 1 file; no need for intermediate data files
+ 0.2.0 + COVID19Tracking data, staging files now have number fields early as possile
+ 0.1.1 changed 'confirmed' to 'positive', so help specify that info is for tests & not deaths
+ 0.1.0 intal release

## TODO

-[ ] + date rendered to README
-[ ] Clean up non-matching cencus-covid countries & territories like Virgin Islands
-[ ] Compare [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data

### Maybe

-[ ] Other countries' states/regions

## License

* code (c)2020 Tom Byrer, released GPL3
* data varous open source licenses, as found in Sources above
