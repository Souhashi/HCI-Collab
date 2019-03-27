firebase.auth().signInAnonymously().catch(function(error){
    var errorCode = error.Code;
    var errorMessage = error.message;
    
    });
    
    firebase.auth().onAuthStateChanged(function(user){
    if (user){
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      showposts(8);
    } else {
    
    }
    
    });

