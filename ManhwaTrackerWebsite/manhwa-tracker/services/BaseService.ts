import config from "../__config__/config";

export class BaseService {
    baseUrl;

    constructor() {
        this.baseUrl = `${config.APPLICATION_SERVER_ADDERESS}/api/v1`;
    }
}
