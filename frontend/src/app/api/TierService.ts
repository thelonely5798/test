import { API_URL } from "."


export class TierService {
    static  getAll(){
        return new Promise((resolve, reject) => {
            fetch(API_URL + "/tier/get-all", {
                method: "GET",
            }).then((response) => {
                return response.json()
            }).then(data => resolve(data)).catch(err => {
                reject(err)
            })
        })
    }
}