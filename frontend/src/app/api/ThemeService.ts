import { API_URL } from "."


export class ThemeService {
    static  getAll() {
        return new Promise((resolve, reject) => {
            fetch(API_URL + "/theme/get-all", {
                method: "GET",
            }).then((response) => {
                return response.json()
            }).then(data => resolve(data)).catch(err => {
                reject(err)
            })
        })
    }
}