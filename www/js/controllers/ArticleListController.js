angular.module('starter.controllers')

.controller('ArticleListController', function($scope, $ionicModal, $timeout,$http,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.articles;


$scope.filtro = "";
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });



//Muestra un evento concreto
    $scope.displayArticle = function (id) {
        $state.go('app.articleDetail', {id: id});
    };



  $scope.addArticle = function(){
    $state.go('app.articleAdd');
  }


  $http.get('data/articles.json')
       .then(function(res){
          $scope.articles = res.data;  
          console.log(res.data);              
        });
});
