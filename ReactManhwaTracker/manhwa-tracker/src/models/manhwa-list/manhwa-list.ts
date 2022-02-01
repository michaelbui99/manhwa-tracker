import { User } from "../user/user";
import { ManhwaListEntry } from "./manhwa-list-entry";

export class ManhwaList {
    listEntries: ManhwaListEntry[];
    owner: User;
    id: number;
    name: string;
    description: string;

    constructor(
        owner: User,
        { listEntries }: { listEntries: ManhwaListEntry[] } = {
            listEntries: [],
        },
        id: number,
        name: string,
        description: string
    ) {
        this.owner = owner;
        this.listEntries = listEntries;
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
