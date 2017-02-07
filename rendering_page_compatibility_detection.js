if (document.compatMode == "CSS1Compat"){
	alert ("Standards mode");
} else {
	alert ("Quirks mode");
}

var head = document.head || document.getELementsByTagName("head")[0];

aler(document.charset);
document.charset = "UTF-8";



if (document.charset != document.defaultCharset){
	alert("Custom character set being used.");
}


<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>