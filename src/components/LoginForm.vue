<template>
  <form method="" @submit.prevent="handleSubmit">
    <h1>Login here</h1>

    <p>
      <label for="username">Username</label><br />
      <input
        type="text"
        v-model="username"
        placeholder="Username"
        id="username"
      />
    </p>

    <p>
      <label for="password">Password</label><br />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        id="password"
      />
    </p>

    <button type="submit">Login</button> [<router-link to="/register"
      >Register</router-link
    >]
  </form>
</template>

<script>
import Router from "vue-router";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit: function() {
      /**
       * For now, just set a fake value in localStorage
       * Then redirect this page now
       */
      this.$emit("submit");
    }
  }
};
</script>
