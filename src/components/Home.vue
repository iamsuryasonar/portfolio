<template>
  <div v-cloak class="container">
    <div class="profile-content">
      <img :src="displaypicture" alt="" />
      <div>
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
          <div class="overlayer">
            <i class="far fa-play-circle"></i>
          </div>
          <img :src="item.img" />
        </div>
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
  background-color: #fff;
  padding: 0 4rem;
  transform: scale(0.8);
}

.container {
  position: relative;
  max-width: 600px;
  min-width: 400px;
  margin: auto;
  background-color: #ecf0f3;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 5px#ceced1;
  .profile-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 30px 0 30px;
    img {
      padding: 0.6rem;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
    }
    div {
      padding: 0 4px 0 30px;
      h3 {
        margin-bottom: 0;
        color: #31344b;
        font-size: 1.3rem;
        white-space: nowrap;
        font-family: "Ubuntu Mono";
      }
      p {
        color: #393e46;
        margin-top: 0.5rem;
        font-size: 0.9rem;
        font-family: "Ubuntu Mono";
        direction: rtl;
      }
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    i {
      padding: 0.5rem;
      border-radius: 50%;
      box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
      margin: 4px 4px;
      font-size: 1.7rem;
      color: #31344b;
      cursor: pointer;
      transition: 0.4s ease all;
      &:hover {
        transform: scale(1.25);
      }
    }
  }
}

.wrapper h2 {
  color: #393e46;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  margin-bottom: 2rem;
}
.card {
  width: 160px;
  height: 160px;
  margin: 10px 10px 10px 10px;
  position: relative;
  min-width: 160px;
  background: #ecf0f3;
  padding: 10px;
  border-radius: 6px;
  box-shadow: -3px -3px 7px #ffffff, 4px 4px 6px #ceced1;
}
.card:hover .overlayer {
  visibility: visible;
}
.card img {
  width: 100%;
  height: 100%;
}

.card .overlayer {
  border-radius: 6px;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
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
