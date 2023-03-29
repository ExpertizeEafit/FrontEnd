import { Seniority } from "../types/Types";
import { data } from "../dummy/data";
import axios from "axios";

export const getLearning = ():Promise<Seniority[]>  => {
    return axios.get('http://localhost:8080/learning', 
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    }
    )
    .then(response => {
        console.log(response.data.learning_path)
        return response.data.learning_path;
    })
    .catch(error => {
        console.log(error);
        return [];
    });

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(data)
    //     }, 1000)
    // })
}