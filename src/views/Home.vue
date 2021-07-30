<template>
  <div class="container">
    <div class="profile-content">
      <img class="displaypicture" :src="displaypicture" alt="" />
      <div class="namediv">
        <h3>Surya Sonar</h3>
        <p>
          CS Student
          <br />
          Average homo-sapien
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
    <CardItems></CardItems>
  </div>
</template>

<script>
import CardItems from "../components/CardItems";
export default {
  name: "Home",
  components: {
    CardItems,
  },
  data() {
    return {
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
  mounted() {},
};
</script>

<style lang="css">

* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
.container {
  margin: 10px auto;
  width: 90%;
  height: 100%;
}
.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
}
.displaypicture {
  padding: 0.6rem;
  height: 8rem;
  width: 8rem;
  margin-top: 5%;
  border-radius: 50%;
  box-shadow: -8px -8px 8px #ffffff, 8px 8px 8px #ceced1;
}

.namediv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4vh 0vw 6vh 0vw;
}
.namediv h3 {
  color: #545252;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  margin: 8px 0px 8px 0px;
}

.namediv p {
  text-align: center;
  color: grey;
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
  box-shadow: 8px 8px 10px #c3c3c3, -8px -8px 10px #fdfdfd;
  margin: 4px 4px;
  font-size: 1.7rem;
  color: rgb(65, 65, 65);
  cursor: pointer;
}
.social-icons i:active {
  box-shadow: inset 8px 8px 10px #c3c3c3, inset -8px -8px 10px #fdfdfd;
}
@media only screen and (min-width: 600px) {
  .container {
    width: 60%;
  }
  .displaypicture {
    height: 8rem;
    width: 8rem;
  }
  .displaypicture {
    margin-top: 5%;
  }
}
</style>
