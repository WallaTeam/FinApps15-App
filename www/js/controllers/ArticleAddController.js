angular.module('starter.controllers')

.controller('ArticleAddController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.article =
  {
  "id": undefined,
  "name":"",
  "category":"",
  "price":undefined,
  "vat":undefined,
  "description": "",
  "stock":undefined


};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


 $scope.scanBarcode = function() {
      console.log("hi");
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $scope.article.id = imageData.text;
        }, function(error) {
            console.log("Ha ocurrido un error: " + error);
        });
    };






  $scope.saveAdd = function(){
    
    ionicToast.show('Artículo actualizado', 'bottom', false, 1000);
     $ionicHistory.goBack();


  }

  $scope.discardAdd = function(){
   
    ionicToast.show('Artículo descartado', 'bottom', false, 1000);
     $ionicHistory.goBack();

  }

  $http.get('data/articles.json')
       .then(function(res){
          $scope.articles = res.data;  
          console.log(res.data);              
        });
});
