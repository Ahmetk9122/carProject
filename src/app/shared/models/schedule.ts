import { Circuit } from "./circuit"
import { FirstPractice } from "./first-practice"
import { Qualifying } from "./qualifying"
import { SecondPractice } from "./second-practice"
import { Sprint } from "./sprint"
import { ThirdPractice } from "./third-practice"

export interface Schedule {
    season: string
    round: string
    url: string
    raceName: string
    Circuit: Circuit
    date: string
    time: string
    FirstPractice: FirstPractice
    SecondPractice: SecondPractice
    ThirdPractice?: ThirdPractice
    Qualifying: Qualifying
    Sprint?: Sprint
}
