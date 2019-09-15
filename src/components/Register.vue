<template>
  <form
    v-if="toConfirm === true && confirmed === false"
    @submit.prevent="handleConfirm"
  >
    <p>You have been emailed a unique code. Please enter it below.</p>
    <p><input type="text" v-model="code" placeholder="Your code" /></p>
    <p><button type="submit">Verify me</button></p>
    <p v-if="error !== ''">{{ error }}</p>
  </form>

  <div v-else-if="toConfirm === true && confirmed === true"></div>

  <form @submit.prevent="handleSubmit" v-else>
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
import { Auth } from "aws-amplify";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      error: "",
      toConfirm: false,
      confirmed: false,
      code: ""
    };
  },
  methods: {
    handleSubmit: function() {
      /**
       * Use AWS to login now
       */
      Auth.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email
        }
      })
        .then(data => {
          this.toConfirm = true;
          this.error = "";
        })
        .catch(err => (this.error = err.message));
    },
    handleConfirm: function() {
      Auth.confirmSignUp(this.username, this.code)
        .then(res => {
          Auth.signIn(this.username, this.password)
            .then(user => {
              this.$router.go("/");
            })
            .catch(err => (this.error = err.message));
        })
        .catch(err => (this.error = err.message));
    }
  }
};
</script>
