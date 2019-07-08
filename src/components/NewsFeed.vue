
<template>
<!-- eslint-disable -->
  <div>
      <div>
      <br>
      <br>
<b-container class="bv-example-row">
  <b-row>
    <b-col sm="6" offset="3">
    <b-form-textarea
      id="textarea"
      v-model="tweet"
      placeholder="What's happening?"
      rows="3"
      max-rows="6"
      style="margin:5px;"
    ></b-form-textarea>
<b-button style="margin:5px;" pill variant="primary" size="lg" @click="postTweet">Share</b-button>
    <!-- <pre class="mt-3 mb-0">{{ text }}</pre> -->
    </b-col>
  </b-row>
</b-container>
</div>

<div style="background-color:LightCoral;">
    <hr>
<br>
<font style="color:white;" size="7">Tweets</font>

    <!-- <v-layout> -->
<!-- <v-flex xs8 sm8 offset-sm3 style="margin:5px;max-width:100%;">
    <div class="row">
      <b-card
    v-for="t in tweets"
    :title="t.tweet"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{t.username}}
    </b-card-text>
    <hr>
    <p>{{t.created_at}}</p>
  </b-card>
</div>
   </v-flex>      -->

<br>
<br>
<b-container class="bv-example-row">
  <b-row>
    <b-col sm="6" offset="3">
       <b-list-group>
           <b-list-group-item v-for="t in tweets" > <br>{{ t.tweet }}  <br> By:  {{t.username}}  <br> On {{t.created_at}} </b-list-group-item>

       </b-list-group>
    </b-col>
  </b-row>
</b-container>

<br>
<br>
<br>
<br>
<br>
<br>

</div>


  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
        tweet: '',
        tweets: [],
       
      }
    },
    created(){
        this.getTweets();

    }
    ,
    methods: {
        postTweet: function(){
            const token = localStorage.getItem("token");
            this.$http.post('http://127.0.0.1:8000/api/postTweet?token=' + token, {
            "tweet":this.tweet}).then((data) => {
                // swal(
                //     'Success!',
                //     'Tweet Posted successfully!',
                //     'success'
                // )
                this.getTweets();
                this.$router.push({path:'/NewsFeed',force:true})
                this.tweet=""
                //  setTimeout("location.reload(true)",800)
                    }).catch(function(reason) {
                        console.log(reason)
                        swal(
                            'Oops!',
                            'You Need To Login!',
                            'error'
                        )
                        });
        },
        getTweets: function(){
            const token = localStorage.getItem("token");
            this.$http.get('http://127.0.0.1:8000/api/getTweets?token=' + token).then((result) => {
                this.tweets = result.body.data
                    console.log(this.tweets)
              }).catch(function (reason) {
                  swal(
                      'Oops!',
                      reason.body.data,
                      'error'
                  )
              });
        }
    }
  }
</script>