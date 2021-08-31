const _ = {
    clamp (number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower)
        let clapamedValue = Math.min(lowerClampedValue, upper)
        return clapamedValue
    },

    inRange(number, start, end) {
        if(typeof end === 'undefined') {
            end = 0;
        }

        if(start > end) {
            let temp = 0 
            temp = start
            start = end
            end = temp 
        }

        let isInRange = false
        if (number >= start && number < end) {
            return true;
        } 

        return isInRange;
    },

    words(string) {
        let words = string.split(' ');
        return words;
    },

    pad(string, length) {
        if(string.length >= length) {
            return string;
        }

        length = length - string.length
        let startPaddingLength = Math.floor(length/2)
        let endPaddingLength = length - startPaddingLength
        let paddingString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
        return paddingString
    },

    has(object, key) {
        const hasValue = object[key]
        if(hasValue != undefined) {
            return true;
        } 
        return false
    },

    invert(object) {
       let invertedObject = {}
       for(const key in object) {
            let originalValue = object[key];
            invertedObject= {originalValue: key}
        } 
        return invertedObject;

    },

    findKey(object, predicate) {
        for(let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value)
            if(predicateReturnValue) {
                return key
            }
            
        }
        return undefined
    },

    drop(arr, num) {
        if(typeof num === 'undefined') {
            num = 1
        }

        let droppedArray = arr.splice(0, num)
        return arr
    },

    dropWhile(array, predicate) {
        
        const cb = (ele, idx) => {
            return !predicate(ele, idx, array)
        }
        const dropNumber = array.findIndex(cb)
        const droppedArray = this.drop(array, dropNumber)
        return droppedArray;
        
    },

    chunk(array, size) {
        if(typeof size === 'undefined') {
            size = 1;
        }
        const arrayChunks = []
        for(let i=0; i<array.length; i+=size) {
            let arrayChunk = array.slice(i, i+size)
            arrayChunks.push(arrayChunk)
        }
        return arrayChunks
    }
}



// Do not write or modify code below this line.
module.exports = _;