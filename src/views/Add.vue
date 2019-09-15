<template>
  <div class="about">
    <h1>Add a new Todo</h1>

    <p>
      <textarea
        v-model="text"
        placeholder="Add a todo here"
        rows="5"
        cols="20"
      ></textarea>
    </p>
    <p><button type="button" @click="handleSubmit();">Add todo</button></p>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleSubmit: function() {
      const currentTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const newTodo = {
        id: currentTodos.length + 1,
        text: this.text,
        completed: false
      };
      localStorage.setItem(
        "todos",
        JSON.stringify(currentTodos.concat(newTodo))
      );
      this.$router.push("/");
    }
  }
};
</script>
