<template>
  <TodoList />
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
}
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: 50%;
}
h1 {
  margin: 0;
  padding: 0;
  color: #f6b93b;
}

ul {
  margin: 0;
}

li{
  list-style: none;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 30px;
  padding: 0 2rem;
  background: #000000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  width: 50%;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid #fd9644;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
.box{
  display: flex;
}
</style>
