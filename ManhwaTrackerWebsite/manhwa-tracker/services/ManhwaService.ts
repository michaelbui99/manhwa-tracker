import Manhwa from "../models/manhwa/manhwa";

export interface ManhwaService {
    getAllManhwas(): Promise<Manhwa[]>;
    getManhwaById(id: number): Promise<Manhwa | null>;
}
