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
    let numOfPosts = firebase.database().ref("Posts").limitToLast(1);
    sessionStorage.setItem("a1", title);
    sessionStorage.setItem("a2", question);
    window.location.href = "question.html?selected=" + "a1a2";
  //RefreshPosts(8);
}

function GenerateNewPost(t, q, c)
{
  var qid = "q";
  var tid = "t";
  var QID = "";
  var TID ="";
  QID = QID.concat(qid, String(c));
  TID = TID.concat(tid, String(c));
       var newPost = document.createElement('div');
       newPost.className = 'post';
       var heading3 = document.createElement('a');
       var posttitle = document.createTextNode(t);
       heading3.appendChild(posttitle);
       heading3.id = TID;
       heading3.href = 'question.html?selected='+TID+QID;
       
       //heading3.CDATA_SECTION_NODE = 'questionarea';
       newPost.appendChild(heading3);
       var heading4 = document.createElement('h4');
       var question = document.createTextNode(q.substring(0, 100)+'...');
       heading4.appendChild(question);
       heading4.id = QID;
       heading3.onclick = StorageonClick(TID, QID, t, q);
       newPost.appendChild(heading4);
       //document.getElementById('postArea').appendChild(newPost);
       console.log(TID);
       console.log(QID);
}

//This function generates a div class with class post
function GeneratePost(t, q, c)
{
  var qid = "q";
  var tid = "t";
  var QID = "";
  var TID ="";
  QID = QID.concat(qid, String(c));
  TID = TID.concat(tid, String(c));
       var newPost = document.createElement('div');
       newPost.className = 'post';
       var heading3 = document.createElement('a');
       var posttitle = document.createTextNode(t);
       heading3.appendChild(posttitle);
       heading3.id = TID;
       heading3.href = 'question.html?selected='+TID+QID;
       
       //heading3.CDATA_SECTION_NODE = 'questionarea';
       newPost.appendChild(heading3);
       var heading4 = document.createElement('h4');
       var question = document.createTextNode(q.substring(0, 100)+'...');
       heading4.appendChild(question);
       heading4.id = QID;
       heading3.onclick = StorageonClick(TID, QID, t, q);
       newPost.appendChild(heading4);
       document.getElementById('postArea').appendChild(newPost);
       console.log(TID);
       console.log(QID);
}

function StorageonClick(id, id2, item, item2){
  sessionStorage.setItem(id, item);
  sessionStorage.setItem(id2, item2);
}
//This pulls the last x posts from the database and generates a list of posts 
//Firebase cannot sort in descending order, unfortunately.
//Maybe a timestamp attribute would make sorting by latest post easier
function showposts(x){
  
    counter = x-1;
    var query = firebase.database().ref("Posts").limitToLast(x);
    query.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
    var childData = childSnapshot.val();
    GeneratePost(childData.PostTitle, childData.Question, counter);
     counter--;
    });
    
    });
}
//This function gets a post created by the Generate posts function
//it recreates its id and edits the attributes there
//This ensures that the total number of posts stays constant
function RefreshPost(t,q, c){
  var qid = "q";
  var tid = "t";
  var QID = "";
  var TID ="";
  QID = QID.concat(qid, String(c));
  TID = TID.concat(tid, String(c));
  var d = document.getElementById(TID);
  d.innerHTML = t;
  d.href = 'question.html?selected='+TID+QID;
  d.onclick = StorageonClick(TID, QID, t, q);
  document.getElementById(QID).innerHTML = q.substring(0,10)+'...';
  console.log(QID);
  console.log(TID);
}
//This refreshes x number of posts
function RefreshPosts(x){
  
  var counter = x-1;
  var query = firebase.database().ref("Posts").limitToLast(x);
    query.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
    var childData = childSnapshot.val();
      RefreshPost(childData.PostTitle, childData.Question, counter);
      counter--
    });
    
    });
}




