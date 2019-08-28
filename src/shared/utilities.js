export const validateArea = (matrix) => {

    let isValid = true;
    let itemsInRow;

    if (!isIterable(matrix) || !matrix.length) {
        console.log('area does not contain rows');
        return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (!isIterable(matrix[i])) {
            console.log('Object not iterable');
            isValid = false;
            break;
        }

        const length = matrix[i].length;
        if (!length) {
            console.log('No items in list');
            isValid = false;
            break;
        }

        if (itemsInRow) {
            if (itemsInRow !== length) {
                console.log('Rows size not matching');
                isValid = false;
                break;
            }
        } else {
            itemsInRow = length;
        }
    }

    return isValid;
};

const isIterable = (obj) => {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}