<template>
  <div class="hello">
    <svg class="s-svg" width="100%" height="100%" @mousemove="smousemove">
      <!-- <circle id="mycircle" cx="50" cy="50" r="50" /> -->
      <!-- <path d="M32 0A240,187,0,0,0,272 187" fill="none" stroke="rgb(115, 161, 191)"></path> -->
      <path d="M10 10 H90 L55 60 Z" stroke="red" fill="none" stroke-width="2"></path>
      <path d="M10 60 C30 100,70 100,90 60" stroke="red" fill="none" stroke-width="2"></path>
      <path :d="d" stroke="black" fill="none" stroke-width="2"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      d:"M10 120"
    }
  },
  methods:{
    smouseenter(e){
      console.log(e);
      let {pageX, pageY} = e;
      this.d = `M10 120 L${pageX} ${pageY-100}`;
    },
    smousemove(e){
      // console.log(e);
      let {pageX, pageY} = e;
      //起始点 斜率
      let sy = (pageY-100) > 120 ? pageY : 120;
      // let ex = pageY > 120 ? pageY : 120;
      this.d = `M10 120 C10 ${sy},10 ${pageY - 100},${pageX} ${pageY - 100}`;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  
  height: 100%;
}
.s-svg{
  background-color: #E1E1E1;
}
</style>
