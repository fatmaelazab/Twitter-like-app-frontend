<template>
<div>
<div>
    <center>
        <br>
        <br>
  <form role="form" class="" @submit.prevent="register">
        <div align="center" style="width:400px" class="form-group">

            <h4 for="username" style="color:#38A1F3" class="control-label">Username</h4>
            <input  type="text" name="name" class="form-control" id="username" placeholder="Username" v-model="username" required="*" >
        </div>


        <br/>
        <div align="center" style="width:400px" class="form-group">
            <h4 for="email" style="color:#38A1F3" class="control-label">E-mail</h4>
            <input type="email" name="email" class="form-control" id="email" placeholder="E-mail" v-model="email" required="*">
        </div>

        <br/>
        <div align="center" style="width:400px" class="form-group">
            <h4 for="password" style="color:#38A1F3" class="control-label">Password</h4>
             <input  type="password" name="password" class="form-control" id="password" placeholder="Password" v-model="password" required="*">
        </div>
        <br/>

        <div class="row">
            <div align="center" style="width:2000px">
              <button class="btn btn-primary btn-sm" style="height:50px">Sign Up</button>
            </div>
        </div>
    </form>
    </center>
</div>
</div>

</template>

<script>
/* eslint-disable */
  export default {
      name: 'Register',
    data() {
      return {
          username: '',
          email: '',
          password: '',
          successmessages:[{msg:''}],
          failuremessages:[{msg:''}],
          message:''
      }
    },
    methods:{
        register: function ()
        {
        this.$http.post('http://127.0.0.1:8000/api/auth/register', {
        "email":this.email,
        "username":this.username,
        "password":this.password}).then((data) => {
            swal(
                'Success!',
                'User created successfully!',
                'success'
            )
            this.$router.push({path:'/Login',force:true})
                }).catch(function(reason) {
                    console.log(reason)
                    if(reason.bodyText.includes('email')){
                        this.message = reason.body.errors.email[0]
                    }
                    else{
                        this.message = reason.body.errors.password[0]
                    }
                    swal(
                        'Oops!',
                        this.message,
                        'error'
                    )
                    });
        }
    }
  }
</script>