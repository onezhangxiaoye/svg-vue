<template>
    <svg ref="svg" class="s-svg" width="100%" height="90vh" fill="#fff" >
      <g>
          <path fill="none" stroke="#B3B3B3" v-for="(item,index) in pathArrs" :key="index" :d="item" />
      </g>
      <g>
          <svgRect 
            @getAttr="getAttr($event,index,item)" 
            v-for="(item,index) in params" 
            :key="item.t" 
            :text="item.t"
            :rectx="item.x" 
            :recty="item.y"
          ></svgRect>
      </g>
    </svg>
</template>

<script>
//左边距
const left = 10;
//上边距
const top = 10;
//左边线长度
const lineWidth = 20;
import svgRect from "../components/svg/svg-rect";
export default {
    name:'ssvg',
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
    },
    data () {
        return {
          params:[
            {t:"真实姓名",x:0,y:0,width:0,height:0},
            {t:"网址",x:0,y:0,width:0,height:0},
            {t:"地址",x:0,y:0,width:0,height:0},
            {t:"电话号码",x:0,y:0,width:0,height:0}
          ],
          pathArrs:[]
        };
    },
    methods:{
      getAttr(e,i,item){
        let {x,y} = this;
        this.$set(this.params,i,{
          t: item.t,
          ...e,
          x: x + left,
          y: y + top * (i + 1) + e.height * i
        })
        if(i === this.params.length - 1) this.trimPathArrs();
      },
      trimPathArrs(){
        let arrs = this.params.map(val => `M${val.x + val.width/2} ${val.y + val.height/2}L${val.x - lineWidth} ${val.y + val.height/2}Z`);
        let point = this.getStr(arrs[0]);
        arrs.push(`M${point}L${this.getStr(arrs[arrs.length - 1])}Z`);
        this.$emit("getPoint",point)
        this.pathArrs = arrs;
      },
      getStr(str){
        return str.substring(str.lastIndexOf("L") + 1,str.length - 1);
      }
    }
}
</script>