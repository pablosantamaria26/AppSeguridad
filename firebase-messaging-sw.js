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

// 1. SOLUCIÓN NOTIFICACIÓN DOBLE:
// Firebase ya crea la alerta automáticamente. Quitamos nuestro código manual.

// 2. ACCIÓN AL TOCAR LA NOTIFICACIÓN:
// Esto asegura que si el vecino toca la alerta en la pantalla de bloqueo, se abra la app.
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('./index.html'));
});

// 3. SOLUCIÓN PARA EL BOTÓN DE INSTALAR EN PC (PWA):
// Chrome y Edge exigen este evento "fetch" para validar que es una App real.
self.addEventListener('fetch', function(event) {
  // Lo dejamos vacío, pero su sola existencia habilita el botón de instalación.
});
