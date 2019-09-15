<template>
  <div class="home">
    <h1>VueToDo</h1>
    <todo-list :todos="todos" v-if="loggedin" />
    <login-form @submit="handleLogin" v-else />
    <p><button v-if="loggedin" @click="handleLogout">Log out</button></p>
  </div>
</template>

<script>

import TodoList from "@/components/TodoList.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "home",
  components: {
    TodoList,
    LoginForm
  },
  data() {
    return {
      loggedin: localStorage.getItem("todo_app_user") || false,
      todos: []
    };
  },
  methods: {
    handleLogout: function() {
      localStorage.removeItem("todo_app_user");
      this.loggedin = false;
    },
    handleLogin: function() {
      localStorage.setItem("todo_app_user", true);
      this.loggedin = true;
    }
  },
  mounted: function() {
    if (localStorage.getItem("todo_app_user")) {
      this.loggedin = true;
      this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    }
  }
};
</script>
