
module.exports = (app) ->

    app.filter 'checkmark', ->

        (input) ->
            if input then "✓" else "✘"