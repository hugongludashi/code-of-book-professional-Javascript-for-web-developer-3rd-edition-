var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", fuction(event){
    event = EventUtil.getEvent(event);
    var pageX = event.pageX,
        pageY = event.pageY;
        
    if (pageX == undefined){
        pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
    
    if (pageY == undefined){
        pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
    }
    
    alert ("Page coordinates: " + pageX + "," + pageY);
});
