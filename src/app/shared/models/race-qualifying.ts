import { Circuit } from "./circuit"
import { QualifyingResult } from "./qualifying-result"

export interface  RaceQualifying {
        season: string
        round: string
        url: string
        raceName: string
        Circuit: Circuit
        date: string
        time: string
        QualifyingResults: QualifyingResult[]
}
