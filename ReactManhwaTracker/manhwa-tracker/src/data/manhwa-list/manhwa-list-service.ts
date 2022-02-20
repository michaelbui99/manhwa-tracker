import { ManhwaList } from "../../models/manhwa-list/manhwa-list";

export interface ManhwaListService {
    getUserManhwaLists: () => Promise<ManhwaList[]>;
}
