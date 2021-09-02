<template>
  <div class="skillscontainer">
    <div class="skillstitle">
      <h3>Skills</h3>
    </div>
    <div class="barcontainer">
    <div v-for="(item, id) in skillitems" :key="id">
      <div class="progress-bar">
        <div class="progress-bar-fill" :style="item.style">
          <span>{{ item.text }}</span>
        </div>
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
          text: "D/S & Algo",
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

.skillscontainer {
  margin: 7% auto;
  width: 90%;
  height: 100%;
}

span {
  font-size: 20px;
  padding: 30px 15px;
}

.barcontainer{
  margin-top: 3rem;
}

.progress-bar {
  border-radius: 30px;
  margin: 40px 10px;
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

.skillstitle {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: auto;
  height: 67px;
  margin: 40px 10px;
  min-width: 160px;
  background: #ecf0f3;
  padding: 10px;
  border-radius: 6px;
  box-shadow: inset 7px 7px 10px #c4c7ca, inset -7px -7px 10px #ffffff;
}

.skillstitle h3 {
  color: #545252;
  font-size: 24px;
  margin: auto auto auto 30px;
}

@media only screen and (max-width: 600px) {
  .skillscontainer {
    width: 90%;
  }
}

@media only screen and (min-width: 768px) {
  .skillscontainer {
    width: 75%;
  }
}

@media only screen and (min-width: 992px) {
  .skillscontainer {
    width: 60%;
  }
}

@media only screen and (min-width: 1200px) {
  .skillscontainer {
    width: 55%;
  }
}
</style>
