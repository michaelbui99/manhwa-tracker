import { Pool } from "pg";
import Manhwa from "src/models/manhwa";
import { BaseDAO } from "../base-dao";
import { ManhwaDAO } from "./manhwa-dao";

export class ManhwaDAOImpl implements ManhwaDAO {
  async getAsync(id: number): Promise<Manhwa> {
    const baseDAO = new BaseDAO();
    const connection: Pool = baseDAO.getConnection();
    const { rows }: { rows: Manhwa[] } = await connection.query(
      "SELECT * FROM manhwa where id = $1",
      [id]
    );
    console.log(rows);
    return rows[0];
  }
  getAllAsync(): Promise<Manhwa[]> {
    throw new Error("Method not implemented.");
  }
  createAsync(manhwa: Manhwa): Promise<Manhwa> {
    throw new Error("Method not implemented.");
  }
  deleteAsync(id: number): void {
    throw new Error("Method not implemented.");
  }
}
