
describe 'Filters', ->

    beforeEach module 'app'

    describe 'checkmark', ->

        it 'should display boolean as unicode checkmark or cross', inject (checkmarkFilter) ->
            expect(checkmarkFilter(true)).toBe "✓"
            expect(checkmarkFilter(false)).toBe "✘"


