
module.exports = (app) ->

    app.factory 'Phone', ($resource) ->

        $resource('assets/data/phones/:phoneId.json', {}, {
            query: { method: 'GET', params: {phoneId: 'phones'}, isArray: true }
        })

