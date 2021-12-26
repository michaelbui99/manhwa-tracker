import Manhwa from "../manhwa/manhwa";

export class ManhwaListEntry {
  manhwa: Manhwa;
  latestReadChapter: number;

  constructor(manhwa: Manhwa, latestChapterRead: number) {
    this.manhwa = manhwa;
    this.latestReadChapter = latestChapterRead;
  }
}
