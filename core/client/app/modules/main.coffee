###
# require dependencies
###
$       = require '../assets/bower_components/jquery/jquery'
angular = require '../assets/bower_components/angular/angular'
require '../assets/bower_components/angular-route/angular-route'
require '../assets/bower_components/angular-resource/angular-resource'
require '../assets/bower_components/angular-animate/angular-animate'
require '../.tmp/templates'

###
# create app module
###
app = angular.module('app', [
    'ngRoute'
    'ngResource'
    'ngAnimate'
    'MyPartials'
])

###
# pass app module to add features to it
###
require('./splash/controller')(app)

###
# configure routes
###
app.config ($routeProvider) ->

    $routeProvider

        .when("/splash",
          templateUrl: "modules/splash/view.tpl.html"
          controller: "SplashCtrl"

        ).otherwise redirectTo: "/splash"
