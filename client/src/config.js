import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://glegolaadominik.herokuapp.com/"
    // baseURL: "http://localhost:3001/"
})