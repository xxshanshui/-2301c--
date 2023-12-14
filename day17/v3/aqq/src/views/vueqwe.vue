<template>
  <qwe :mylist="mylist" @qqq="qqq"></qwe>
</template>
<script setup>
import qwe from "@/components/qwe";
import { provide, reactive } from "vue";
const wan = reactive({
  name: "人才市场",
  age: 99,
});
provide("wan", wan);
const mylist = reactive({
  name: "嘻嘻嘻",
  hobby: "love",
});
const qqq = (value) => {
  console.log(value, "value");
};
</script>
<style lang="scss" scoped></style>
