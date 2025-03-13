import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase (obtén estos datos desde Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyB2bo8QNix7rfQ_w_ZHaTbaR4gEft8ly2E",
  authDomain: "conexa-56f61.firebaseapp.com",
  projectId: "conexa-56f61",
  storageBucket: "conexa-56f61.firebasestorage.app",
  messagingSenderId: "915611147329",
  appId: "1:915611147329:web:6470fd33220bd5c5f67ac0",
  measurementId: "G-Z9RR0FJ5FG"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);

// Exporta las funciones que necesitas
export { db, collection, addDoc };