<template>
    <div>
        <!-- 头部 -->
        <qxheader @qd="qd" />
        <!-- 数据列表 -->
        <qxmylist :form="form" @add="add" :mytable="mytable" @qxdel="qxdel" @qdd="qdd" @bj="bj" :flag="flag" />
    </div>
</template>

<script>

// import { qxsjapi, addapi, qxdelapi } from "@/utils/http";
import * as API from "@/utils/http";
import { changeData } from "@/utils/dg";

import qxheader from '../../components/qxym/qxheader.vue';
import qxmylist from '../../components/qxym/qxmylist.vue';
export default {
    data() {
        return {
            flag: false,
            mytable: [],
            form: {
                name: '',
                code: '',
                description: '',
                id: '',
                pid: ''
            }
        };
    },
    created() {
        // const that = this
        this.getlist()
    },
    methods: {
        async getlist() {
            if (await (await API.qxsjapi()).success) {
                let res = await (await API.qxsjapi()).data
                this.mytable = changeData(res, '0')
                console.log(this.mytable);
            }


        },
          
        add(id) {
            this.flag = false
            this.form.pid = id
        },
        qd() {
            // if()
            console.log(1);
            API.addapi(this.form).then((res) => {
                console.log(res);
            })
            this.getlist()
        },

        qxdel(id) {
            API.qxdelapi({ id: id }).then(res => {
                console.log(res);
            })
            this.getlist()
        },


        bj(id) {
            this.flag=true
            API.qxhtapi({ id: id }).then(res => {
                console.log(res.data,'44444444');
                this.form = res.data
                console.log(this.form);
            })
            
            this.getlist()
        },

        qdd() {
            if (this.flag == true) {
                console.log(1);
                API.qxbjapi(this.form).then(res => {
                  console.log(res);
                })
                this.getlist()
            } else {
                // console.log(1);
                
                API.addapi(this.form).then((res) => {
                    console.log(res);
                })
                this.getlist()
            }


        }
    },
    computed: {},
    components: { qxheader, qxmylist },
    filters: {},
    watch: {},
};
</script>

<style lang="scss" scoped></style>