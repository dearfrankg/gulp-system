
describe 'Splash Controller', ->

    scope = undefined

    beforeEach module 'app'

    beforeEach inject ($controller) ->
      scope = {}
      ctrl = $controller('SplashCtrl', {$scope: scope})


    it 'should contain more than 1 features', ->
        expect(scope.features.length).toBeGreaterThan 1

    it 'should contain more than 1 command', ->
        expect(scope.commands.length).toBeGreaterThan 1



