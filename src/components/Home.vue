<template>
  <div v-cloak class="container">
    <div class="profile-header">
      <div class="profile-content">
        <img :src="displaypicture" alt="" />
        <div>
          <h3>Surya Sonar</h3>
          <p>
            CS Student 
            <br>
            SpaceX Fanboi
          </p>
        </div>
      </div>

      <div class="social-icons">
        <a :href="twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a :href="facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a :href="instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a :href="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="github">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>

    <div class="wrapper">
      <h2>Spotify Playlists</h2>
    </div>
    <div class="cards">
      <a v-for="(item, id) in items" :key="id" :href="item.url">
        <img class="card" :src="item.img">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      
      items: [
        {id: 1, url:"https://open.spotify.com/playlist/7peNDAvxQjTxaqCPgffsJQ?si=3gyrqEviTHeyTmECjChX9Q", img:"./assets/addictivekiss.jpg"},
        {id: 2, url:"https://open.spotify.com/playlist/22UKNc2UHZ9v8sFAKA5FGM?si=x3QKJ5exTWWzUFX5Novlkw", img:"./assets/lastcigarrete.jpg"},
        {id: 3, url:"https://open.spotify.com/playlist/4wseglZinfy2nd4RL8WYgn?si=ZspyMkNKT56AZ8WdcsUuUQ&nd=1", img:"./assets/letseewhereitakes.jpg"},
        {id: 4, url:"https://open.spotify.com/playlist/3BCRherVfP5W7nxtri3wvN?si=ca6Q-1BgT1-SC8AAimHEzA", img:"./assets/symphonic.jpg"},
        {id: 5, url:"https://open.spotify.com/playlist/7AfRiZQytRTG91iaINvLrX?si=ZY0YlTS2QrGzWNCwmPbiew", img:"./assets/voicesinmyhead.jpg"},
        {id: 6, url:"https://open.spotify.com/playlist/3FPjKUhotuXl3Rlopqukcf?si=KQ-RvfgJQ_uYofRfdN1SJA", img:"./assets/youtosic.jpg"},
      ],
      twitter: "https://www.twitter.com/iamsuryasonar",
      facebook: "https://www.facebook.com/iamsuryasonar",
      instagram: "https://www.instagram.com/iamsuryasonar",
      linkedin: "https://www.linkedin.com/in/iamsuryasonar",
      github: "https://www.github.com/iamsuryasonar",
      displaypicture: "./assets/displaypicture.jpg",
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}


body {
  min-height: 1vh;
  overflow-x: hidden;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to bottom right,
    rgb(255, 94, 104),
    rgb(77, 179, 209)
  );
  padding: 0 7rem;
  transform: scale(0.8);
}

.container {
  position: relative;
  max-width: 615px;
  min-width: 300px;
  width: 90%;
  margin: auto;
  background-color: #fff;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 2px 6px rgba(0, 166, 199, 0.666);
  .profile-header {
    padding: 5rem;
    background-color: rgb(214, 90, 73);
    clip-path: circle(70% at 50% 0%);

    .profile-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;
      padding: 0 4rem;
      color: rgb(0, 57, 75);
      img {
        width: 6rem;
        border-radius: 50%;
        margin-right: 1rem;
      }
      div {
        h3 {
          margin-bottom: 0;
          font-size: 1.3rem;
          white-space: nowrap;
          font-family: 'Ubuntu Mono';
        }
        p {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          font-family: 'Ubuntu Mono';
        }
      }
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    i {
      margin: 1.5rem 0.6rem;
      font-size: 1.7rem;
      color: rgb(34, 9, 7);
      cursor: pointer;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.25);
      }
    }
  }
}


.wrapper h2 {
  color: #000;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.card {
  width: 190px;
  height: 190px;
  margin: 16px 16px 16px 16px;
  position: relative;
  min-width: 190px;
  background: #000;
}
.card .overlayer {
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(0,0,0,0.6);
	text-align: center;
	visibility: hidden;
}

.overlayer .fa-play-circle {
	color: #fff;
	font-size: 73px;
	margin-top: 53px;
	transition: 100ms ease-in-out;
}
.fa-play-circle:hover {
	transform: scale(1.1);
}
</style>
