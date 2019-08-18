<!--  -->
<template>
  <div>
      <button @click="ani">{{show ? '隐藏' : '显示'}}</button>
      <div class="animaition">
        <div ref="ani" :style="show ? 'margin-top: 0;' : aniStyle" class="animaition-margin" >
            <p>啦啦啦啦</p>
            <p>啦啦啦啦</p>
            <p>啦啦啦啦</p>
            <p>啦啦啦啦</p>
        </div>
      </div>
      <div>
          <p>下面的内容</p>
          <p>下面的内容</p>
          <p>下面的内容</p>
      </div>
  </div>
</template>

<script>
export default {
    name:"Animaition",
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