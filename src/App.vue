<template>
  <div id="app">
  <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
    <img src="../public/logo.png" ALT="some text" WIDTH=60 HEIGHT=60>
    <b-navbar-brand href="/" v-show="!this.user.authenticated" ><b>Twitter</b></b-navbar-brand>
    <b-navbar-brand href="/" v-show="this.user.authenticated" ><b>{{user.name}}</b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

      <b-button pill variant="primary" style="margin:5px;" v-show="!this.user.authenticated" @click="$router.push('/Register')">Sign Up</b-button>
      <b-button pill variant="primary" style="margin:5px;"  v-show="this.user.authenticated" @click="$router.push('/NewsFeed')">News Feed</b-button>
      <b-button pill variant="primary" style="margin:5px;"  v-show="this.user.authenticated" @click="logout">Logout</b-button>
      <b-button pill variant="primary" style="margin:5px;" v-show="!this.user.authenticated" @click="$router.push('/Login')">Login</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div>
<router-view></router-view>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import Register from './components/Register.vue'
import Header from './components/Header.vue'

export default {
  data(){
    return {
        user: {
        name: "",
        authenticated: false,
      }
    }
  },
  created(){
  const token = localStorage.getItem("token");
    if (token != null) {
      this.user.authenticated = true;
      console.log(token)
      this.$http
        .get("http://127.0.0.1:8000/api/user?token=" + token)
        .then(result => {
          console.log(result)
          this.user.name = result.body.data.username;
        })
        .catch(function(reason) {
          swal("Oops!", reason.body.data, "error");
        });
    }
  },
  methods: {
    logout: function() {
      const token = localStorage.getItem("token");
      this.$http
        .get("http://127.0.0.1:8000/api/auth/logout?token=" + token)
        .then(result => {
          localStorage.removeItem("token");
          this.user.authenticated = false;
          this.user.name = "";
          swal( 'Success!',
                'You are now logged Out!',
                'success')
          this.$router.push({ path: "/", force: true });
        })
        .catch(function(reason) {
          console.log(reason)
          swal("Oops!", reason.body.data, "error");
        });
    }
  },
  name: 'app',
  components: {
    Register,
    Header,

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
