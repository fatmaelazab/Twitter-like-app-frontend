<template>
    <center>

        <br>
        <br>
        <br>
        <br>
        <form role="form" class="" @submit.prevent="login">
            <div align="center" style="width:400px" class="form-group">

                <h4 for="email" style="color:#38A1F3" class="control-label">Email</h4>
                <input v-validate="{ rules: { required: true} }" type="email" name="email" class="form-control"
                       id="email" placeholder="example@mail.com" v-model="email" required="*" >
                <!-- <span v-show="errors.has('title')">{{ errors.first('title') }}</span> -->

            </div>
            <br/>
            <div align="center" style="width:400px" class="form-group">
                <h4 for="password" style="color:#38A1F3" class="control-label">Password</h4>
                <input v-validate="{ rules: { required: true} }" type="password" name="password"
                       class="form-control" id="password" placeholder="password" v-model="password" required="*">
                <!-- <span v-show="errors.has('price')">{{ errors.first('price') }}</span> -->
             </div>

            <div class="row">

                <div align="center" style="width:2000px">
                    <br>
                    <center>   
                         <button class="btn btn-primary btn-sm" style="width:100px">Login</button></center>
                </div>
            </div>
        </form>
    </center>
</template>


<script>
/* eslint-disable */
import axios from 'axios';
export default {
            name: 'Login',
        data () {
            return {
                email:'',
                password:'',
                message:''
            }
        },
        methods:{
            login : function()   {

                this.$http.post('http://127.0.0.1:8000/api/auth/login', {
        "email":this.email,
        "password":this.password}).then((data) => {
            const token = data.body.token;
            localStorage.setItem('token', token);
            swal(
                'Success!',
                'You are now logged in!',
                'success'
            )
            this.$router.push({path:'/NewsFeed',force:true})
            setTimeout("location.reload(true)",1000)
                }).catch(function(reason) {
                    console.log(reason)
                    swal(
                        'Oops!',
                        reason.body.message,
                        'error'
                    )
                    });
        }
  
        }
    
}
</script>
