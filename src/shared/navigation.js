const unmappedCellIndicator = ' ';
export const blockedPath = '#';
export const destiny = 'o';


export const mapRoutes = (matrix) => {

    const translatedMatrix = convertMatrix(matrix);
    console.log(translatedMatrix);

    let step = 0;

    // find cell references
    let references = findReferenceCells(translatedMatrix, destiny);

    // set next steps
    while (references.length) {

        step = step + 1;
        for (let refer of references) {
            setStep(translatedMatrix, refer.row, refer.col, step);
        }

        references = findReferenceCells(translatedMatrix, step);
    }

    console.log({after: translatedMatrix});
    return translatedMatrix;
}

const convertMatrix = (matrix) => {

    return matrix.map( row => {
        return row.map( cell => {
            if (cell === 1) {
                return unmappedCellIndicator;
            } else if (cell === 9) {
                return destiny
            } else {
                return blockedPath;
            }
        })
    })
};

const findReferenceCells = (matrix, value) => {
    const referencesPosition = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let cellIndex = 0; cellIndex < matrix[rowIndex].length; cellIndex++) {
            if (matrix[rowIndex][cellIndex] === value) {
                referencesPosition.push({
                    row: rowIndex,
                    col: cellIndex
                })
            }
        }
    }
    return referencesPosition;
}

const setStep = (matrix, cellRow, cellCol, step) => {

    const nextStepCells = [];

    // Check up position and set step
    const upperRow = cellRow-1;
    if (isValidPosition(matrix, upperRow, cellCol) && isUnmappedCell(matrix[upperRow][cellCol])) {
        matrix[upperRow][cellCol] = step;
    }

    // Check bottom position
    const bottomRow = cellRow+1;
    if (isValidPosition(matrix, bottomRow, cellCol) && isUnmappedCell(matrix[bottomRow][cellCol])) {
        matrix[bottomRow][cellCol] = step;
    }

    // Check right position
    const rightCol = cellCol+1;
    if (isValidPosition(matrix, cellRow, rightCol) && isUnmappedCell(matrix[cellRow][rightCol])) {
        matrix[cellRow][rightCol] = step;
    }

    // Check left position
    const leftCol = cellCol-1;
    if (isValidPosition(matrix, cellRow, leftCol) && isUnmappedCell(matrix[cellRow][leftCol])) {
        matrix[cellRow][leftCol] = step;
    }

    return nextStepCells;
}

const isValidPosition = (matrix, row, col) => {
    let isValid = false;

    // Check if inside range
    if (row >= 0 && row < matrix.length) {
        if (col >= 0 && col < matrix[row].length) {
            isValid = true;
        }
    }

    return isValid;
}

const isUnmappedCell = (cell) => cell === unmappedCellIndicator;

/**
 * DEPRECATED
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} col 
 */
// const isThereFreePath = (matrix, row, col) => {

//     // Up
//     if (isValidPosition(matrix, row-1, col) && isUnmappedCell(matrix[row-1][col])) {
//         return true
//     }

//     // Down
//     if (isValidPosition(matrix, row+1, col) && isUnmappedCell(matrix[row+1][col])) {
//         return true
//     }

//     // Right
//     if (isValidPosition(matrix, row, col+1) && isUnmappedCell(matrix[row][col+1])) {
//         return true
//     }

//     // Left
//     if (isValidPosition(matrix, row, col-1) && isUnmappedCell(matrix[row][col-1])) {
//         return true
//     }

//     return false;
// }