
<div class = "bd user disabled"> ...</div>

//remove the "user" class

//Method 1: 
//first, get list of class names
var classNames = div.className.split(/\s+/);


//find the "user" class to remove
var pos = -1,
	i,
	len;
	
for (i = 0, len = classNames.length; i < len; i++){
	if (classNames[i] == "user"){
		pos = i;
		break;	
	}
}

//remove the class name
className.splice(i,1);

//set back the class name
div.className = classNames.join(" ");

//Method 2: 

div.classList.remove("user")