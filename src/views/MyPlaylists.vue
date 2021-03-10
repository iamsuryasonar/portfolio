<template>
  <div v-cloak class="containerplaylist">
    <div class="profile-content">
      <div class="wrapperplaylist">
        <h2>Playlists</h2>
      </div>
      <div class="cardsplaylist">
        <a v-for="(item, id) in items" :key="id" :href="item.url">
          <div class="cardplaylist">
            <img class="cardimage" :src="item.img" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPlaylists",
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

.containerplaylist {
  max-width: 450px;
  min-width: 450px;
  background-color: #ecf0f3;
  overflow: hidden;
  border-radius: 10px;
}
.wrapperplaylist h2 {
  color: #393e46;
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.cardsplaylist {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.cardplaylist {
  width: 170px;
  height: 170px;
  min-width: 160px;
  background: #ecf0f3;
  padding: 10px;
}
.cardimage{
  padding: 0.6rem;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -7px -7px 7px #ffffff, 7px 7px 7px #ceced1;
}
</style>