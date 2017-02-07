function matchesSelector(element, selector){
	if (element.matchesSelector){
		return element.matchesSelector(selector);
	} else if (element.msMatchesSelector){
		return element.msMatchesSelector(selector);
	} else if (element.mozMatchesSelector){
		return element.mozMatchesSelector(selector);
	} else if (element.webkitMatchesSelector){
		return element.webkitMatchesSeletor(selector);
	} else {
		throw new Error ("Not supported.");
	}
}

if (matchesSelector(document.body, "body.page1")){
	// do something
}