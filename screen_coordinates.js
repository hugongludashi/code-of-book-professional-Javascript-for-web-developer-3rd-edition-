var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
		event = EventUtil.getEvent(event);
		alert("screen coordinates: " + event.screenX + "," + event.screenY);
});