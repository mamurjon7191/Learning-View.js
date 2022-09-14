<template class="big">
  <li class="listItem">
    <span v-bind:class="{ done: todo.compleated }">
      <input type="checkbox" v-on:change="todo.compleated = !todo.compleated" />
      <strong>{{ todo.id }}</strong>
      {{ todo.title }}
    </span>
    <button
      type="submit"
      class="remove"
      v-on:click="$emit('remove-todo', todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.listItem {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1rem;
  width: 50%;
  margin-bottom: 10px;
}
.remove {
  width: 30px;
  height: 30px;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
  border-radius: 50%;
}
.done {
  text-decoration: line-through;
}
</style>
