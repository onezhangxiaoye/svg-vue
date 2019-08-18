<!--  -->
<template>
  <div class="hello">
    <svg ref="svg" class="s-svg" width="100%" height="90vh" fill="#fff" >
        <g>
            <svgRect 
              :fontSize="item.fs" 
              :boxStroke="index_ === 0 ? '#A6C6E5' : '#EEB7B7'" 
              :boxFill="index_ === 0 ? '#D9EBFD' : '#fff'" 
              :fontColor="index_ === 0 ? '#517598' : '#DF6B6B'"
              @getAttr="getAttr($event,index)" v-for="(item,index_) in arrs" :key="item.t" :text="item.t" :rectx="item.x" :recty="item.y"></svgRect>
        </g>
    </svg>
  </div>
</template>

<script>
export default {
    name:'ssvg',
    data () {
        return {
            arrs:["真实姓名","网址","地址","电话号码"],
            svgArrs:[]
        };
    },
    mounted(){

    },
    computed: {

    },
    methods: {
        getAttr
    }
}

</script>
<style scoped>
</style>
