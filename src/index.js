import './index.scss';
import * as bootstrap from 'bootstrap'

var baseUrl ="https://www.swapi.tech/api/";
var e = document.querySelector(".form-select");
var val = e.options[e.selectedIndex].value;


angular.module("apiHandler",[])
.controller("apiCtrl", function($scope){

    $scope.apiVal=val;
    $scope.apiName="";
    $scope.apiWookie="";
    $scope.result=""

    
    $scope.find=function(){
        if($scope.apiWookie===true){
            $scope.apiWookie="?format=wookiee"
        }
        if(/\D/.test($scope.apiName)){
            console.log("name")
            console.log(baseUrl+$scope.apiVal+"/?name="+$scope.apiName+$scope.apiWookie)
            fetch(baseUrl+$scope.apiVal+"/?name="+$scope.apiName+$scope.apiWookie)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))            
        }
        else{
            console.log("id")                
            console.log(baseUrl+$scope.apiVal+"/"+$scope.apiName+$scope.apiWookie)
            fetch(baseUrl+$scope.apiVal+"/"+$scope.apiName+$scope.apiWookie)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))            
        }
 
    }
});

/*
fetch("https://www.swapi.tech/api/people/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))
*/