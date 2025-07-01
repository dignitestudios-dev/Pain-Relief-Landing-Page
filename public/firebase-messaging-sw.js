// Import Firebase scripts
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js"
);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5HA8Lrl71F_9ENfHMETU0UNZeusMnG24",
  authDomain: "pain-relief-bcf38.firebaseapp.com",
  projectId: "pain-relief-bcf38",
  storageBucket: "pain-relief-bcf38.firebasestorage.app",
  messagingSenderId: "549752441272",
  appId: "1:549752441272:web:1f8a7813984534f8ace74d",
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
let messaging = firebase.messaging();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      // Ensure Firebase Messaging has the registration before requesting a token
      messaging = firebase.messaging();
      messaging.useServiceWorker(registration);

      // Now request the FCM token
      return messaging.getToken();
    })
    .then((token) => {
      console.log("FCM Token:", token);
    })
    .catch((error) => {
      console.error("Error getting FCM token:", error);
    });
} else {
  console.warn("Service workers are not supported in this browser.");
}

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png", // Optional: add an icon for your notifications
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
