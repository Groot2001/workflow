<template>
    <div>
        <v-text-field label="用户名" v-model="username"></v-text-field>
        <v-text-field label="密码" v-model="password" type="password"></v-text-field>
        <v-btn @click="signIn()">登录</v-btn>
    </div>

</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            username: '',
            password: '',
        }
    },    
    methods: {
        signIn(){
            let params = {
                username:this.username,
                password:this.password
            }

            this.$api.user.signIn(params).then(res=>{
                console.log(res);
            });
        }
    }
}
</script>    

<style scoped>

</style>