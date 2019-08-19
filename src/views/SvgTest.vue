<template>
    <svg ref="svg" class="s-svg" width="100%" height="90vh" fill="#fff" >
       <listRect @getPoint="getPoint" v-for="(item,index) in params.children" :key="index" :lists="item.children"/>
   </svg>
</template>

<script>
import listRect from "../components/svg/list-rect";
export default {
    name:'SvgTest',
    components:{listRect},
    data() {
        return {
            params:{
                title:'我是一个标题',
                children:[
                {
                    title:'我是一个标题',
                    children:["真实姓名","网址","地址","电话号码"]
                },
                {
                    title:'我是一个标题',
                    children:["真实姓名","网址","地址","电话号码"]
                },
                {
                    title:'我是一个标题',
                    children:["真实姓名","网址","地址","电话号码"]
                },
                ]
            },
            listRect:[]
        };
    },
    methods: {
        getPoint(e){
            this.listRect.push(e);
            if (this.listRect.length === this.params.children.length) {
                this.$refs.svg.offsetWidth = 1;
            }
        } 
    },
    mounted() {
        
    },
}
</script>
<style lang='less' scoped>

</style>