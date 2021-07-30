<template>
    <a
      class="link"
      v-for="(item, id) in carditems"
      :key="id"
      :href="item.url"
    >
      <div class="items">
        <h3>{{ item.text }}</h3>
        <i class="fas fa-arrow-circle-right"></i>
      </div>
    </a>
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
          url: "/Projects",
          text: "Projects",
          icon: "fa fab-task",
        },
        {
          id: 2,
          url: "/Skills",
          text: "Skills",
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

.items a {
  text-decoration: none;
  
}
.items {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: auto;
  height: 8%;
  margin: 5% auto;
  background: #ecf0f3;
  padding: 10px 10px;
  border-radius: 6px;
  box-shadow:  8px 8px 10px #c3c3c3,
             -8px -8px 10px #fdfdfd;
}
.items:active{
box-shadow: inset 8px 8px 10px #c3c3c3,
            inset -8px -8px 10px #fdfdfd;
}
.items h3 {
  font-size: 24px;
  margin: auto auto auto 20px;
}
.items i {
  margin: 10px 20px 10px;
  font-size: 28px;
}
</style>