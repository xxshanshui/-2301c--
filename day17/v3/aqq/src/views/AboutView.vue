<template>
  <div>
    <div>
      <h1>姓：{{ person.name }}</h1>
      <h1>名：{{ person.title }}</h1>
      <h1>年龄{{ person.age }}</h1>
      <h1>爱好：{{ person.hooby }}</h1>
      <h1>职业：{{ person.job }}</h1>
      <h1>工资：{{ person.salay }}</h1>
      <button @click="qwe">++</button>
      <button @click="qwe3">++</button>
      <button @click="qwe4">新知</button>
    </div>
    <!-- <input type="text" v-model="" /> -->

    <p>{{ myqq }}</p>
    <div>{{ point }}</div>

    <!-- <qwee/> -->
  </div>
</template>

<script setup>
// import qwee from '@/components/qwe.vue'
import usePoint from "../hook/userpoint";
// import { components} from "vue";
import {
  watch,
  ref,
  reactive,
  computed,
  onBeforeUnmount,
  onMounted,
} from "vue";
import { h } from "vue";


// let car = reactive({ name: "奔驰", price: "40万" });
// provide("car", car);

// const eee = components({
//   qwee
// })

const point = usePoint();

const list = ref("");
// comst name = ref('')
const title = ref("");
const qq = ref({
  dm: "河南",
  children: [
    {
      name: "哈哈哈",
      age: "18",
    },
  ],
});
const person = reactive({
  name: "大美女",
  title: "1米8",
  age: 18,
  hooby: "抽烟,喝酒,打架",
  job: "全栈开发工程师",
  salay: 10,
});
const qwe = () => {
  console.log(1);

  person.age++;
};
const qwe3 = () => {
  console.log(1);

  person.salay++;
};
const qwe4 = () => {
  console.log(1);
  qq.dm = "北京";
};

const myqq = computed({
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
  person.job = "前端开发工程师";
});

// watch([() => qq.salay, () => qq.children[0].age], (newValue, oldValue) => {
//   qq.children[0].age= '200'
//   console.log("newValue", "oldValue");

//   // person.job = "前端开发工程师";
// });

//  const point = reactive({
//   x:0,
//   y:0,
//  })
//  const savaPoint = (event)=>{
//   console.log(event,'event');
//   point.x= event.pageX;
//   point.y= event.pageY;

//  }
// onMounted(()=>{
//   window.addEventListener('click', savaPoint)

// })
// onBeforeUnmount(()=>{
//   window.removeEventListener()('click', savaPoint)

// })
</script>
