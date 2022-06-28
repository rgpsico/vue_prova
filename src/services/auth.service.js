import axios from 'axios'
export default class authService {

 
    static async login(params)
    {
        return axios.post('/auth/login',params)

    }

    static async createUser(params)
    {
        return axios.post('/user',params)

    }


}