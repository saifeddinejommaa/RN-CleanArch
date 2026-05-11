import MissionResponse from "./MissionResponse";

interface MissionsListResponse {
    pageCount: number;
    pageSize: number;
    result: MissionResponse[];
    totaRows: number;
}

export default MissionsListResponse;