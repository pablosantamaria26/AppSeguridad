importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyCD5Ji6o5t4HQo_6Hpj33Sz3PzzuH0JF9Y",
  authDomain: "app-vendedores-inteligente.firebaseapp.com",
  projectId: "app-vendedores-inteligente",
  storageBucket: "app-vendedores-inteligente.firebasestorage.app",
  messagingSenderId: "583313989429",
  appId: "1:583313989429:web:2d3663e547b609e211367c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Esto se ejecuta cuando llega una notificación y la app está cerrada/en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensaje recibido en segundo plano ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icono.png', // Asegurate de tener este logo en tu GitHub
    badge: '/icono.png',
    vibrate: [500, 200, 500, 200, 500]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
