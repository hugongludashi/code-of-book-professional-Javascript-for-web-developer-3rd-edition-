var EventUtil = {
  addHandler: function(element, type, handler){
    if (element.addEventListener){
        element.addEventListener(type, handler,false);
     } else if (element.attacheEvent){
        elment.attacheEvent("on" + type , handler);
     } else {
        element["0" + type] = handler;
     }
  },
  
  getEvent: function(event){
       return event ? event : window.event;
  },
  
  getTarget: function(event){
      return event,target || event.srcElement;
  },
  
  preventDefault: function(event){
      if (event.preventDefault){
          event.preventDefault();
      } else {
          event.returnValue = false;
      }
  },
  
  getRelatedTarget: fuction(event){
      if (event.relatedTarget){
          return event.relatedTarget;
    } else if (event.toElement){
        return event.toElement;
    } else if (event.fromElement){
        return event.fromElement;
    } else {
        return null;
    }
  },
  
  removeHandler: function(element, type, handler){
      if (element.removeEventListener){
          element.removeEventListerner(type, handler, false);
      } else if (element.detachEvent){
          element.detachEvent("on" + type, handler);
      } else {
          element ["on" + type] = null;
      }
   },
   
   stopPropagation: function (event){
      if (event.stopPropagation){
          event.stopPropagation();
      } else {
          event.cancleBubble = true;
      }
   }  
};
