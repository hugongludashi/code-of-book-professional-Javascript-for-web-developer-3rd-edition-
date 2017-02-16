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
      return event.target || event.srcElement;
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
    
  getButton: function(event){
      if (document.implementation.hasFeature("MouseEvents", "2.0")){
          return event.button; 
      } else {
          swith (event.button){
            case 0:
            case 1:
            case 3: 
            case 5:
            case 7:
              return 0;
            case 2:
            case 6:
              return 2;
            case 4:
              return 1;
          }
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
