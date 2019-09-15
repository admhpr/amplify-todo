<template>
  <form v-if="toConfirm === true && confirmed === false"></form>

  <div v-else-if="toConfirm === true && confirmed === true"></div>

  <form method="" @submit.prevent="handleSubmit" v-else>
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
      <label for="email">Email address</label><br />
      <input type="email" v-model="email" placeholder="Email" id="email" />
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

    <button type="submit">Register</button>

    <p v-if="error !== ''">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      error: "",
      toConfirm: false,
      confirmed: false
    };
  },
  methods: {
    handleSubmit: function() {
      /**
       * Just create a fake user here
       */
      localStorage.setItem("todoappuser", true);
      this.$router.go("/");
    }
  }
};
</script>
