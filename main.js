//to pick random messages about Parisha
let previousMsg="";
const randMsgs = ["is a marketer", "is a salesperson", "is a networker", "is learning french", "loves her dog", "loves music", "loves rowing", "could kill for a pizza", "likes playing ukulele", "loves gin", "loves to travel", "is mad about fashion"];

function getRandomMsg(){
    let randomMsg = randMsgs[Math.floor(Math.random() * randMsgs.length)]; // get a random message from the array
    return randomMsg;
}

function randomizeMsg(){
    previousMsg = document.getElementById("changeTxt").textContent; // got the current msg from the page.
    newrandomMsg = getRandomMsg(); 
    while (newrandomMsg == previousMsg){ // if we get the same msg as the current msg, try again.
        newrandomMsg = getRandomMsg();
    }
    document.getElementById("changeTxt").innerHTML = newrandomMsg;
    console.log(newrandomMsg);
    previousMsg = newrandomMsg; // change msg to new msg
}


//projects section accordion

const accordion  = document.getElementsByClassName('contentBx');
for(i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    });
};
