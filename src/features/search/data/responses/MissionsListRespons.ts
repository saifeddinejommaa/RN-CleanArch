import MissionResponse from "./MissionResponse";

interface MissionsListResponse {
    pageCount: number;
    pageSize: number;
    results: MissionResponse[];
    totaRows: number;
}

export default MissionsListResponse;