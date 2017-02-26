// log debugging messages to specify an area of the page
//that messages are written to.

function log(message){
  var console = document.getElementById("debuginfo");
  if (console == null){
    console = document.createElement("div")
    console.id = "debuginfo";
    console.style.background = "#dedede";
    console.style.border = "1px solid silver";
    console.style.padding = "5px";
    console.style.width = "400px";
    console.style.position = "absolute";
    console.style.right = "0px";
    console.style.top = "0px";
    document.body.appendChild(console);
  }
  console.innerHTML += "<p>" + message + "</p>";
}
