angular.module('starter.controllers')

.controller('MainController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner) {


  $scope.client =
 {
  "id": undefined,
  "name": "",
  "surname": "",
  "birthDate": "",
  "postalCode": undefined
}





  $scope.openSaleAdd = function(){
  
     $state.go('app.saleAdd');
  }

 $scope.openClientList = function(){
  
     $state.go('app.clientList');
  }

   $scope.openArticleList = function(){
  
     $state.go('app.articleList');
  }

   $scope.openSaleList = function(){
  
     $state.go('app.saleList');
  }

   $scope.openStats = function(){
  
     $state.go('app.stats');
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
