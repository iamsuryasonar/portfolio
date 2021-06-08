<template>
  <div>
    
  </div>
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
  methods: {
    
  },
  mounted() {
    
  },
};
</script>

<style lang="css">

* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

.container {
  max-width: 450px;
  min-width: 450px;
  background-color: #ecf0f3;
  overflow: hidden;
  border-radius: 10px;
}
.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 6vh 4vw 4vh 4vw;
}
.displaypicture {
  padding: 0.6rem;
  height: 170px;
  width: 170px;
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

</style>
