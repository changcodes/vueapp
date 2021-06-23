<template>
  <div>
      <ul v-for="(item,index) in list" :key="index+1" @click="num=index" :class="{avtive:num==index}">
          <li>{{ item }}</li>
      </ul>
      <ul v-for="(listdate,index) in listdate" :key="index" v-show="num==index">
          <li>{{ listdate }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // isshow : true
            list: ['w','q','c','d'],
            listdate: ['chang','wang','liu','jia'],
            num: 0
        }
    },
    methods: {
      
    },
    setup() {

    }
}
</script>

<style>

</style>