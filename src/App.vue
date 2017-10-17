<template>
  <div id="app">
    <nav>
      <span class="logo">&#x2618;</span>
      <router-link to="/" >Main </router-link>

      <router-link to="/autocomplete">Autocomplete</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body {
  margin:0;
  background: #fafafa;
}

a, a:visited, a:active {
  color: #fefefe;
  transition: color .3s;
  text-decoration: none;
  margin: 0 0 0 50px;
  outline: 0;
}

a:hover {
  color: rebeccapurple;
}

.logo {
  font-size: 60px;
  color: green;
  margin-left: 20px;
}

h1 {
  margin: 0;
  padding: 20px 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin: auto;
  background: white;
  width: 50%;
  height: 100vh;
}

nav {
  width: 100%;
  background: black;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

article {
  text-align: justify;
  padding: 20px
}

</style>
