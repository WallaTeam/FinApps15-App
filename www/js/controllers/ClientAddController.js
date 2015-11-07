angular.module('starter.controllers')

.controller('ClientAddController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner,$ionicLoading) {



  $scope.client =
 {
  "code": undefined,
  "name": "",
  "surname": "",
  "birthDate": "",
  "postalCode": undefined
}


  $scope.saveAdd = function(){
    


 $ionicLoading.show({
      template: 'Cargando...'
    });

$http.post('http://192.168.42.1:8080/clients', $scope.client).then(
  function(data){

     $ionicLoading.hide();
     ionicToast.show('Cliente insertado', 'bottom', false, 1000);
     $ionicHistory.goBack();
  }, function(error){

     $ionicLoading.hide();
     $ionicHistory.goBack();
  });

     
   


  }

  $scope.discardAdd = function(){
   
    ionicToast.show('Cliente descartado', 'bottom', false, 1000);
     $ionicHistory.goBack();

  }


});
