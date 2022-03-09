
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCtDVOv-2XkyIB7BIiRSdddFrhhqixS14w",
      authDomain: "kwitter-2d35e.firebaseapp.com",
      databaseURL: "https://kwitter-2d35e-default-rtdb.firebaseio.com",
      projectId: "kwitter-2d35e",
      storageBucket: "kwitter-2d35e.appspot.com",
      messagingSenderId: "697933636144",
      appId: "1:697933636144:web:45fca401bfac31dc8643f5",
      measurementId: "G-FHPRY6CCZW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
