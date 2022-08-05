import './index.scss';
import * as bootstrap from 'bootstrap'

var baseUrl ='https://www.swapi.tech/api/';
var e = document.querySelector('.form-select');
var val = e.options[e.selectedIndex].value;


angular.module('apiHandler',[])
.controller('apiCtrl', function($scope){

    $scope.apiVal=val;
    $scope.apiName='';
    $scope.apiWookie='';
    $scope.arrResult=[];



    $scope.find= function(){
        if($scope.apiWookie===true){
            $scope.apiWookie='?format=wookiee'
        }
        
        if($scope.apiName===''){
            console.log('mass')
            console.log(baseUrl+$scope.apiVal+'/'+$scope.apiName+$scope.apiWookie)
            fetch(baseUrl+$scope.apiVal+'/'+$scope.apiName+$scope.apiWookie)
            .then(res => res.json())
            .then(data => {
                if($scope.apiVal==='films'){
                    for(var i = 0; i < data.result.length; i++){
                        console.log(data.result[i].properties)
                        $scope.arrResult.push(data.result[i]);     
                    }

                }
                else{
                    for(var i = 0; i < data.results.length; i++){
                        console.log(data.results[i])
                        $scope.arrResult.push(data.results[i]);                    
                    }
                }    
            })
            .catch(err => console.error(err))
        }
        else{
            if(/\D/.test($scope.apiName)){
                console.log(baseUrl+$scope.apiVal+'/?name='+$scope.apiName+$scope.apiWookie)
                fetch(baseUrl+$scope.apiVal+'/?name='+$scope.apiName+$scope.apiWookie)
                .then(res => res.json())
                .then(data => {
                    console.log(data.result.properties)
                    $scope.arrResult.push(data.result.properties);
                })
                .catch(err => console.error(err)) 
        
            }
            else{
                console.log('id')
                console.log(baseUrl+$scope.apiVal+'/'+$scope.apiName+'/'+$scope.apiWookie)
                fetch(baseUrl+$scope.apiVal+'/'+$scope.apiName+'/'+$scope.apiWookie)
                .then(res => res.json())
                .then(data => {
                    console.log(data.result.properties)
                    $scope.result.push(data.result.properties);
                })
                .catch(err => console.error(err))    
           
            }            
        }

 
    }
});

/*
fetch('https://www.swapi.tech/api/people/')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))
*/