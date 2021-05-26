<template>
  <div class="bg">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/intake">Intake</router-link> |
      <router-link to="/survivors">Survivors</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import css from "./assets/main.css";
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
}

#nav {
  left: 0;
  top: 0;
  padding: 0.5em;
  text-align: left;
  background-color: #4c8baf;
  width: 20%;
  border-radius: 0 0 15px;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.5);
  position: absolute;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
.bg {
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

a {
  text-decoration: none;
}
#nav a:hover {
  color: rgb(255, 255, 255);
  text-decoration: underline;
}
</style>
