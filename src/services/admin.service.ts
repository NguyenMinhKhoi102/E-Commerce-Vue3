import createApiClient from "./api.service";

class AdminService {
    private api: any;

    constructor(baseUrl = "/api/admin") {
        this.api = createApiClient(baseUrl);
    }
    async signUp(data: any): Promise<any> {
        return (await this.api.post("/signup", data)).data;
    }
    async signIn(data: any): Promise<any> {
        return (await this.api.post("/signin", data)).data;
    }
    async signOut(): Promise<any> {
        return (await this.api.post("/signout")).data;
    }
}

export default new AdminService;