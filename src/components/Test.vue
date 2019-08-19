<template>
   <div class=''>
       <button ref="but">啦啦啦啦</button>
       <slot></slot>
    </div>
</template>

<script>
export default {
   name:'test',
   data() {
       return {
           
       };
   },
   methods: {
       
   },
   mounted() {
       console.log("component--test--mounted");
       console.dir(this.$refs.but);
       
   },
}
</script>
<style lang='less' scoped>

</style>