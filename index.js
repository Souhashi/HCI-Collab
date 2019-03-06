firebase.auth().signInAnonymously().catch(function(error){
var errorCode = error.Code;
var errorMessage = error.message;

});

firebase.auth().onAuthStateChanged(function(user){
if (user){
  var isAnonymous = user.isAnonymous;
  var uid = user.uid;
  showpost();
} else {

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
    
     ref.push(data)
     showpost();
}

function showpost(){
  var data = {
    PostTitle: title,
    Question: question
    }
    var counter = 0;
    var t = 't';
       var q = 'q';
    console.log(title)
    var title = document.getElementsByClassName("post");
    counter = title.length-1;
    var query = firebase.database().ref("Posts").limitToLast(6);
    query.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      
       var key = childSnapshot.key;
      
       //console.log(key);
       var childData = childSnapshot.val();
      var currentT = '';
      var currentQ = '';
      currentT = currentT.concat(t, counter);
      currentQ = currentQ.concat(q, counter);
      console.log(currentQ)
      document.getElementById(currentT).innerHTML= String(childData.PostTitle);
      document.getElementById(currentQ).innerHTML = String(childData.Question);
      counter--
       if (counter < 0){return true;}
       //console.log(childData);
    });
    
    });
}





