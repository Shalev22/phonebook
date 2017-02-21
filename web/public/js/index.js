(function() {


    var app = angular.module("page", []);
   

    app.controller('MainController', ['$http', '$interval', function($http, $interval) {
        var main = this;
        // main.example = 'unknown';

        main.activateButtons = true;
        main.shalev = 'fa';

        main.getContacts = function() {

            $http.get("/get_contacts").success(function (data){
        		// console.log(data);
        		main.recordStatus = data[0].name;
        		console.log(data);       		
        		console.log(data[0].name); 
        	})
        };
    main.getContacts();
    console.log(main.recordStatus);
	}]);

})();
