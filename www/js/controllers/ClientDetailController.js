angular.module('starter.controllers')

.controller('ClientDetailController', function($scope, $ionicModal, $timeout,$http,$ionicPopup,$ionicHistory,ionicToast,$stateParams,$ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 $scope.editing = false;
 $scope.previous = undefined;
  // Form data for the login modal
  $scope.loginData = {};

  $scope.client;

  $scope.clientId = parseInt($stateParams.id); //Id del cliente

  $scope.startEdit = function(){
    $scope.editing = true;
    $scope.previous = JSON.parse(JSON.stringify($scope.client));
  }

  $scope.saveEdit = function(){

 $ionicLoading.show({
      template: 'Cargando...'
    });



$http.put('http://192.168.42.1:8080/clients/client/' + $scope.clientId, $scope.client).then(
  function(data){

     $ionicLoading.hide();
      $scope.editing = false;
     ionicToast.show('Cliente actualizado', 'bottom', false, 1000);
  }, function(error){
    $scope.editing = false;
     ionicToast.show('Cliente actualizado', 'bottom', false, 1000);
     $ionicLoading.hide();
  });


   
   


  }

  $scope.discardEdit = function(){
    $scope.editing = false;
    $scope.client = JSON.parse(JSON.stringify($scope.previous));

  }


  $scope.delete = function(){
   var confirmPopup = $ionicPopup.confirm({
         title: 'Borrar cliente',
         template: '¿Estás seguro de que quieres borrar el cliente?'
       });
       confirmPopup.then(function(res) {
         if(res) {
           console.log('Sí');
          ionicToast.show('Cliente borrado.', 'bottom', false, 1000);
           $ionicHistory.goBack();

           //Ir hacia atrás
         } else {
           console.log('No');
         }
       });
  }


 $ionicLoading.show({
      template: 'Cargando...'
    });

  $http.get('http://192.168.42.1:8080/clients/client/' + $scope.clientId)
       .then(function(res){
        $ionicLoading.hide();
          $scope.client = res.data;  
                  
        });
});
