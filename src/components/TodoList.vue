<template>
  <div>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @click="handleClick(todo.id);"
      >
        {{ todo.text }}
      </li>
    </ul>

    <router-link to="/add">Add a new todo</router-link>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  methods: {
    handleClick: function(id) {
      this.todos.map(todo => {
        todo.id === id ? (todo.completed = !todo.completed) : todo.completed;
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.completed {
  text-decoration: line-through;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
