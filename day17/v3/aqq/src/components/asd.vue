<template>
    <h2>vue2.0</h2>
    <p>inject:{{ car }}</p>
    <p>attrs:{{ qwlist }}</p>
    <button @click="goTwo">vue2.0bus</button>
</template>
<script>
import { defineProps,inject,defineEmits } from "vue"
export default {
    setup(props,ctx){
        const qwlist = ctx.attrs.hobbyList
        // console.log(ctx.attrs.hobbyList);
        console.log(ctx,'ctx');
        // console.log(props,'props');
        const car = inject('car')
        const goTwo = (()=>{
            console.log(11);
           ctx.emit('qwe','vue2.0busssssss')
        })
        return{
            car,
            qwlist,
            goTwo
        }
}
}
</script>
<style lang='scss' scoped>
</style>