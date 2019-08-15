<template>
   <g class='svg-rect'>
       <g>
           <rect :x="rectx" :y="recty" rx="5" ry="5" :width="width" :height="height" :style="`fill:${boxFill};stroke:${boxStroke};stroke-width:1;`"/>
       </g>
       <g>
            <text  :font-size="fontSize" ref="text" :x="rectx + 20" :y="recty + 10" :fill="fontColor" style="dominant-baseline: text-before-edge;">{{text}}</text>
       </g>
   </g>
</template>

<script>
export default {
   name:'',
   props:{
       text:{
           type:[String,Number],
           required:true,
           default:'文本框'
       },
       rectx:{
           type:[String,Number],
           default:20
       },
       recty:{
           type:[String,Number],
           default:20
       },
       boxStroke:{
           type:String,
           default:"#EEB7B7"
       },
       boxFill:{
           type:String,
           default:"#fff"
       },
       fontColor:{
           type:String,
           default:"#DF6B6B"
       },
       fontSize:{
           type:[String,Number],
           default:"14"
       },
       
   },
   data() {
       return {
           width:100,
           height:38
       };
   },
   methods: {
       
   },
   mounted() {
       this.width = this.$refs.text.getBBox().width + 40;
       this.height = this.$refs.text.getBBox().height + 20;
       this.$emit('getAttr',{
           width:this.width,
           height:this.height
       })
   }
}
</script>
<style lang='less' scoped>

</style>