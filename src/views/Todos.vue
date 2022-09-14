<template>
  <div id="App">
    <h1>Todo Application</h1>
    <AddTodo @add-todo="AddTodo" />
    <TodoList v-bind:todos="todos" v-on:remove-todo="remove" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "app",
  data() {
    return {
      todos: [],
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  },

  components: {
    TodoList,
    AddTodo,
  },
  methods: {
    remove(id) {
      console.log(id);
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    AddTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>
