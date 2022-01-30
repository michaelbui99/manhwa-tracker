import { User } from "../user/user";
import { ManhwaListEntry } from "./manhwa-list-entry";

export class ManhwaList {
    listEntries: ManhwaListEntry[];
    owner: User;
    id: number;

    constructor(
        owner: User,
        { listEntries }: { listEntries: ManhwaListEntry[] } = {
            listEntries: [],
        },
        id: number
    ) {
        this.owner = owner;
        this.listEntries = listEntries;
        this.id = id;
    }
}
