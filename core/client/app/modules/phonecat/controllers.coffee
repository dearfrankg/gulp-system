
module.exports = (app) ->

    ###
    # ListCtrl
    ###
    app.controller 'ListCtrl', ($scope, Phone) ->

        $scope.phones = Phone.query()

        $scope.orderProp = 'age'


    ###
    # DetailCtrl
    ###
    app.controller 'DetailCtrl', ($scope, $routeParams, Phone) ->

        $scope.phone = Phone.get {phoneId: $routeParams.phoneId}, (phone) ->
            $scope.mainImageUrl = phone.images[0]

        $scope.setImage = (imageUrl) ->
            $scope.mainImageUrl = imageUrl



