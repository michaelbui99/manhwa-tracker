import { API_ADDRESS } from "../config/config";

export class BaseService {
    baseUri: string;

    /**
     *
     */
    constructor() {
        this.baseUri = API_ADDRESS;
    }
    getAuthorizationHeader() {
        const token = sessionStorage.getItem("token");

        const header = {
            Authorization: token ? `Bearer ${token}` : "",
        };

        return header;
    }
}
