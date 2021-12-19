import manhwa from "src/models/manhwa";
import { ManhwaService } from "./manhwa-service";

export class ManhwaServiceImpl implements ManhwaService {
  getById(id: number): manhwa {
    throw new Error("Method not implemented.");
  }
}
