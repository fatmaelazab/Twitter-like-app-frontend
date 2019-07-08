<template>
<div>  
 <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
<b-carousel-slide>
        <img
          slot="img"
          width="1440"
          height="720"
          src="../../public/cover2.001.jpeg"
          alt="image slot"
        >
</b-carousel-slide>
<b-carousel-slide>
        <img
          slot="img"
          width="1440"
          height="720"
          src="../../public/twitter.001.jpeg"
          alt="image slot"
        >
</b-carousel-slide>
    </b-carousel>
  </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <center>
        <font size="7">See What's Happening</font>
    <br>
    <br>
    <br>
    <b-button pill variant="primary" size="lg" @click="$router.push('/Register')">Explore</b-button>
    </center>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
<div style="background-color:LightCoral;">
    <br>
    <br>
    <br>
    <center>
        <h2 style="color:white;">See What People</h2>
        <font style="color:white;" size="7">are talking about.</font>
        <br>
    <br>
    <br>
    </center>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
<b-carousel-slide>
        <img
          slot="img"
          width="1440"
          height="720"
          src="../../public/t1.png"
          alt="image slot"
        >
</b-carousel-slide>
<b-carousel-slide>
        <img
          slot="img"
          width="1440"
          height="720"
          src="../../public/t2.png"
          alt="image slot"
        >
</b-carousel-slide>
    </b-carousel>
<br>
<br>
<br>
<br>
<b-container class="bv-example-row">
  <b-row>
    <b-col>
  <b-card
    title="Go #BehindTheTweets with the unofficial mayor of Twitter, @chrissyteigen"
    tag="article"
    style="max-width: 20rem;margin:5px;"
    class="mb-2"
  >
    <b-button href="https://twitter.com/Twitter/status/1092845570694307842" variant="primary">Go #BehindTheTweets</b-button>
  </b-card>
    </b-col>
    <b-col>
    <b-card
    title="What song from #ShawnMendesTheAlbum was @ShawnMendes most excited about?"
    tag="article"
    style="max-width: 20rem;margin:5px;"
    class="mb-2"
  >
    <b-button href="https://twitter.com/TwitterMusic/status/999677191494479872" variant="primary">Go #BehindTheTweets</b-button>
  </b-card>
    </b-col>
        <b-col>
   <b-card
    title="Going #BehindTheTweets with @zaralarsson confirms she has some serious appreciation for:"
    tag="article"
    style="max-width: 20rem;margin:5px;"
    class="mb-2"
  >
    <b-button href="https://twitter.com/TwitterMusic/status/1060267095630508033" variant="primary">Go #BehindTheTweets</b-button>
  </b-card>
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
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
