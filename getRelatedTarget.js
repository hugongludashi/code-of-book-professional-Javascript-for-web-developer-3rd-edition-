var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
		event = EventUtil.getEvent(event);
		
		var keys = new Array();
		
		if (event.shiftKey){
			keys.push("shift");
		}
		
		if (event.ctrlkey){
			keys.push("ctrl");
		}
		
		if (event.altKey){
			keys.push("alt");
		}
		
		if (event.metaKey){
			keys.push("meta");
		}
		
		alert("Keys: " + keys.join(","));
});