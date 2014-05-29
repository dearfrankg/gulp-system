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
require('./common/services')(app)
require('./common/filters')(app)
require('./phonecat/controllers')(app)
require('./phonecat/animations')(app)

###
# configure routes
###
app.config ($routeProvider) ->

    $routeProvider

        .when("/phones",
          templateUrl: "modules/phonecat/list-view.tpl.html"
          controller: 'ListCtrl'
        )

        .when("/phones/:phoneId",
          templateUrl: "modules/phonecat/detail-view.tpl.html"
          controller: 'DetailCtrl'
        )

        .otherwise redirectTo: "/phones"
