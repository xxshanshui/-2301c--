<template>
  <div  style="display: flex; justify-content: space-around;">
    <button style=" width: 150px; height: 70px; border: 0;  background: 0;" v-for="(item, index) in arr" :key="index" @click="qqww(item.qid,index)"  :class="{q:gl==index}">
      {{ item.qname }}
    </button>

    <!-- 组件 -->
    
  </div>
  <div  style=" width: 600px; height: 600px; border: 1px solid red; line-height: 600px; margin: 0 auto;  margin-top: 40px;">
  <div >
    <component :is="bl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import zj1 from "../components/dtqh/zj1.vue";
import zj2 from "../components/dtqh/zj2.vue";
import zj3 from "../components/dtqh/zj3.vue";
import zj4 from "../components/dtqh/zj4.vue";
import { ref } from "vue";
const qqww = (index:any,i:any) =>{
  bl.value = index
  gl.value=i
}
// const arr = [zj1, zj2, zj3, zj4];
const bl = ref();
const gl=ref(0)
const arr = ref([
  {
    qname: "组件1",
    qid: zj1,
  },
  {
    qname: "组件2",
    qid: zj2,
  },
  {
    qname: "组件3",
    qid: zj3,
  },
  {
    qname: "组件4",
    qid: zj4,
  },
]);
</script>
<style lang="scss">
.q{
 box-shadow: 0 0 5px gray;
}
.qq{

}
</style>
