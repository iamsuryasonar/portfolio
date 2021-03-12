<template>
  <div v-cloak class="containerproject">
    <div class="cardsproject">
      <a
        class="link"
        v-for="(item, id) in carditems"
        :key="id"
        :href="item.url"
      >
        <div class="cardproject">
          <h3>{{ item.text }}</h3>
          <i class="fas fa-arrow-circle-right"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data() {
    return {
      carditems: [
        {
          id: 1,
          url: "https://github.com/iamsuryasonar/portfolio",
          text: "Portfolio",
        },
        {
          id: 2,
          url: "/",
          text: "Coding",
        },
        {
          id: 3,
          url: "/",
          text: "Coding",
        },
        {
          id: 4,
          url: "/",
          text: "Coding",
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
.containerproject {
  max-width: 450px;
  min-width: 450px;
  margin-top: 20vh;
  background-color: #ecf0f3;
  overflow: hidden;
  border-radius: 10px;
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
.cardsproject {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.cardproject a {
  text-decoration: none;
}
.cardproject {
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
.cardproject:active {
  box-shadow: 8px 8px 8px #ffffff, -8px -8px 8px #ceced1;
}
.cardproject h3 {
  font-size: 24px;
  margin: auto auto auto 20px;
}
.cardproject i {
  margin: 10px 20px 10px;

  font-size: 28px;
}
</style>