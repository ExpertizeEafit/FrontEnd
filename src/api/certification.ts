import { Seniority } from "../types/Types";
import axios from "axios";
import { getCookie } from "./cookie";

export const getCertificationRequests = ():Promise<any[]>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { jwt, user_id } = userData
    return axios.get(`http://localhost:8081/file/getAllRequests/${user_id}`, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': `Bearer ${jwt}`
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}

export const uploadCertification = (data: FormData):Promise<any[]>  => {

    const userData = JSON.parse(getCookie("user") || "{}")
    const { jwt, user_id } = userData
    data.append("user_id", user_id)
    return axios.post('http://localhost:8081/file/saveRequest', data,
    {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    }
    )
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return [];
    });
}