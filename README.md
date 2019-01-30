
## Building Web Applications with Ajax

Ajax is the backbone of interactive high-performance web apps.



### Prerequisite
We are going to use 2 API for the data contents

    -   OpenWwatherMap (OpenWeatherMap.org) - To Obtain the weather details of passed location.
    -   EventBrite (EventBriter.com) - Nearby Event details.

To use both of these API's, we must login and create API Keys on both sites so it would allow us to fetch data from these API's via AJAX call.


### XMLHttpRequest (XHR) Methods


open() - Open a connection with specified endpoint, but doesn't actually send the HTTPRequest.
    -   Specify HTTP verb
    -   Specify target URL

send() - To send Http Request.
    -   Send Request

Once the Request is sent, the value of the **readyState** property indicates the status of the request.

        0 - Request not yet initialized
        1 - Request set up
        2 - Request sent
        3 - Request in process
        4 - Request complete

XHR Object also specifies a readyStateChange Event, so once the event is fired, we can check the request status by using **readyStatus===4** to ensure the request is completed.

#### Create an XHR Request.





### Demo

[Demo Link](https://vanilla-javascript-ajax-app.herokuapp.com/)
