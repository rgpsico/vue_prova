<template>
    <div>
        <input type="checkbox" :checked="completed">
        {{ todo.name}} - {{todo.price}}
        <router-link :to="{name: 'todos.edit', params:{id:todo.id}}">edit</router-link>
         <a href="#" @click.prevent="deleteTodo">Delete</a>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import TodosServices from '../../services/todos.service'
export default {
    name: 'Todo',
    props: {
        todo:{
        require: true,
        type: Object,
        }
    },
    setup(props, {emit}) {
        const completed = computed(()=>{
            props.todo.completed === 'S'
        })
        const deleteTodo = () => {
            TodosServices.deleteTodo(props.todo.id)
                        .then(() => emit('todoDelete', props.todo))
        } 

        return {
            deleteTodo,
            completed
        }

    }
}
</script>