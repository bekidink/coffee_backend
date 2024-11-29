const admin = require("firebase-admin");
const path = require("path");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(
    require("../config/new.json")
  ), // Path to your service account key
  storageBucket: "flutter-ecom-5c997.appspot.com", // e.g., 'your-app.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = bucket;
