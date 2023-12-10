<template>
    <div>
        <div style=" height: 70px; padding: 20px;  box-shadow: 0 0 5px gray;">
            <el-button type="primary" style="float:right;" @click="Qxadd">添加权限</el-button>
        </div>
        <!-- 模态框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="70%">
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
                    <el-button type="primary" @click="qd">确定</el-button>
                    <el-button @click="qx">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { qxsjapi,addapi } from "@/utils/http";

export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                code: '',
                description: '',
                value: 1
            }
        };
    },
    methods: {
        Qxadd() {
            this.dialogVisible = true
        },
        qd() {
            this.$emit('qd',this.form)
            this.dialogVisible = false

        },
        qx() {
            this.dialogVisible = false

        }
    },
    computed: {},
    components: {},
    filters: {},
    watch: {},
};
</script>

<style lang="scss" scoped></style>