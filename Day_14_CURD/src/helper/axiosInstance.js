import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:4000"
})

export default axiosInstance


// npx json-server --watch --port 4000 db.json