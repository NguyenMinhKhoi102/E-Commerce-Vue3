import createApiClient from "./api.service";

class CategoryService {
    private api: any;

    constructor(baseUrl = "/api/category") {
        this.api = createApiClient(baseUrl);
    }
    async findAll(): Promise<any> {
        return (await this.api.get("/")).data;
    }
    async get(id: string): Promise<any> {
        return (await this.api.get(`/${id}`)).data;
    }
    async create(data: any): Promise<any> {
        return (await this.api.post("/", data)).data;
    }
    async update(data: any, id: string): Promise<any> {
        return (await this.api.post(`/${id}`, data)).data;
    }
    async delete(id: string): Promise<any> {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new CategoryService;