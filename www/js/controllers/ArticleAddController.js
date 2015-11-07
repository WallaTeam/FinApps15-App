angular.module('starter.controllers')

.controller('ArticleAddController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner,$ionicLoading) {

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
  "code": undefined,
  "name":"",
  "category":"",
  "prize":undefined,
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
            $scope.article.code = imageData.text;
        }, function(error) {
            console.log("Ha ocurrido un error: " + error);
        });
    };



  $scope.saveAdd = function(){
    


 $ionicLoading.show({
      template: 'Cargando...'
    });

$http.post('http://192.168.42.1:8080/articles', $scope.article).then(
  function(data){

     $ionicLoading.hide();
     ionicToast.show('Artículo insertado', 'bottom', false, 1000);
     $ionicHistory.goBack();
  }, function(error){

     $ionicLoading.hide();
     $ionicHistory.goBack();
  });




  }

  $scope.discardAdd = function(){
   
    ionicToast.show('Artículo descartado', 'bottom', false, 1000);
     $ionicHistory.goBack();

  }



});
