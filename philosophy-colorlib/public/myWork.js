var myApp = angular.module("App",['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider)
{
    $routeProvider
    .when('/category',{
        templateUrl: 'category.html',
        controller: 'categoryController'
    })

.when('/style-guide',
{
    templateUrl:'style-guide.html',
    controller: 'style'
})
.when('/single-video',{
    templateUrl:'single-video.html',
    controller:'svideo'
})
.when('/single-audio',
{
    templateUrl:'single-audio.html',
    controller:'audio'
})
.when('/single-gallery',
{
    templateUrl:'single-gallery.html',
    controller:'gallery'
})

.when('/single-standard',
{
    templateUrl:'single-standard.html',
    controller:'standard'
})
.when('/about',
{
    templateUrl:'about.html',
    controller:'about'
})
.when('/contact',
{
    templateUrl:'contact.html',
    controller:'contact'
})

.otherwise({
       redirectTo: '/index'
    });



}]);
myApp.controller('categoryController', function($scope)
{
    console.log("showing category page");
})
myApp.controller('style', function($scope)
{
    console.log("showing style page");
})
myApp.controller('svideo', function($scope)
{
    console.log("showing video page");
})
myApp.controller('audio', function($scope)
{
    console.log("showing audio page");
})
myApp.controller('gallery', function($scope)
{
    console.log("showing gallery page");
})
myApp.controller('standard', function($scope)
{
    console.log("showing single standard page");
})
myApp.controller('about', function($scope)
{
    console.log("showing about page");
})
myApp.controller('contact', function($scope)
{
    console.log("showing contact page");
})