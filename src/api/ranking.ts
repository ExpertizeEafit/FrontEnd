import { RankingResponse } from "../types/Types";
import axios from "axios";
import { getCookie } from "./cookie";

export const getRanking = ():Promise<RankingResponse>  => {

    const userData = JSON.parse(getCookie("user") || "")
    const { token, id } = userData

    return axios.get(`http://34.70.104.176/ranking/${id}`, 
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    .then(response => {
        return response.data
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