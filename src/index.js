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
        if($scope.apiName===''){
            fetch(baseUrl+$scope.apiVal+'/'+$scope.apiName+$scope.apiWookie)
            .then(res => res.json())
            .then(data => {
                if($scope.apiVal==='films'){
                    for(var i = 0; i < data.result.length; i++){
                        $scope.arrResult.push(data.result[i].properties)
                    }

                }
                else{
                    for(var i = 0; i < data.results.length; i++){
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
                    $scope.arrResult.push(data.result[0].properties);
                })
                .catch(err => console.error(err)) 
        
            }
            else{
                fetch(baseUrl+$scope.apiVal+'/'+$scope.apiName+'/'+$scope.apiWookie)
                .then(res => res.json())
                .then(data => {
                    $scope.arrResult.push(data.result.properties);
                })
                .catch(err => console.error(err)) 
           
            }            
        }
 
    }

});
