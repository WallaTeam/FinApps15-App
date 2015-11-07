angular.module('starter.controllers')

.controller('ClientAddController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner) {


  $scope.client =
 {
  "id": undefined,
  "name": "",
  "surname": "",
  "birthDate": "",
  "postalCode": undefined
}







  $scope.saveAdd = function(){
    
    ionicToast.show('Cliente insertado', 'bottom', false, 1000);
     $ionicHistory.goBack();


  }

  $scope.discardAdd = function(){
   
    ionicToast.show('Cliente descartado', 'bottom', false, 1000);
     $ionicHistory.goBack();

  }


});
