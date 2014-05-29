
describe 'Services', ->

    beforeEach module 'app'

    describe 'Phone', ->

        it 'should be defined', inject (Phone) ->
            expect(Phone).toBeDefined()