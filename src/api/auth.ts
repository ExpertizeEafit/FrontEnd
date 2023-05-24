import axios from "axios";
import { setCookie } from "./cookie";

const NO_AUTH = 401;
const BAD_REQUEST = 400;

export const login = (data:any):Promise<any>  => {
    return axios.post('http://localhost:8081/login', data, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    }
    )
    .then(response => {

        response.data.user.jwt = response.data.access_token;
        
        const data = JSON.stringify(response.data.user)
        setCookie("user", data, response.data.expires_in)
        return response.data.user
    })
        .catch(error => {
            let errorMessage  = "";
            
            if(NO_AUTH == error.response.status) {
                errorMessage = "Invalid credentials"    
            } else if(BAD_REQUEST == error.response.status) {
                errorMessage = "Fill empty fields"
            }
           
            return Promise.reject(errorMessage)
            
        });
}