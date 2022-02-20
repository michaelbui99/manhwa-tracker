import { ManhwaList } from "../../models/manhwa-list/manhwa-list";
import { BaseService } from "../base-service";
import { ManhwaListService } from "./manhwa-list-service";

export class ManhwaListServiceImpl
    extends BaseService
    implements ManhwaListService
{
    constructor() {
        super();
    }

    async getUserManhwaLists(): Promise<ManhwaList[]> {
        const headers = new Headers({
            Accept: "application/json",
            ...this.getAuthorizationHeader(),
        });

        const res = await fetch(`${this.baseUri}/manhwalists`, {
            headers: headers,
        });

        const lists = await res.json();

        return lists;
    }
}
