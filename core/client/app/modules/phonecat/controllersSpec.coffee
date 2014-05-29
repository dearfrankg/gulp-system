
describe 'Phonecat Controllers', ->

    beforeEach module 'app'

    beforeEach ->
        @addMatchers toEqualData: (expected) ->
            angular.equals @actual, expected


    describe 'ListCtrl', ->

        $httpBackend = undefined
        scope = undefined

        phoneData = ->
            [{name: 'Nexus S'}, {name: 'Motorola DROID'}]

        beforeEach inject (_$httpBackend_, $rootScope, $controller) ->
            $httpBackend = _$httpBackend_
            $httpBackend.expectGET('assets/data/phones/phones.json').respond phoneData()
            scope = $rootScope.$new()
            ctrl = $controller('ListCtrl', {$scope: scope})


        it 'should create phone model using AJAX', ->
            expect(scope.phones).toEqualData []
            $httpBackend.flush()
            expect(scope.phones).toEqualData phoneData()

        it 'should set the default value of orderProp model', ->
            expect(scope.orderProp).toBe 'age'


    describe 'DetailCtrl', ->

        scope = undefined
        $httpBackend = undefined

        phoneData = ->
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']

        beforeEach inject (_$httpBackend_, $rootScope, $routeParams, $controller) ->
            $httpBackend = _$httpBackend_
            $httpBackend.expectGET("assets/data/phones/xyz.json").respond phoneData()
            $routeParams.phoneId = "xyz"
            scope = $rootScope.$new()
            ctrl = $controller("DetailCtrl", {$scope: scope})


        it "should fetch phone detail", ->
            expect(scope.phone).toEqualData({})
            $httpBackend.flush()
            expect(scope.phone).toEqualData phoneData()


