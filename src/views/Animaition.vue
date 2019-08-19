<!--  -->
<template>
  <div>
      <button @click="ani">{{show ? '隐藏' : '显示'}}</button>
      <Test inline-template>
          <p>卡嘉華大廈丟按</p>
      </Test>
      <div class="animaition">
        <div ref="ani" :style="show ? 'margin-top: 0;' : aniStyle" class="animaition-margin" >
            <p>啦啦啦啦</p>
            <p>啦啦啦啦</p>
            <p>啦啦啦啦</p>
            <p>啦啦啦啦</p>
        </div>
      </div>
      <div v-show="false">
          <div ref="pp">
            <p>下面的内容</p>
            <p>下面的内容</p>
            <p>下面的内容</p>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import Test from "../components/Test";
export default {
    name:"Animaition",
    components:{Test},
    data () {
        return {
            show:false,
            aniStyle:'margin-top:-999px;',
            height:0
        };
    },
    mounted(){
        let height = this.$refs.ani.offsetHeight;
        this.height = height;
        this.aniStyle = `margin-top:-${ height }px;`

        let div = document.createElement("div");
        div.style = "overflow:hidden;height:0;"

        let cloneEl = this.$refs.pp.cloneNode(true)
        div.appendChild(cloneEl);
        document.body.appendChild(div) ;
        console.log(cloneEl.offsetHeight);
        document.body.removeChild(div);

        
    },
    methods: {
        ani(){
            this.show = !this.show;
        }
    }
}

</script>
<style lang="less">
    .animaition{
        outline: 2px solid #ccc;
        overflow: hidden;
        &-margin{
            transition: all 1s;
            p{
                padding: 10px;
                background-color: aquamarine;
               
            }
        }
    }
</style>