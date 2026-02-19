importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCD5Ji6o5t4HQo_6Hpj33Sz3PzzuH0JF9Y",
  authDomain: "app-vendedores-inteligente.firebaseapp.com",
  projectId: "app-vendedores-inteligente",
  storageBucket: "app-vendedores-inteligente.firebasestorage.app",
  messagingSenderId: "583313989429",
  appId: "1:583313989429:web:2d3663e547b609e211367c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Push recibido en segundo plano:', payload);
  
  const notificationTitle = payload.notification.title || "Alerta Vecinal";
  const notificationOptions = {
    body: payload.notification.body,
    // CORRECCIÓN CRÍTICA: Quitamos la barra "/" para que no dé error 404 en GitHub Pages
    icon: 'icono.png', 
    badge: 'icono.png',
    vibrate: [500, 200, 500, 200, 500],
    requireInteraction: true // Hace que la notificación no desaparezca sola
  };
  
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// NUEVO: Esto hace que al tocar la notificación en la pantalla de bloqueo, se abra la app
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('./index.html'));
});
