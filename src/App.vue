<template>
  <div id="App">
    <h1>Todo Application</h1>
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

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
