<template>
  <div class="containerblogs">
    <div class="title">
      <h3>Blogs</h3>
    </div>
    <div class="cardscontainer">
      <a
        class="link"
        v-for="(item, id) in carditems"
        :key="id"
        :href="item.url"
      >
        <div class="eachcard">
          <h3>{{ item.text }}</h3>
          <i class="fas fa-arrow-circle-right"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  components: {},
  data() {
    return {
      carditems: [
        {
          id: 1,
          url: "",
          text: "How to start coding?",
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

.containerblogs {
  margin: 7% auto;
  width: 90%;
  height: 100%;
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

.title {
  display: flex;
  cursor: pointer;
  width: auto;
  height: 67px;
  margin: 10px 10px 10px 10px;
  background: #ecf0f3;
  padding: 10px;
  border-radius: 6px;
  box-shadow: inset 7px 7px 10px #c4c7ca, inset -7px -7px 10px #ffffff;
}

.title h3 {
  color: #545252;
  font-size: 24px;
  margin: auto auto auto 30px;
}

.cardscontainer {
  width: auto;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.eachcard a {
  text-decoration: none;
}

.eachcard {
  display: flex;
  cursor: pointer;
  width: auto;
  height: 67px;
  margin: 10px 10px 10px 10px;
  background: #ecf0f3;
  padding: 10px;
  border-radius: 6px;
  box-shadow:  8px 8px 10px #c3c3c3,
             -8px -8px 10px #fdfdfd;
}

.eachcard:active {
box-shadow: inset 8px 8px 10px #c3c3c3,
            inset -8px -8px 10px #fdfdfd;
}

.eachcard h3 {
  font-size: 24px;
  margin: auto auto auto 20px;
}

.eachcard i {
  margin: 10px 20px 10px;
  font-size: 28px;
}

@media only screen and (max-width: 600px) {
  .containerblogs {
    width: 90%;
  }
}

@media only screen and (min-width: 768px) {
  .containerblogs {
    width: 75%;
  }
}

@media only screen and (min-width: 992px) {
  .containerblogs {
    width: 60%;
  }
}

@media only screen and (min-width: 1200px) {
  .containerblogs {
    width: 55%;
  }
}
</style>
