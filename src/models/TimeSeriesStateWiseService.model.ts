export default class {
  "cases_time_series": CaseTimeSeries[]
  "statewise": StateWise[]
  "tested": Tested[]
}

class CaseTimeSeries {
  "dailyconfirmed": string
  "dailydeceased": string
  "dailyrecovered": string
  "date": string
  "totalconfirmed": string
  "totaldeceased": string
  "totalrecovered": string
}

export class StateWise {
  "active": string
  "confirmed": string
  "deaths": string
  "deltaconfirmed": string
  "deltadeaths": string
  "deltarecovered": string
  "lastupdatedtime": string
  "migratedother": string
  "recovered": string
  "state": string
  "statecode": string
  "statenotes": string
}

class Tested {
  "individualstestedperconfirmedcase": string
  "positivecasesfromsamplesreported": string
  "samplereportedtoday": string
  "source": string
  "testpositivityrate": string
  "testsconductedbyprivatelabs": string
  "testsperconfirmedcase": string
  "testspermillion": string
  "totalindividualstested": string
  "totalpositivecases": string
  "totalsamplestested": string
  "updatetimestamp": string
}
