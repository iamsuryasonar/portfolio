<template>
  <div class="containerproject">
    <div class="title">
      <h3>Skills</h3>
    </div>
    <div v-for="(item, id) in skillitems" :key="id">
      <div class="progress-bar">
        <div class="progress-bar-fill" :style="item.style">
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {},
  data() {
    return {
      skillitems: [
        {
          id: 1,
          style: "width: 80%;",
          text: "HTML/CSS",
        },
        {
          id: 2,
          style: "width: 75%;",
          text: "Vue Js",
        },
        {
          id: 3,
          style: "width: 55%;",
          text: "JavaScript",
        },
        {
          id: 4,
          style: "width: 60%;",
          text: "JAVA",
        },
        {
          id: 5,
          style: "width: 30%;",
          text: "Android",
        },
        {
          id: 6,
          style: "width: 50%;",
          text: "Data Structure",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

.containerproject {
  max-width: 450px;
  min-width: 450px;
  margin-top: 20vh;
  background-color: #ecf0f3;
}

span {
  font-size: 20px;
  padding: 30px 15px;
}

.progress-bar {
  border-radius: 30px;
  margin: 40px 30px;
  background: #e0e0e0;
  box-shadow: 8px 8px 10px #c3c3c3, -8px -8px 10px #fdfdfd;
}
.progress-bar-fill {
  background: gray;
  border-radius: 30px;
}
h2 {
  margin: auto;
}
.title {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: 400px;
  height: 67px;
  margin: 40px 30px;
  min-width: 160px;
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
.skillbox {
  margin: 40px 30px;
  width: auto;
  height: 50px;
  border-radius: 8px;
  background: #ecf0f3;
  box-shadow: inset 7px 7px 10px #c4c7ca, inset -7px -7px 10px #ffffff;
}
</style>
