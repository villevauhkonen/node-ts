import returnName from '../returnName'

describe('returnName function', () => {

    it('Should exist', () => {
        expect(returnName).toBeDefined()
    })

    it('Should return input', () => {
        const result = returnName('ville')
        expect(result).toBe('ville')
    })
})