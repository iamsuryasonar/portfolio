import {createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import {firebaseConfig} from './firebaseconfig'
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')
