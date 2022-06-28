import axios from 'axios'
export default class TodosServices {

    static async getAll(){
        return axios.get('/tasks')
    }

    static async addTodo(params)
    {
        return axios.post('/task/create',params)

    }

    static async editTodo(id, params)
    {
        return axios.put(`/task/${id}/update`,params)

    }

    static async getTodo(id)
    {
        return axios.get(`task/${id}/show`)

    }

    static async deleteTodo(id)
    {
        return axios.delete(`task/${id}/delete/`)

    }

}