<template>
  <div id="App">
    <h1>Todo Application</h1>
    <AddTodo />
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
      todos: [
        { id: 1, title: "Find Pictures", compleated: false },
        { id: 2, title: "Drow Pictures", compleated: false },
        { id: 3, title: "Cut Pictures", compleated: false },
      ],
    };
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
