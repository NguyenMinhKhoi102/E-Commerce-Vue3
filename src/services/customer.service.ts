import createApiClient from "./api.service";

class CustomerService {
    private api: any;

    constructor(baseUrl = "/customer") {
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
    async findAll(): Promise<any> {
        return (await this.api.get("/")).data;
    }
    async get(id: string): Promise<any> {
        return (await this.api.get(`/${id}`)).data;
    }
}

export default new CustomerService;