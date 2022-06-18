import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://warm-woodland-17575.herokuapp.com/"
    // baseURL: "http://localhost:3001/"
})