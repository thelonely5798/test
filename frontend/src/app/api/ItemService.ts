import { API_URL } from "."


export class ItemService {
    static getAll(data: any = {}) {
        let params = new URLSearchParams(data).toString();
        return new Promise((resolve, reject) => {
            fetch(API_URL + "/item/get-all?" + params , {
                method: "GET",
            }).then((response) => {
                return response.json()
            }).then(data => resolve(data)).catch(err => {
                reject(err)
            })
        })
    }
}