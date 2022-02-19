import Manhwa from "../../models/manhwa/manhwa";

export interface ManhwaService {
    getAllManhwas: () => Promise<Manhwa[]>;
    getManhwasByTitle: (title: string) => Promise<Manhwa[]>;
    getManhwaById: (id: number) => Promise<Manhwa>;
}
