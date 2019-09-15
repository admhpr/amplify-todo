<template>
  <div class="home">
    <h1>Register</h1>
    <register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";

export default {
  name: "home",
  components: {
    Register
  }
};
</script>
