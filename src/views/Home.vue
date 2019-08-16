<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import qs from 'qs'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    let pa = {
      name:'',
      age:null,
      age:0,
    }
    console.dir(pa);
    console.log(qs.stringify(pa,{
        arrayFormat: 'repeat',
        allowDots: true,
        encode: true,
        skipNulls: true,
        strictNullHandling: true
    }));
    
  }
}
</script>
