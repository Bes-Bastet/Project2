function changeCSS(cssFile, cssLinkIndex) {

    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
  
}

function getName() {
  var nameStr = document.getElementById('name1').value;
  var nameStr2 = document.getElementById('name2').value;
  document.getElementById("entireName").innerHTML = nameStr +  "<br />" + " & " + "<br />" + nameStr2;
  document.getElementById("initial").innerHTML = nameStr.substr(0,1).toUpperCase() + "" + " & " + "" + nameStr2.substr(0,1).toUpperCase();
}


document.getElementById("click1").onclick = function() {inviteTextA()};
function inviteTextA() {
  document.getElementById("outputInviteText").innerHTML =">Request the pleasure of your company at their wedding";
}

 document.getElementById("click2").onclick = function() {inviteTextB()};
 function inviteTextB() {
  document.getElementById("outputInviteText").innerHTML ="Joyfully invite you to share in a" + "<br />"  + "celebration of love and commitment";
 }

  document.getElementById("click3").onclick = function() {inviteTextC()};
  function inviteTextC() {
 document.getElementById("outputInviteText").innerHTML ="Together with their families, invite you" + "<br />"  +  "to join them in the celebration of their marriage";
 
  } 
 
function Venue() {
    let g = document.getElementById("weddingVenue").value; 
    document.getElementById("outputWeddingVenue").innerHTML = "" + g;
  }

function dateTime() {
  let h = document.getElementById("weddingDate").value; 
  document.getElementById("outputWeddingDate").innerHTML = "" + h;
 }

function rsvp() {
  let i = document.getElementById("rsvp").value; 
  document.getElementById("outputRSVP").innerHTML = "RSVP: " + i;
}
  

    
    