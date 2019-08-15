<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p v-for="arr in arrs">{{arr}}</p>
    <button v-on:click="nextTickTest">nextTick--$nextTick-TEST</button>
    <button v-on:click="arrayTest">$set--Array-TEST</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      message:'',
      arrs:[1,2,3,4]
    }
  },
  methods:{
    nextTickTest(){
      this.message  = new Date().getTime();
      this.$nextTick().then(res => {
        console.log("更新啦啦啦啦");
      })
    },
    arrayTest(){
      // this.arrs[2] = new Date().getTime();  //更新失败

      this.$set(this.arrs, 2, new Date().getTime()); //更新成功
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
