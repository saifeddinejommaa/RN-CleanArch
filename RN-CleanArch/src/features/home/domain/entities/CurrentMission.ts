import MissionGoalSummary from "./MissionGoalSummary";
import MyDocument from "./MyDocument";
import TimeSlotEventSummary from "./TimeSlotEventSummary";

 type CurrentMission = {
     id : number,
     campaignOccupationId: number,
     logo: string,
     backgroundColord: string,
     missionTitle: string,
     missionPlace: string,
     campaignName: string,
     doucments: MyDocument[],
     missionGoals : MissionGoalSummary[],
     timeSlotEvent : TimeSlotEventSummary,
     brandName: string
}

export default CurrentMission;