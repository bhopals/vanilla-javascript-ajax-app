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
			if(httpRequest.status === 200) {
				updatedUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
			console.log(httpRequest.responseText)
		}
	}


	//handle XHR Success
	function updatedUISuccess(responseText) {
		var response = JSON.parse(responseText);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById('weather');
		weatherBox.innerHTML = "<p>"+ degCInt + "&#176; C / "+ degFInt + "&#176; F </p> <p>"+condition+"</p>";
	}

	//handle XHR Error
	function updateUIError(){
		var weatherBox = document.getElementById('weather');
		weatherBox.className = "hidden";
	}

})();

