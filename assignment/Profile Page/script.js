console.log("Im connected");

function editUser(){
    document.getElementById("profilename").innerText ="Ezra Finch-Thomas";
}

function hide(element){
    element = document.getElementById('userpicture1');
    element.remove();}


function out(userpicture2){
    userpicture2 = document.getElementById('userpicture2');
    userpicture2.remove();
}


var count = 2
var countElement = document.querySelector("#sub");
function lowerNumber(){
    count--;
    countElement.innerHTML--;
}

count2 = 418
var countElement2 = document.querySelector("#increase-count")
function increaseNumber(){
    countElement2.innerText++;
}