<template>
  <div>
    <props :qwe="qwe" />
  </div>
</template>

<script setup lang="ts">
import props from '../components/propsa/props.vue'
import { reactive } from "vue";
const qwe = reactive({
  qqname: "美人",
  job: "技师",
});
</script>
