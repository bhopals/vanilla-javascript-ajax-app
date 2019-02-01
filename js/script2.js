"use strict";

(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "ed77c9da65098468569cdc788d5e39d1";
	var httpRequest;
	
	makeRequest();

	// create and send an XHR Request
	function makeRequest(){
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url+'&appid='+apiKey);
		httpRequest.send();
		
	}

	//handle XHR Response
	function responseMethod() {
		if(httpRequest.readyState == 4) {
			console.log(httpRequest.responseText);
		}
	}

	function onChangeData(e) {
		if(e.currentTraget.classList.contains('change-data')){
			console.log("TEST On Change Data");
		}
	}

	
})();

