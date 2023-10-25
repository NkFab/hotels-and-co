import { API } from "./axios.config";

export class HotelsAndCo {
    private api = new API();

    getProperties = (page: number, limit: number): Promise<any> => {
        return this.api.get(`/properties?page=${page}&limit=${limit}`, (res) => {
            return {
                page, 
                data: res
            }
        })
    }

    getOneProperty = (id: string): Promise<any> => {
        return this.api.get(`/properties/${id}`, (res) => res)
    }  
}
 

