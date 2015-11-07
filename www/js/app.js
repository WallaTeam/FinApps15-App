// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-toast','ngCordova','chart.js'])

.run(function($ionicPlatform,$rootScope,$ionicHistory) {

  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      $ionicHistory.clearCache();
   });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#2c505c");
}
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller:'MainController'
        }
      },

    })

  .state('app.articleList', {
     cache: false,
    url: '/articleList',
    views: {
      'menuContent': {
        templateUrl: 'templates/articleList.html',
        controller:'ArticleListController'
      }
    },

  })

  //Listado de eventos de una categoría, un día concreto
    .state('app.articleDetail', {
       cache: false,
        url: "/articleDetail/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/articleDetail.html",
                controller: 'ArticleDetailController'
            }
        }
    })

     .state('app.articleAdd', {
       cache: false,
        url: "/articleAdd",
        views: {
            'menuContent': {
                templateUrl: "templates/articleAdd.html",
                controller: 'ArticleAddController'
            }
        }
    })


.state('app.clientList', {
    url: '/clientList',
     cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/clientList.html',
        controller:'ClientListController'
      }
    },

  })

.state('app.clientDetail', {
    url: '/clientDetail/:id',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/clientDetail.html',
        controller:'ClientDetailController'
      }
    },

  })

  .state('app.clientAdd', {
        url: "/clientAdd",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "templates/clientAdd.html",
                controller: 'ClientAddController'
            }
        }
    })


  .state('app.saleAdd', {
     cache: false,
        url: "/saleAdd",
        views: {
            'menuContent': {
                templateUrl: "templates/saleAdd.html",
                controller: 'SaleAddController'
            }
        }
    })

    .state('app.saleList', {
       cache: false,
        url: "/saleList",
        views: {
            'menuContent': {
                templateUrl: "templates/saleList.html",
                controller: 'SaleListController'
            }
        }
    })

    .state('app.saleDetail', {
       cache: false,
    url: '/saleDetail/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/saleDetail.html',
        controller:'SaleDetailController'
      }
    },

  })

    .state('app.stats', {
       cache: false,
    url: '/stats',
    views: {
      'menuContent': {
        templateUrl: 'templates/stats.html',
        controller:'StatsController'
      }
    },

  })

     .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller:'LoginController'
      }
    },

  })


  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
