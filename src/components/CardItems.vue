<template>
  <div class="cardsprofile">
    <a
      class="link"
      v-for="(item, id) in carditems"
      :key="id"
      :href="item.url"
    >
      <div class="cardprofile">
        <h3>{{ item.text }}</h3>
        <i class="fas fa-arrow-circle-right"></i>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardItems",
  components: {},
  data() {
    return {
      carditems: [
        {
          id: 1,
          url: "/MyPlaylists",
          text: "Playlists",
          icon: "fa fab-spotify",
        },
        {
          id: 2,
          url: "/Projects",
          text: "Projects",
          icon: "fa fab-task",
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

.wrapper h2 {
  color: #393e46;
  font-size: 1.6rem;
  text-align: center;
}
.link {
  cursor: default;
  text-decoration: none;
  color: grey;
}
.cardsprofile {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.cardprofile a {
  text-decoration: none;
}
.cardprofile {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: 400px;
  height: 67px;
  margin: 10px 10px 10px 10px;
  min-width: 160px;
  background: #ecf0f3;
  padding: 10px;
  border-radius: 6px;
  box-shadow: -8px -8px 8px #ffffff, 8px 8px 8px #ceced1;
}
.cardprofile:active{
    box-shadow: 8px 8px 8px #ffffff, -8px -8px 8px #ceced1;
}
.cardprofile h3 {
  font-size: 24px;
  margin: auto auto auto 20px;
}
.cardprofile i {
  margin: 10px 20px 10px;

  font-size: 28px;
}
</style>