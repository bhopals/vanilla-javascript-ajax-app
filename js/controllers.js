angular.module('listApp', [])
  .controller('ListController', ['$http', function($http) {
//    Your personal OAuth token
	//  44DVS5SJ6DEFPMR42MAJ
//Anonymous access OAuth token
    //4I2L42AN4NC757ZFAQAH

    //Weather
    //var apiKey = "ed77c9da65098468569cdc788d5e39d1";


    
    var vm = this;
    vm.events = [];
    vm.showError = false;
    $http.get("https://www.eventbriteapi.com/v3/events/search/?token=44DVS5SJ6DEFPMR42MAJ&location.address=london+uk")
    .success(function(data) {
        vm.events = data.events;
    }).error(function() {
      vm.showError = true;
    })
  }]);