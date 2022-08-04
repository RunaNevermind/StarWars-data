import './index.scss';
import * as bootstrap from 'bootstrap'

var e = document.querySelector(".form-select");
var val = e.options[e.selectedIndex].value;

angular.module("apiHandler",[])
.controller("apiCtrl", function($scope){
    $scope.apiVal=val;
});


/*
fetch("https://www.swapi.tech/api/people/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))
*/