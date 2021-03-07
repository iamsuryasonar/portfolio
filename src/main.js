import {createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import {firebaseConfig} from './config'
 


// var Config = {
//   apiKey: "config.firebase.apiKey",
//   authDomain: "config.firebase.authDomain",
//   projectId: "config.firebase.projectId",
//   storageBucket: "config.firebase.storageBucket",
//   messagingSenderId: "config.firebase.messagingSenderId",
//   appId: "config.firebase.appId"
// };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')
