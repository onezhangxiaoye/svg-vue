<template>
   <g ref="svgg" class=''>
      <g>
          <path fill="none" stroke="#B3B3B3" v-for="(item,index) in pathArrs" :key="index" :d="item" />
      </g>
      <g>
          <svgRect 
            @getAttr="getAttr($event,index,item)" 
            v-for="(item,index) in lists__" 
            :key="item.t" 
            :text="item.t"
            :rectx="item.x" 
            :recty="item.y"
          ></svgRect>
      </g>
   </g>
</template>

<script>
//左边距
const left = 10;
//上边距
const top = 10;
//左边线长度
const lineWidth = 20;
import svgRect from "./svg-rect";
export default {
    name:'lists__-rect',
    components:{svgRect},
    props:{
        x:{
            type:[Number,String],
            default:20
        },
        y:{
            type:[Number,String],
            default:20
        },
        lists:{
            type:Array,
            default(){
                return [];
            },
            validator:val => val.length === 0 || val.every(va => typeof va === "string")
        },
    },
    data() {
        return {
          pathArrs:[]
        };
    },
    computed:{
        lists__(){
            return this.lists.map(val => {
                return {t:val,x:0,y:0,width:0,height:0};
            })
        }
    },
    methods:{
      getAttr(e,i,item){
        let {x,y} = this;
        this.$set(this.lists__,i,{
          t: item.t,
          ...e,
          x: x + left,
          y: y + top * (i + 1) + e.height * i
        })
        if(i === this.lists__.length - 1) this.trimPathArrs();
      },
      trimPathArrs(){
        let arrs = this.lists__.map(val => `M${val.x + val.width/2} ${val.y + val.height/2}L${val.x - lineWidth} ${val.y + val.height/2}Z`);
        let point = this.getStr(arrs[0]);
        arrs.push(`M${point}L${this.getStr(arrs[arrs.length - 1])}Z`);
        let {width, height, x, y} = this.$refs.svgg.getBBox();

        this.$emit("getPoint",{point,width, height, x, y});
        this.pathArrs = arrs;
      },
      getStr(str){
        return str.substring(str.lastIndexOf("L") + 1,str.length - 1);
      }
    }
}
</script>
<style lang='less' scoped>

</style>