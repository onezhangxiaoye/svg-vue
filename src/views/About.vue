<template>
  <div class="hello">
    <svg ref="svg" class="s-svg" width="100%" height="90vh" fill="#fff" >
      <g>
        <path fill="none" stroke="#B3B3B3" v-for="(item,index) in pathArrs" :key="index" :d="item" />
      </g>
      <g>
        <svgRect fontSize="18" ref="title" :text="testData.title" :rectx="titleX" boxStroke="#BEDFAE" boxFill="#DDF9D0" fontColor="#6DB14D"></svgRect>
        <g :ref="'chil' + index" v-for="(arr,index) in gs" :key="index">
            <svgRect 
              :fontSize="item.fs" 
              :boxStroke="index_ === 0 ? '#A6C6E5' : '#EEB7B7'" 
              :boxFill="index_ === 0 ? '#D9EBFD' : '#fff'" 
              :fontColor="index_ === 0 ? '#517598' : '#DF6B6B'"
              @getAttr="getAttr($event,index,index_)" v-for="(item,index_) in arr" :key="item.t" :text="item.t" :rectx="item.x" :recty="item.y"></svgRect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
//设置最小字体
const fontSize = 14;

import svgRect from "../components/svg/svg-rect";
export default {
  name:'about',
  components:{svgRect},
  props: {
    msg: String
  },
  data(){
    return{
      d:"M10 120",
      testData:{
        title:"案件编号/手机号/身份证号",
        arrs:[
          ['顺丰详情',"真实姓名","网址","地址","电话号码",],
          ['顺丰详情',"真实姓名","网址","地址","电话号码",],
          ['顺丰详情',"真实姓名","网址","地址","电话号码",],
          ['顺丰详情',"真实姓名","网址","地址","电话号码",],
          ['顺丰详情',"真实姓名","网址","地址","电话号码",],
        ],
      },
      viewWidth:0,
      pathArrs:[],
      widthArrs:[],
      titleX:0
    }
  },
  mounted(){
    let {$refs:{svg, title}} = this;
    this.viewWidth = svg.clientWidth;

    //获取title
    let width,height,y;
    ({width,height,y} = title.$el.getBBox());
    this.titleX = svg.clientWidth/2 - width/2;
    this.pathArrs.push(`M${svg.clientWidth/2} ${height/2 + y} L${svg.clientWidth/2} ${height + y + 50} Z`);

    let transverseLine = ''
    this.gs.forEach((element,index_) => {
      let x_ = element[0].height/2 + element[0].x;
      let lastElement = element[element.length - 1];
      this.pathArrs.push(`M${x_} ${height + y + 50}L${x_} ${element[0].y +element[0].height + 10}L${lastElement.x - 20} ${element[0].y +element[0].height + 10}L${lastElement.x - 20} ${lastElement.height/2 + lastElement.y}`);
      if (index_ === 0) {
        transverseLine = `M${x_} ${height + y + 50}`
      }
      if(index_ === this.gs.length - 1){
        transverseLine = `${transverseLine}L${x_} ${height + y + 50}Z`
        this.pathArrs.push(transverseLine);
      }
      element.forEach((element_,index) => {
        if (index) {
          let {width,height,x,y} = element_;
          this.pathArrs.push(`M${this.getCenter(x,y,width,height)} L${x - 20} ${height/2 + y} Z`);
        }
      });
    });

  },
  computed:{
    gs(){
      let {testData:{arrs},viewWidth,widthArrs} = this;
      let len = arrs.length;
      let width = viewWidth / (len + 1);
      return arrs.map((val,index) => val.map((val_,index_) => {
        return {
          t: val_,
          x: width * (index + 1) - 50,
          y: 150 + 38 * index_ + 20 *(index_ === 0 ? 0 : 1) + 10 * (index_ > 1 ? (index_ - 1) : 0),
          width: widthArrs[index] ? widthArrs[index][index_].width : 0,
          height: widthArrs[index] ? widthArrs[index][index_].height : 0,
          fs: index_ ? fontSize : (fontSize + 2)
        }
      }))
    },
    data__(){
      let d = {
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
      }
    }
  },
  methods:{
    getAttr(e,index,index_){
      let gs = this.gs;
      gs[index*1][index_*1] = {...e};
      this.widthArrs = gs;
    },
    getCenter(x,y,width,height){
      return `${width/2 + x} ${height/2 + y}`
    }
  }
}
</script>

<style scoped>
.hello{
  height: 100%;
  border: 2px solid #ccc;
}
.s-svg{
  /* background-color: #E1E1E1; */
}
</style>
