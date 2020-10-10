var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'student.asmx/GetAllStudents'
        })
            .then(function (response) {
                $scope.students = response.data;
            });
      
    });