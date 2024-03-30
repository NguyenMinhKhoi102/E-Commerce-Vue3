import host from "@/utils/host";

export default {
    getRandomServer() {
        const servers = host.backendServers;
        const randomIndex = Math.floor(Math.random() * servers.length);
        return servers[randomIndex];
    }
}