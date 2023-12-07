<template>
    <div>
        <el-table :data="mytable" style="width: 100%;margin-bottom: 20px; margin-top: 20px;" row-key="id" border
            default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
            <el-table-column prop="name" label="名称" sortable width="180">
            </el-table-column>
            <el-table-column prop="code" label="标识" sortable width="180">
            </el-table-column>
            <el-table-column prop="description" label="描述"></el-table-column>
            <el-table-column prop="address" label="操作">
                <template slot-scope="scope">
                    <a style="margin-left: 5px; color: #409EFF;" @click="add(scope.row.id)">添加</a>
                    <a style="margin-left: 5px; color: #409EFF;" @click="bj(scope.row.id)">编辑</a>
                    <a style="margin-left: 5px; color: #409EFF;" @click="qxdel(scope.row.id)">删除</a>
                </template>
            </el-table-column>

        </el-table>


        <!-- 列表添加模态框 -->
        <el-dialog :title="flag == true ? '编辑' : '新增'" :visible.sync="dialogVisible1" width="70%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="权限名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="权限标识">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="权限描述">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="开启">
                    <template>
                        <el-switch v-model="form.type" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                    </template>

                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="qdd">确定</el-button>
                    <el-button @click="qx">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>

<script>
import { qxsjapi, addapi } from "@/utils/http";

export default {
    props: ['mytable', 'form','flag'],
    data() {
        return {
            // flag: false,
            // mytable: []
            dialogVisible1: false,

        };
    },

    methods: {
        qdd() {

            this.$emit('qdd')
            this.dialogVisible1 = false
        },
        qxdel(id) {
            this.$emit('qxdel', id)
        },
        qx() {
            this.dialogVisible1 = false
        },
        add(id) {
            this.dialogVisible1 = true
            this.$emit('add', id)
        },
        bj(id) {
            this.flag = true
            this.$emit('bj', id)
            this.dialogVisible1 = true

        }
    },
    computed: {},
    components: {},
    filters: {},
    watch: {},
};
</script>

<style lang="scss" scoped></style>