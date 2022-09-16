<template>
  <div id="App">
    <h1>Todo Application</h1>
    <AddTodo @add-todo="AddTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="compleated">Compleated</option>
      <option value="not-compleated">Not Compleated</option>
    </select>
    <br />
    <Loader v-if="setLoading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      v-on:remove-todo="remove"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "app",
  data() {
    return {
      todos: [],
      setLoading: true,
      filter: "all",
    };
  },

  computed: {
    filteredTodos() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "compleated") {
        return this.todos.filter((t) => t.compleated);
      } else if (this.filter == "not-compleated") {
        return this.todos.filter((t) => !t.compleated);
      }
    },
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => ((this.todos = json), (this.setLoading = false)));
  },

  components: {
    TodoList,
    AddTodo,
    Loader,
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
