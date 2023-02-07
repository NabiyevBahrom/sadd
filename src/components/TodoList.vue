<template>
  <div>
    <h1>Todo List</h1>
    <div class="box">
      <input type="number" v-model="todoArtnumber" @click="submit" placeholder="Artnumber" />
      <input type="text" v-model="todoName" @click="submit" placeholder="Name" />
      <input type="text" v-model="todoBrand" @click="submit" placeholder="Brand" />
      <input type="text" v-model="todoWeight" @click="submit" placeholder="Weight" />
      <input type="text" v-model="todoQuentity" @click="submit" placeholder="Quentity" />
      <input type="text" v-model="todoPrice" @click="submit" placeholder="Price" />
      <input type="text" v-model="todoStock" @click="submit" placeholder="Stock" />
      <input type="submit" value="Submit" @click="addTodo" />
    </div>
    <ul>
      <li v-for="todo of todos" :class="{ done: todo.done }" :key="todo.id" @click="doneTodo(todo.id)" id="ul">
         {{ todo.artnumber }} {{ todo.name }} {{ todo.brand }} {{
          todo.weight
        }} {{ todo.quentity }} {{ todo.price }} {{ todo.stock }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3001/todos";

export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
      todoName: "",
      todoArtnumber: "",
      todoBrand: "",
      todoWeight: "",
      todoQuentity: "",
      todoPrice: "",
      todoStock: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);

      this.todos = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async doneTodo(id) {
      try {
        await axios.patch(`${baseURL}/${id}`, {
          done: true
        });

        this.todos = this.todos.map(todo => {
          if (todo.id === id) {
            todo.done = true;
          }

          return todo;
        });
      } catch (e) {
        console.error(e);
      }
    },
    async removeTodo() {
      try {
        const res = await axios.post(baseURL, { name: this.todoName, artnumber: this.todoArtnumber, stock: this.todoStock, brand: this.todoBrand, price: this.todoPrice, quentity: this.todoQuentity, weight: this.todoWeight });
        this.todos = [...this.todos, res.data];
      } catch (e) {
        console.error(e);
      }
    },
    async addTodo() {
      try {
        const res = await axios.post(baseURL, { name: this.todoName, artnumber: this.todoArtnumber, stock: this.todoStock, brand: this.todoBrand, price: this.todoPrice, quentity: this.todoQuentity, weight: this.todoWeight });

        this.todos = [...this.todos, res.data];

        this.todoName = "";
        this.todoArtnumber = "";
        this.todoBrand = "";
        this.todoPrice = "";
        this.todoQuentity = "";
        this.todoWeight = "";
        this.todoStock = "";
      } catch (e) {
        console.error(e);
      }
    }
  

}
  };
</script>

<style lang="scss" scoped>

</style>
