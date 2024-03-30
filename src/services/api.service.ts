import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import loadBalancer from "@/configs/loadBalancer";
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseURL: any) => {
    const instance: AxiosInstance = axios.create({
        baseURL,
        ...commonConfig,
    });

    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            config.baseURL = loadBalancer.getRandomServer() + config.baseURL;
            console.log(config);
            return config;
        },
        (error: any) => {
            return Promise.reject(error);
        }
    );

    return instance;
};