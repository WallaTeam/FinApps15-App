angular.module('starter.controllers')

.controller('LoginController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner) {


  $scope.client =
 {
  "id": undefined,
  "name": "",
  "surname": "",
  "birthDate": "",
  "postalCode": undefined
}



  $scope.status = "CONECTANDO...";



  $scope.openMain = function(){
  
   $ionicHistory.nextViewOptions({
    disableBack: true
  });
     $state.go('app.main');
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

  $http.get('http://192.168.42.1:8080/articles')
       .then(function(res){
        $scope.status = "CONECTADO A RASPBERRY PI"             
        }).catch(function(){
          $scope.status = "NO CONECTADO A RASPBERRY PI"
        });


});
