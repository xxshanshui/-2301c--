<template>
  <div>
    <div>
      <h1>姓：{{ person.name }}</h1>
      <h1>名：{{ person.title }}</h1>
      <h1>年龄{{ person.age }}</h1>
      <h1>爱好：{{ person.hooby }}</h1>
      <h1>职业：{{ person.job }}</h1>
      <h1>工资：{{ person.salay }}</h1>
      <button @click="rty">年龄++</button>
      <button @click="rrr">薪水++</button>
      <button @click="hhh">新知</button>
    </div>

    <p>{{ sb }}</p>
    <div>{{ point }}</div>
  </div>
</template>

<script setup>
import usePoint from "../hook/userpoint";
import {
  watch,
  ref,
  reactive,
  computed,
  onBeforeUnmount,
  onMounted,
} from "vue";
const point = usePoint();
const qq = ref({
  dq: "内蒙古",
  children: [
    {
      name: "哈哈哈",
      age: "18",
    },
  ],
});
const person = reactive({
  name: "小蜥蜴",
  title: "1米",
  age: 18,
  hooby: "抽烟,喝酒,打架",
  job: "全栈开发工程师",
  salay: 10,
});
const rty = () => {
  console.log(1);

  person.age++;
};
const rrr = () => {
  console.log(1);

  person.salay++;
};
const hhh = () => {
  console.log(1);
  qq.dq = "北京";
};

const sb = computed({
  get() {
    return person.name + "-" + person.title;
  },
  set(value) {
    console.log(value);
  },
});

watch(
  () => person.age,
  (newValue, oldValue) => {
    person.salay = newValue;
    console.log("newValue", "oldValue");
  }
);

watch([() => person.salay, () => person.job], (newValue, oldValue) => {
  person.job = "黑心开发工程师";
});
</script>
