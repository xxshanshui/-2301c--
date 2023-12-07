<template>
    <div>
        <div style="width: 1000px; box-shadow:  0 0 5px gray; padding: 20px;">
        <el-tabs v-model="activeName" >
            <el-tab-pane label="登录账户设置" name="first">
                <yhgl :id="id"/>
            </el-tab-pane>
            <el-tab-pane label="个人信息" name="second">
                <grxx :id="id" />

            </el-tab-pane>
            <el-tab-pane label="岗位消息" name="third">
                <gwxx :id="id" />

            </el-tab-pane>
        </el-tabs>

    </div>
</div>

</template>

<script>
import yhgl from '../../components/ygck/yhgl.vue'
import grxx from '../../components/ygck/grxx.vue'
import gwxx from '../../components/ygck/gwxx.vue'
export default {
    data() {
        return {
            activeName: 'second',
            id:this.$route.query.id
        };
    },
    methods: {
        
    },
    computed: {},
    components: {
        yhgl,
        grxx,
        gwxx
    },
    filters: {},
    watch: {},
   
};
</script>

<style lang="scss" scoped></style>