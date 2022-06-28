<template>
    <div>
        <h1>Editar tarefa</h1>
            <form action="#" method="post" @submit.prevent="editTodo">
                <input type="text" name="name" placeholder="name" v-model="todo.name">
                 <input type="body" name="body" placeholder="body"  v-model="todo.body">
                 <button type="submit" :disabled="todo.loading"> 
                    <span v-if="todo.loading">Aguarde...</span>
                    <span v-else>Enviar</span>


                 </button>
            </form>
    </div>
</template>

<script>

import TodosService from '../../services/todos.service'

import {onMounted, reactive} from 'vue'
import router from '@/router/index.js'
export default {
    name: 'EditTodo',
    props: {
        id: {
            require:true
        }

    },
    setup(props){
         const todo = reactive({         
            name:'',
            body:'',
        })

        onMounted(async () => {
            todo.loading = true
            TodosService.getTodo(props.id)
                        .then(response=>{
                            response.data
                            const todoR = response.data
                            todo.name = todoR.name
                            todo.body = todoR.body                            
                        })
                        .finally(todo.loading = false)

        })


          const editTodo = () => {     
              todo.loading = true         
              TodosService.editTodo(props.id,{...todo})
              .then(()=> router.push({name:'todos.index'}))
              .finally(() => todo.loading = false)
          }

          return {
              editTodo,
             todo
        
           
          }
        

    }
}
</script>