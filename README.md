# COVID-19 Crude Death Rate Data

[Charting](https://raw.githack.com/tomByrer/covid19-crude-death-rate-data/master/covid19-cdr.html) to help research which countries have the most deaths via population ratio, expressed in 'per 100,000 people'.
Final output is sorted by CDR and positive tests.

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

-[ ] + date rendered to README & chart
-[ ] Clean up non-matching cencus-covid countries & territories like Virgin Islands
-[ ] US totals
-[ ] Date of import
-[ ] Compare [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data

### Maybe

-[ ] Other countries' states/regions

## License

* code (c)2020 Tom Byrer, released GPL3
* data varous open source licenses, as found in Sources above
