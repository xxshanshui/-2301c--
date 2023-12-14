<template>
  <div>
    <asd :hobbyList="hobbyList" @qwe="qwe"></asd>
  </div>
</template>
<script>
import asd from "@/components/asd";
import { provide, ref, reactive } from "vue";
export default {
  components: {
    asd,
  },
  setup(props, ctx) {
    const car = reactive({
      name: "锐雯",
      price: "即使剑是断的，整个局面我也能hoId住",
    });
    const hobbyList = reactive({
      title: "亚索",
      message: "我在寻找回家的路",
    });
    provide("car", car);
    const qwe = (value) => {
      console.log(value, "value");
    };
    return {
      hobbyList,
      qwe,
    };
  },
};
</script>
<style lang="scss" scoped></style>
