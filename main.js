
function message(){   

const randMsgs = ["is a marketer", "is a salesperson", "is a networker", "is learning french", "loves her dog", "loves music", "loves rowing", "could kill for a pizza", "is learning how to play ukulele", "loves gin", "loves to travel", "is mad about fashion"];
    var prevMsg = "";
    var currentMsg = "is an amateur coder"; 
    var ranNum = Math.floor((Math.random() * randMsgs.length) + 0);
    currentMsg = randMsgs[ranNum];
        if(prevMsg == currentMsg) {
            var anotherMsg = "";
            if(ranNum >= 0 && ranNum < 4) {
                anotherMsg = randomMsg[ranNum + 1];
            }
            else {
                anotherMsg = randomMsg[ranNum - 1];
            }
            document.getElementById("changeTxt").innerHTML = anotherMsg;
            prevMsg = anotherMsg; // set prevMsg to anotherMsg
        } else {
            document.getElementById("changeTxt").innerHTML = currentMsg;
            prevMsg = currentMsg; // set prevMsg to currentMsg
        };
   
   

 
}