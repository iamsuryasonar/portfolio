<template>
  <div v-cloak class="container">
    <div class="profile-header">
      <div class="profile-content">
        <img :src="displaypicture" alt="" />
        <div>
          <h3>Surya Sonar</h3>
          <p>CS Student</p>
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
    </div>

    <div class="wrapper">
      <h2>Spotify Playlists</h2>
    </div>

    <div class="cards">
      <a v-for="(item, id) in items" :key="id" :href="item.url">
        <img class="card" :src="item.img" />
      </a>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: [],
      twitter: "https://www.twitter.com/iamsuryasonar",
      facebook: "https://www.facebook.com/iamsuryasonar",
      instagram: "https://www.instagram.com/iamsuryasonar",
      linkedin: "https://www.linkedin.com/in/iamsuryasonar",
      github: "https://www.github.com/iamsuryasonar",
      displaypicture:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-29560.appspot.com/o/displaypicture.jpg?alt=media&token=f4e817a7-4c23-45d2-bdcb-b27647f1b95c",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      firebase
        .firestore()
        .collection("alldata")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.items.push(doc.data());
          });
        });
    },
  },
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
  background-image: linear-gradient(
    to bottom right,
    rgb(194, 241, 255),
    rgb(44, 206, 255)
  );
  padding: 0 7rem;
  transform: scale(0.8);
}

.container {
  position: relative;
  max-width: 615px;
  min-width: 415px;
  width: 92%;
  margin: auto;
  background-color: #fff;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 2px 6px rgb(0, 139, 182);
  .profile-header {
    padding: 5rem;
    background-color: rgb(58, 209, 255);
    clip-path: circle(70% at 50% 0%);

    .profile-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;
      padding: 0 4rem;
      color: rgb(0, 57, 75);
      img {
        width: 6rem;
        border-radius: 50%;
        margin-right: 1rem;
      }
      div {
        h3 {
          margin-bottom: 0;
          font-size: 1.3rem;
          white-space: nowrap;
        }
        p {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    i {
      margin: 1.5rem 0.6rem;
      font-size: 1.7rem;
      color: rgb(0, 107, 139);
      cursor: pointer;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.25);
      }
    }
  }
}

//spotifycards

.wrapper h2 {
  color: #000;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.card {
  width: 190px;
  height: 190px;
  margin: 16px 16px 16px 16px;
  position: relative;
  min-width: 190px;
  background: #000;
}

// .wrapper {
//   margin-top: 0px;
// }
// .wrapper_section_2 {
//   margin-top: 10px;
// }
// .card:hover .overlayer {
//   visibility: visible;
// }
// .card img {
//   width: 100%;
//   height: 100%;
// }
// .card .overlayer {
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   background: rgba(0, 0, 0, 0.6);
//   text-align: center;
//   visibility: hidden;
// }
</style>
