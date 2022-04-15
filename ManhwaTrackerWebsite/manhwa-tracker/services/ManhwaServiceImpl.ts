import manhwa from "../models/manhwa/manhwa";
import { ManhwaService } from "./ManhwaService";
import config from "../__config__/config";
import { BaseService } from "./BaseService";
import Manhwa from "../models/manhwa/manhwa";

export class ManhwaServiceImpl extends BaseService implements ManhwaService {
    constructor() {
        super();
    }

    async getManhwaById(id: number): Promise<manhwa | null> {
        try {
            const url = `${this.baseUrl}/manhwas/${id}`;
            const response = await fetch(url);
            const manhwa = await response.json();

            return manhwa;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async getAllManhwas(): Promise<manhwa[]> {
        try {
            const url = `${this.baseUrl}/manhwas`;
            const response = await fetch(url);
            const manhwas: Manhwa[] = await response.json();

            return manhwas;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}
