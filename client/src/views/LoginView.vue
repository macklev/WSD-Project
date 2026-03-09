<template>
  <h1>Login</h1>
  <p>Enter your email and password to log in.</p>

  <input
    v-model="email"
    placeholder="Email"
    />
  <input
    v-model="password"
    type="password"
    placeholder="Password"
    />

  <button @click="login">Login</button>

  <p v-if="errorMessage">
    {{ errorMessage }}
  </p>

</template>

<style scoped>

</style>

<script lang="ts">

import { users } from "../data/users"
import { session } from "../stores/session"

export default {

data()
{
    return {

        email: "",
        password: "",
        errorMessage: ""

    }
},

methods: {
  login() {
    if (this.email === "" || this.password === "") {
      this.errorMessage = "Please enter both email and password.";
      return;
    }

    const user = users.find(u =>
      u.email === this.email &&
      u.password === this.password
    );

    if (!user) {
      this.errorMessage = "Invalid email or password.";
      return;
    }

    session.currentUser = user;
    this.$router.push("/DashboardView");
  }
}
}

</script>
