import manhwa from "../models/manhwa/manhwa";
import { ManhwaService } from "./ManhwaService";
import config from "../__config__/config";
import { BaseService } from "./BaseService";
import Manhwa from "../models/manhwa/manhwa";

export class ManhwaServiceImpl extends BaseService implements ManhwaService {
    constructor() {
        super();
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
