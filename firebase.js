import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {

apiKey: "AIzaSyAfYgJpIfIDhvlXTYuXUO16UlMpWg1hQ0M",

authDomain: "yeeps-worlds.firebaseapp.com",

projectId: "yeeps-worlds",

storageBucket: "yeeps-worlds.firebasestorage.app",

messagingSenderId: "718914308574",

appId: "1:718914308574:web:63190b3429774164ab754f"

};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
