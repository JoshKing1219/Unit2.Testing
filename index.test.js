const {multiply, concatOdds} = require ("./index.js")


describe('multiply', () => {
    test('it multiplies positive numbers correctly', () => {
        expect(multiply(3, 4)).toEqual(12)
        expect(multiply(2, 2)).toEqual(4)
        expect(multiply(4, 1)).toEqual(4)
    })
    test('it multiplies negative numbers correctly', () => {
        expect(multiply(-4, -2)).toEqual(8)
        expect(multiply(-2, -8)).toEqual(16)
        expect(multiply(-5, -5)).toEqual(25)
    })
    test('it multiplies negative and positive numbers correctly', () => {
        expect(multiply(-4, 2)).toEqual(-8)
        expect(multiply(-10, 5)).toEqual(-50)
        expect(multiply(16, -2)).toEqual(-32)
    })
})

describe('concatOdds', () => {
    test('it returns positive odd numbers in ascending order', () => {
        expect(concatOdds([1, 3, 2], [9, 3, 1])).toEqual([1, 3, 9])
        expect(concatOdds([1, 8, 3], [5, 9])).toEqual([1, 3, 5, 9])
        expect(concatOdds([1, 9, 13], [5, 2, 6])).toEqual([1, 5, 9, 13])
    })
    test('it returns negative odd numbers in ascending order', () => {
        expect(concatOdds([-1, -2, -7], [-1, -4])).toEqual([-7, -1])
        expect(concatOdds([-3, -2], [-4, -6, -1])).toEqual([-3, -1])
        expect(concatOdds([-2, -14, -17, -1], [-2, -7, -9, -13])).toEqual([-17, -13, -9, -7, -1])
    })
    test('it returns both negative and positive odd numbers in ascending order', () => {
        expect(concatOdds([-1, 3], [2, 7, -3, 5])).toEqual([-3, -1, 3, 5, 7])
        expect(concatOdds([4, 8, 10, -11], [-2, 6, 3])).toEqual([-11, 3])
        expect(concatOdds([-1, 3, 7, 8, 10], [50, 17, -5, 8, 41, 9])).toEqual([-5, -1, 3, 7, 9, 17, 41])
    })
})