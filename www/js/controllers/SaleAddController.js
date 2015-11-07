angular.module('starter.controllers')

.controller('SaleAddController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner,$ionicPopup,$ionicLoading,$cordovaDialogs) {


  $scope.screen = 1;
  $scope.client = undefined;
  $scope.formaPago;

    var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var newdate = day + "/" + month + "/" + year;


  $scope.sale = 

  {
    "code": 0,
    "date": newdate,
    "articleList": [
    ],
    "finalPrice": 0

  };



 $scope.scanBarcode = function() {
      
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            //Añadir uno 
            $cordovaDialogs.beep(1);
            $scope.addArticleById(imageData.text);
        }, function(error) {
            console.log("Ha ocurrido un error: " + error);
        });
    };


// Triggered on a button click, or some other target
// Triggered on a button click, or some other target
$scope.showManual = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.articleId">',
    title: 'Introduce ID de artículo',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>Aceptar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.articleId) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.articleId;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
   

    $scope.addArticleById(res);


  });
  
 };




$scope.showManualClient = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.clientId">',
    title: 'Introduce ID de cliente',
    subTitle: '',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>Aceptar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.clientId) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.clientId;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
   
   $ionicLoading.show({
      template: 'Cargando...'
    });

  $http.get('http://192.168.42.1:8080/clients/client/' + res)
       .then(function(res){
        $ionicLoading.hide();
          $scope.client = res.data;  
          //$scope.sale.client = res;
          console.log("Cliente " + res);
                  
        })
       .catch(function(err){
         $ionicLoading.hide();
         ionicToast.show('Cliente no existente', 'middle', false, 2000);

       });


  });
  
 };


$scope.showNFC = function() {
  $scope.data = {}
  $scope.image = "img/nfc.png";

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<img src="{{image}}" style="max-width:200px">',
    title: 'Procesando tarjeta...',
    subTitle: '',
    scope: $scope
  });
  myPopup.then(function(res) {
   

    $scope.client = 
    {
  "id": 12482222,
  "name": "Sergio",
  "surname": "Soro Miranda",
  "birthDate": "18/07/1994",
  "postalCode": 22005
}


  });

    $timeout(function() {
      $scope.image = "img/nfc_ok.png"
    //close the popup after 3 seconds for some reason
        $timeout(function() {
        myPopup.close();
      //close the popup after 3 seconds for some reason
    }, 1000);
  }, 2000);


  
 };


$scope.showVisa = function() {
  $scope.data = {}
  $scope.image = "img/visa.png";

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<img src="{{image}}" style="max-width:200px">',
    title: 'Procesando tarjeta...',
    subTitle: '',
    scope: $scope
  });
  myPopup.then(function(res) {
   

    $scope.client = 
    {
  "id": 12482222,
  "name": "Sergio",
  "surname": "Soro Miranda",
  "birthDate": "18/07/1994",
  "postalCode": 22005
}


  });

    $timeout(function() {
      $scope.image = "img/visa_ok.png"
    //close the popup after 3 seconds for some reason
        $timeout(function() {
        myPopup.close();
      //close the popup after 3 seconds for some reason
    }, 1000);
  }, 2000);


  
 };

 $scope.addArticleById = function(id){


  $ionicLoading.show({
      template: 'Cargando...'
    });

  $http.get('http://192.168.42.1:8080/articles/product/' + id)
       .then(function(res){
        $ionicLoading.hide();
        //Add data
        console.log(res.data);
         var oldArray = $scope.sale.articleList;
         $scope.sale.articleList = [res.data];
         for(var i = 0; i < oldArray.length; i++){
            $scope.sale.articleList.push(oldArray[i]);
        }
                     
        })

       .catch(function(error){
          $ionicLoading.hide();
              ionicToast.show('Artículo no existente', 'middle', false, 2000);

       });

  
   
 }

  $scope.getTotalPrice = function(){
    var total = 0;
    for (var i = 0; i < $scope.sale.articleList.length; i++){
      var cur = $scope.sale.articleList[i];
      total+=cur.prize*(1 + cur.vat/100);
    }
    return total;
  };

  $scope.deleteArticle = function(index){
    if (index > -1) {
     $scope.sale.articleList.splice(index, 1);
    }   
  }
 


  $scope.saveAdd = function(){
    
    ionicToast.show('Cliente insertado', 'bottom', false, 1000);
     $ionicHistory.goBack();


  }

  $scope.discardAdd = function(){
   
    ionicToast.show('Cliente descartado', 'bottom', false, 1000);
     $ionicHistory.goBack();

  }


 $scope.endVenta = function(){


   $ionicLoading.show({
      template: 'Cargando...'
    });

   if(!$scope.sale.client){
    $scope.sale.client = 0;
   }
   $scope.sale.worker = 0;
   $scope.sale.finalPrice = undefined;
  //Finalizar una venta
  $http.post('http://192.168.42.1:8080/sales', $scope.sale).then(
  function(data){

     $ionicLoading.hide();
     ionicToast.show('Venta insertada', 'bottom', false, 1000);
     $ionicHistory.goBack();
  }, function(error){

     $ionicLoading.hide();
     $ionicHistory.goBack();
  });

  //Se añade con un post
  ionicToast.show('Venta añadida', 'bottom', false, 1000);
  $state.screen = 1;
   $ionicHistory.nextViewOptions({
    disableBack: true
  });

     $state.go('app.main');

 }

});
