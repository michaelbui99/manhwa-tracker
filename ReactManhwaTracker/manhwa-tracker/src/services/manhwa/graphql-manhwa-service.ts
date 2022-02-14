import Manhwa from "../../models/manhwa/manhwa";
import { ManhwaService } from "./manhwa-service";

export class GraphQLManhwaService implements ManhwaService {
    url: string;

    constructor(url: string) {
        this.url = url;
    }
    getAllManhwas(): Manhwa[] {
        return [];
    }
    getManhwasByTitle(title: string): Manhwa[] {
        return [];
    }
}
