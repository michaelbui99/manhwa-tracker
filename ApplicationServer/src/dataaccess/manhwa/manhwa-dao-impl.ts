import { Pool } from "pg";
import manhwa from "src/models/manhwa";
import { BaseDAO } from "../base-dao";
import { ManhwaDAO } from "./manhwa-dao";

export class BaseDAOImpl implements ManhwaDAO {
  get(id: number): manhwa {
    const baseDAO = new BaseDAO();
    const connection: Pool = baseDAO.getConnection();
    connection.query("SELECT * FROM manhwa where id = $1", [id], (err, res) => {
      if (err) {
        throw err;
      }

      console.log(res.rows);
    });

    throw new Error("Method not implemented.");
  }
  getAll(): manhwa[] {
    throw new Error("Method not implemented.");
  }
  create(manhwa: manhwa): manhwa {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
}
