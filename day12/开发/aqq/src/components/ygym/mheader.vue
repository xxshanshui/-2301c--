<template>
    <div>
        <div
            style=" height: 70px; line-height: 70px; display: flex; justify-content: space-between;  box-shadow: 0 0 5px gray;">
            <div>
                <el-button type="primary" plain style="margin-left: 10px;">!共16条记录</el-button>
            </div>
            <div style="margin-right: 10px;">
                <el-button type="danger">简单表头导出</el-button>
                <el-button type="info">复杂表头导出</el-button>
                <el-button type="success">excel表头导出</el-button>
                <el-button type="primary">新增员工</el-button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
 data() {
     return {};
 },
 methods: {},
 computed: {},
 components: {},
 filters: {},
 watch: {},
};
</script>

<style lang="scss" scoped>

</style>