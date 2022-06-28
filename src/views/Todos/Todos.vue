<template>
    <h1>
        Listas de Tarefas
      <router-link :to="{name:'todos.create'}">
       create
      </router-link>
        
    </h1>
    <div v-if="loading">
        Carregando as tarefas
    </div>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
           <todo :todo="todo" @todoDeleted="removeTodoList"/>
        </li>
    </ul>
    <input type="text" v-model="name">
</template>


<script>

import {onMounted, ref} from 'vue'
import TodosService from '../../services/todos.service'
import Todo from './Todo.vue'

export default {
    name: 'Todos',
    setup(){
        const todos = ref([])
        const loading = ref(false)

        onMounted(async () => {
            loading.value = true

            TodosService.getAll()
                        .then(response=> todos.value = response.data.data)
                        .catch(error => console.log(error))
                        .finally(() => {
                        loading.value = false
                    })
            })

        const removeTodoList = (todo) =>   todos.value.splice(todos.value.indexOf(todo), 1)

        return {
            loading,
            todos,
            removeTodoList,
          
        }
    },
    components:{
        Todo
    }
}
</script>