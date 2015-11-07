angular.module('starter.controllers')

.controller('SaleDetailController', function($scope, $ionicModal, $timeout,$http,$ionicPopup,$ionicHistory,ionicToast,$stateParams) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 $scope.editing = false;
 $scope.previous = undefined;


  $scope.sale;

  $scope.saleId = parseInt($stateParams.id); //Id del cliente



  $http.get('data/sale1.json')
       .then(function(res){
          $scope.sale = res.data;  
                  
        });
});
