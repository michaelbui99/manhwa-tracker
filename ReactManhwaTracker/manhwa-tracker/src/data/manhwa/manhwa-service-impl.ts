import { ManhwaService } from "./manhwa-service";
import { API_ADDRESS } from "../../config/config";
import manhwa from "../../models/manhwa/manhwa";
import Manhwa from "../../models/manhwa/manhwa";

export class ManhwaServiceImpl implements ManhwaService {
    baseUri: string;

    constructor() {
        this.baseUri = API_ADDRESS;
    }

    async getManhwasByTitle(title: string): Promise<Manhwa[]> {
        const res = await fetch(`${this.baseUri}/manhwas?title=${title}`);
        const manhwas = await res.json();

        return manhwas;
    }

    async getAllManhwas(): Promise<Manhwa[]> {
        const res = await fetch(`${this.baseUri}/manhwas`);
        const manhwas = await res.json();

        return manhwas;
    }

    async getManhwaById(id: number): Promise<Manhwa> {
        const res = await fetch(`${this.baseUri}/manhwas/${id}`);
        const manhwa = await res.json();

        return manhwa;
    }
}
