var x = location.search.substring(10, 12);
var y = location.search.substring(12, 14);
console.log(x);
console.log(y);
//window.onbeforeunload = removeItems(x,y);
window.onload = fetchItems(x,y);
//removeItems(x,y);
console.log(sessionStorage.getItem(x));


function fetchItems(x,y){
    document.getElementById("pagetitle").innerHTML = sessionStorage.getItem(x);
    document.getElementById("questiontitle").innerHTML = sessionStorage.getItem(x);
    document.getElementById("qbody").innerHTML = sessionStorage.getItem(y);
}

function createReply(){
    var text = document.getElementById("replybox").value;
    var newreply= document.createElement('p');
    var rtext = document.createTextNode(text);
    newreply.appendChild(rtext);
    newreply.className = 'replypost';
    document.getElementById("anssection").appendChild(newreply);
}