import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAhqLMdz6-ZEH8F9LcGLANXm2pQhujL32Q",
    authDomain: "netflix-clone-user-data.firebaseapp.com",
    databaseURL: "https://netflix-clone-user-data-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-user-data",
    storageBucket: "netflix-clone-user-data.appspot.com",
    messagingSenderId: "633142807431",
    appId: "1:633142807431:web:433327e25f53e5befb2122",
    databaseURL: "https://netflix-clone-user-data-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);