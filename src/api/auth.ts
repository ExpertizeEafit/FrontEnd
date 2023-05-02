import axios from "axios";
import { setCookie } from "./cookie";

export const login = (data:any):Promise<any>  => {
    return axios.post('http://localhost:8080/login', data, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    }
    )
    .then(response => {

        response.data.attributes.jwt = response.data.access_token;
        
        const data = JSON.stringify(response.data.attributes)
        setCookie("user", data, response.data.expires_in)
        return response.data.attributes
    })
    .catch(error => {
        console.log(error);
        return [];
    });
}