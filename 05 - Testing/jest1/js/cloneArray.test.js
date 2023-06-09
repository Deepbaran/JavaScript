const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
    //toEqual checks the value and not the reference
    //toBe checks the reference in case of objects (array is an object in JS)
})