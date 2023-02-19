import { Pilot } from "./dto/pilot";

export class urlConstants{
    public static hostAddress:string = 'http://localhost:8080';
    public static getPilots:string = `${this.hostAddress}/api/v1/pilot/all`;
    public static getPilot(id: Number):string {return `${this.hostAddress}/api/v1/pilot?pilot_id=${id}`};
    public static updatePilot(id: number): string {
        const pathId: string = String(id);
        return `${this.hostAddress}/api/v1/pilot/${pathId}`}
}