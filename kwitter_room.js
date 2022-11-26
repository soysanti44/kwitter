
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD2mKONfEZihLqKrEUT6A6HBsi_LOAuUkk",
      authDomain: "kwitter-38014.firebaseapp.com",
      databaseURL: "https://kwitter-38014-default-rtdb.firebaseio.com/",
      projectId: "kwitter-38014",
      storageBucket: "kwitter-38014.appspot.com",
      messagingSenderId: "622903190856",
      appId: "1:622903190856:web:16ff50b13b12ab9903ff7d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
