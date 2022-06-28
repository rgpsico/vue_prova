<template>
  <div>
    <h1>Adicionbar nova tarefa</h1>
    <form action="#" method="post" @submit.prevent="addTodo">
      <input type="text" name="name" placeholder="name" v-model="todo.name" />
      <input type="text" name="body" placeholder="body" v-model="todo.body" />
      <button type="submit" :disabled="todo.loading">
        <span v-if="todo.loading">Enviando...</span>
        <span v-else>Enviar</span>
      </button>
    </form>
  </div>
</template>

<script>
import TodosService from "../../services/todos.service";

import { reactive } from "vue";
import router from "@/router/index.js";
export default {
  name: "addTodo",
  setup() {
    const todo = reactive({
      name: "",
      body: "",
    });

    const addTodo = () => {
      TodosService.addTodo({ ...todo })
        .then(() => router.push({ name: "todos.index" }))
        .finally(() => (todo.loading = false));
    };

    return {
      addTodo,
      todo,
    };
  },
};
</script>