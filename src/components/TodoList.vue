<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, index) of todos"
        :key="index"
        v-bind:todo="todo"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
}
</style>
