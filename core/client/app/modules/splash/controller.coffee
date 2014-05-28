
module.exports = (app) ->

    app.controller 'SplashCtrl', ($scope) ->

        $scope.features = [
            'default modules: bootstrap ng, ngRoute, ngResource, ngAnimate'
            'modular app structure'
            'html to js'
            'coffee to js'
            'browserify to app.js'
            'scss to app.css'
            'image optimization'
            'server'
            'live reload'
            'watch'
            'working unit tests'
            'working e2e tests'
        ]

        $scope.commands = [
            'gulp -- start tdd'
            'gulp release -- prep release'
        ]



