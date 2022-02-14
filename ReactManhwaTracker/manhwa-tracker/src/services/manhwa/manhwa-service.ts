import Manhwa from "../../models/manhwa/manhwa";

export interface ManhwaService {
    getAllManhwas: () => Manhwa[];
    getManhwasByTitle: (title: string) => Manhwa[];
}
