import { User } from "../user/user";
import { ManhwaListEntry } from "./manhwa-list-entry";

export class ManhwaList {
  listEntries: ManhwaListEntry[];
  owner: User;

  constructor(
    owner: User,
    { listEntries }: { listEntries: ManhwaListEntry[] } = { listEntries: [] }
  ) {
    this.owner = owner;
    this.listEntries = listEntries;
  }
}
