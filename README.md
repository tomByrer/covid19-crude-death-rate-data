# COVID-19 Crude Death Rate Data

To help research which countries have the most deaths via population ratio, expressed in 'per 100,000 people'.
Final output is sorted by CDR, then by positive tests.

## Instructions

You can view the [`covid19-cdr.csv`](https://github.com/tomByrer/covid19-crude-death-rate-data/blob/master/covid19-cdr.csv#L1) and `covid19-cdr.json` files directly for now.  If you want to download a single file, I find the "Raw" button helps.


1. Install [NodeJS](https://nodejs.org).  Might need to reboot, add to path, etc.
2. In a CLI, run `node 1collect`; the output will be in `/data`
3. etc for other JS scripts that start with a number; expected to be in order.

### Warnings

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

World Population Estimates:
https://population.un.org/wpp/Download/Standard/CSV/

COVID-19 deaths:
Center for Systems Science and Engineering (CSSE) at Johns Hopkins University
https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data

## Changelog

- 0.1.1 changed 'confirmed' to 'positive', so help specify that info is for tests & not deaths
- 0.1.0 intal release

## TODO

-[ ] Clean up non-matching cencus-covid countries
-[ ] US totals
-[ ] Date of import
-[ ] Compare & maybe use [COVID19Tracking](https://twitter.com/COVID19Tracking) for US data

### Maybe

-[ ] Other countries' states/regions
