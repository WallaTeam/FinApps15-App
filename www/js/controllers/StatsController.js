angular.module('starter.controllers')

.controller('StatsController', function($scope, $ionicModal, $timeout,$http,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.sales;




//Muestra un evento concreto
    $scope.displaySale = function (id) {
        $state.go('app.saleDetail', {id: id});
    };

 $scope.labels = ["Smartphone 4G", "Tarjeta MicroSD 4Gb", "Cable Ethernet"];
  $scope.data = [300, 500, 100];

   $scope.labels2 = ["Enero", "Febrero", "Marzo", "Abril"];
  $scope.series2 = ['Ingresos', 'Gastos'];
  $scope.data2 = [
    [6500, 5923, 8034, 8112],
    [2834, 4855, 4053, 1942]
  ];


 $scope.labels3 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series3 = ['Series A', 'Series B'];

  $scope.data3 = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.addArticle = function(){
    $state.go('app.articleAdd');
  }


  $http.get('data/sales.json')
       .then(function(res){
          $scope.sales = res.data;  
          console.log(res.data);              
        });
});
