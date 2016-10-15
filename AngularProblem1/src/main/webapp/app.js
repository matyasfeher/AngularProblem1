var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/details/:id", {
                templateUrl: "content/details.html",
                controller: "DetailsController"
            })
            .when("/list",{
                templateUrl: "content/list.html",
                controller: "Controller"
            })
            .otherwise({
                redirectTo: ""
            });

});

app.factory("personFactory", function(){
   var persons = [{id: 1, name: "Jens", age: 18}, {id: 2, name: "Peter", age: 23}, {id: 3, name: "Hanne", age: 23}];
   return{
     getAll: function(){ return persons; }
   };
});

    app.controller("Controller", function ($scope, personFactory ) {
        $scope.persons = personFactory.getAll();
    });
    
    
    app.controller("DetailsController", function ($scope, $routeParams, personFactory){
     
        
        
       var persons = personFactory.getAll();
       var id = parseInt($routeParams.id);
       var p1 = persons[0];
       var p2 = persons[1];
       var p3 = persons[2];
       
       for (var i = 0; i < persons.length; i++) {
           if(persons[i].id === id){
               $scope.personid = persons[i].id; 
         $scope.personname = persons[i].name; 
         $scope.personage = persons[i].age; 
           }
       }
    });



