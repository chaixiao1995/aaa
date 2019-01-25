<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>工号</th>
                    <th>姓名</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(val,key) in list" :key='key'>
                    <td>{{key+1}}</td>
                    <td>{{val.work_id}}</td>
                    <td>{{val.username}}</td>
                </tr>
            </tbody>
        </table>

        用户信息：{{userInfo.username}}------{{userInfo.work_id}}---------{{userInfo.token}}

        <br><hr><br>
        state中的数据count-----------{{this.$store.state.count}}
        <button @click="changeData">改变state数据</button>
        <button @click="changeList">改变list数据</button>

        <br><hr>
        list数据
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>工号</th>
                    <th>姓名</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(val,key) in this.$store.state.list" :key='key'>
                    <td>{{key+1}}</td>
                    <td>{{val.work_id}}</td>
                    <td>{{val.username}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
import store from '@/js/store'
import api from "@/js/config";
export default {
    data(){
        return {
            list: [],
            userInfo: this.$store.state.userInfo
        }
    },
    store,
    methods:{
        changeData(){
            store.commit('increment');
        },
        changeList(){
            store.commit('initList',this.list);
        },
        getUserList(){
            var param = {
                page: 1,
                perpage: 10,
                user_type: 3,
                organize_id: '68d920366baa4e2388a4d9927027d744'
            }
            this.$ajax.get(api.getUserList, {params:param}).then((res) => {
                if(res.data.status == 200){
                    this.list = res.data.data.list;
                    console.log(this.list)
                }else{
                    this.$message(res.data.msg,'error');
                }
            })
        }
    },
    mounted() {
        this.getUserList();
    },
}
</script>
