<template>
  <h2>vue3.0</h2>
  <p>emit:{{ mylist }}</p>
  <p>inject:{{ aaa }}</p>
  <button @click="qqq">vue3bus</button>
</template>
<script setup>
import { reactive, inject, defineEmits, defineProps } from "vue";
const props = defineProps({
  mylist: {
    type: Object,
    default: {},
  },
});
const emit = defineEmits();
const aaa = inject("wan");

const qqq = () => {
  emit("qqq", "vue3.0busss");
};
</script>
<style lang="scss" scoped></style>
