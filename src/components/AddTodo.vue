<template>
  <form v-on:submit.prevent="onSubmit">
    <input />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log("form submitted");
    },
  },
};
</script>

<style scoped>
input {
  width: 400px;
}
</style>
