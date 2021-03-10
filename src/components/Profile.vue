<template>
  <div v-cloak class="container">
    <div class="profile-content">
      <img :src="displaypicture" alt="" />
      <div class="namediv">
        <h3>Surya Sonar</h3>
        <p>
          CS Student
          <br />
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

    <div class="wrapper">
      <h2>Spotify Playlists</h2>
    </div>
    <div class="cards">
      <a v-for="(item, id) in items" :key="id" :href="item.url">
        <div class="card">
          <img :src="item.img" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      items: [
        {
          id: 1,
          url:
            "https://open.spotify.com/playlist/7peNDAvxQjTxaqCPgffsJQ?si=3gyrqEviTHeyTmECjChX9Q",
          img: "./assets/addictivekiss.jpg",
        },
        {
          id: 2,
          url:
            "https://open.spotify.com/playlist/22UKNc2UHZ9v8sFAKA5FGM?si=x3QKJ5exTWWzUFX5Novlkw",
          img: "./assets/lastcigarrete.jpg",
        },
        {
          id: 3,
          url:
            "https://open.spotify.com/playlist/4wseglZinfy2nd4RL8WYgn?si=ZspyMkNKT56AZ8WdcsUuUQ&nd=1",
          img: "./assets/letseewhereitakes.jpg",
        },
        {
          id: 4,
          url:
            "https://open.spotify.com/playlist/3BCRherVfP5W7nxtri3wvN?si=ca6Q-1BgT1-SC8AAimHEzA",
          img: "./assets/symphonic.jpg",
        },
        {
          id: 5,
          url:
            "https://open.spotify.com/playlist/7AfRiZQytRTG91iaINvLrX?si=ZY0YlTS2QrGzWNCwmPbiew",
          img: "./assets/voicesinmyhead.jpg",
        },
        {
          id: 6,
          url:
            "https://open.spotify.com/playlist/3FPjKUhotuXl3Rlopqukcf?si=KQ-RvfgJQ_uYofRfdN1SJA",
          img: "./assets/youtosic.jpg",
        },
      ],
      twitter: "https://www.twitter.com/iamsuryasonar",
      facebook: "https://www.facebook.com/iamsuryasonar",
      instagram: "https://www.instagram.com/iamsuryasonar",
      linkedin: "https://www.linkedin.com/in/iamsuryasonar",
      github: "https://www.github.com/iamsuryasonar",
      displaypicture: "./assets/displaypicture.jpg",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

body {
  min-height: 2vh;
  overflow-x: hidden;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 10px;
  transform: scale(0.8);
}

.container {
  max-width: 600px;
  min-width: 450px;
  background-color: #ecf0f3;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 5px#ceced1;
}
.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 8vh 4vw 4vh 4vw;
}
.profile-content img {
  padding: 0.6rem;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -8px -8px 8px #ffffff, 8px 8px 8px #ceced1;
}
.namediv {
  margin: 4vh 0vw 6vh 0vw;
}
.namediv h3 {
  align-items: center;
  color: #31344b;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  margin: 8px 0px 8px 0px;
}

.namediv p {
  text-align: center;
  color: #393e46;
  margin: 0px;
  font-size: 1.3rem;
  padding: 0px;
}
.social-icons {
  display: flex;
  justify-content: center;
}
.social-icons i {
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
  margin: 4px 4px;
  font-size: 1.7rem;
  color: #31344b;
  cursor: pointer;
}

.wrapper h2 {
  color: #393e46;
  font-size: 1.6rem;
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.card {
  width: 200px;
  height: 200px;
  margin: 10px 10px 10px 10px;
  min-width: 160px;
  background: #ecf0f3;
  padding: 10px;
  border-radius: 6px;
  box-shadow: -3px -3px 7px #ffffff, 4px 4px 6px #ceced1;
}
.card img {
  width: 100%;
  height: 100%;
}
</style>