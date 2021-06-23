<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ count }}</div>
    <div>{{ adds }}</div>
    <ul v-for="lists in list" :key="lists.id">
      <li @click="updataAdd()">{{ lists.id }}</li>
      <li>{{ lists.name }}</li>
      <li>{{ lists.age }}</li>
    </ul>
    <button @click="add()">自增</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      id:2
    }
  },
  methods: {  
    add() {
      this.count ++
      this.adds ++
    },
    updataAdd() {
      alert('我不需要弹框')
      this.list.map(t => {
        t.id = 1,
        t.name = 2,
        t.age = 3
      })
    }
  },
  setup(){
    const adds = 0
    const count = ref(0)
    const list = reactive([
        {
          id:1,name:'chang',age:18
        },
        {
          id:2,name:'wang',age:20
        },
        {
          id:3,name:'liu',age:27
        }
     ])
    return {
      adds,
      count,
      list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
