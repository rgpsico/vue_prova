import axios from 'axios'
export default class emailService {

 
    static async send(params)
    {  
        return axios.post('/email', params)

    }

   


}