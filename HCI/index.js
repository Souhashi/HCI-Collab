firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
    if (document.getElementById("email_field").value != ""){
      alert("Hello");
    }
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function postpost(){
  var database = firebase.database();
    var ref = database.ref('Posts');
    var title = document.getElementById("post-title").value
    var question = document.getElementById("post-question").value
    
    var data = {
    PostTitle: title,
    Question: question
    }

    document.getElementById("post-title").value = ""
    document.getElementById("post-question").value = ""
    
    document.getElementById("question-title").innerHTML = title;
    document.getElementById("question").innerHTML = question;

    ref.push(data)
}

function login(){

  const btnLogin = document.getElementById('btnLogin')
  const btnLogout = document.getElementById('btnLogout')
  
  firebase.auth().signInAnonymously();


  
}

function Example(){
  
}

function logout(){
  firebase.auth().signOut();
}
