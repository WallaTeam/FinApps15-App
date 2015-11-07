angular.module('starter.controllers')

.controller('SaleAddController', function($scope, $ionicModal, $timeout,$http,$state,ionicToast,$ionicHistory,$cordovaBarcodeScanner,$ionicPopup) {


  $scope.screen = 1;
  $scope.client = undefined;
  $scope.formaPago;
  $scope.sale = 


  {
    "id": 0,
    "date": 18/07/1994,
    "articleList": [

        {
          "id":3,
          "name":"Monster Rehab",
          "category":"Mesas",
          "price":10.12,
          "vat":21,
          "description": "Description",
          "stock":100


        },
        {
          "id":4,
          "name":"Example Article 4",
          "category":"Mesas",
          "price":10.12,
          "vat":21,
          "description": "Description",
          "stock":100


        },
        {
          "id":4,
          "name":"Example Article 4",
          "category":"Mesas",
          "price":10.12,
          "vat":21,
          "description": "Description",
          "stock":100


        },
        {
          "id":4,
          "name":"Example Article 4",
          "category":"Mesas",
          "price":10.12,
          "vat":21,
          "description": "Description",
          "stock":100


        },
        {
          "id":4,
          "name":"Example Article 4",
          "category":"Mesas",
          "price":10.12,
          "vat":21,
          "description": "Description",
          "stock":100


        }

    ],
    "finalPrice": 0

  };



 $scope.scanBarcode = function() {
      
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            //Añadir uno nuevo
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
   

    $scope.client = 
    {
  "id": 12482222,
  "name": "Sergio",
  "surname": "Soro Miranda",
  "birthDate": "18/07/1994",
  "postalCode": 22005
}


  });
  
 };

 $scope.addArticleById = function(id){


   var oldArray = $scope.sale.articleList;
   $scope.sale.articleList = [ {
          "id":4,
          "name":"El id " + id,
          "category":"Mesas",
          "price":10.12,
          "vat":21,
          "description": "Description",
          "stock":100
        }

  ];
   for(var i = 0; i < oldArray.length; i++){
      $scope.sale.articleList.push(oldArray[i]);
   }


 }

  $scope.getTotalPrice = function(){
    var total = 0;
    for (var i = 0; i < $scope.sale.articleList.length; i++){
      var cur = $scope.sale.articleList[i];
      total+=cur.price*(1 + cur.vat/100);
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
  //Finalizar una venta
  ionicToast.show('Venta añadida', 'bottom', false, 1000);
  $state.screen = 1;
   $ionicHistory.nextViewOptions({
    disableBack: true
  });

     $state.go('app.main');

 }

});
