angular.module('starter.controllers')

.controller('SaleDetailController', function($scope, $ionicModal, $timeout,$http,$ionicPopup,$ionicHistory,ionicToast,$stateParams,$ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 $scope.editing = false;
 $scope.previous = undefined;
 $scope.client;

  $scope.sale;

  $scope.saleId = parseInt($stateParams.id); //Id del cliente



 $ionicLoading.show({
      template: 'Cargando...'
    });

  $http.get('http://192.168.42.1:8080/sales/sale/' + $scope.saleId)
       .then(function(res){
       
          $scope.sale = res.data;  

           $http.get('http://192.168.42.1:8080/clients/client/' + $scope.sale.client)
           .then(function(res){
            $ionicLoading.hide();
              $scope.client = res.data;  
                      
            });
                  
        });

  
});
