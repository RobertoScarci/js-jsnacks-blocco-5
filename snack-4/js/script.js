const listNumber = [
    '1',
    '2',
    '3',
    '4'
]

const listLetter = [
    'A',
    'B',
    'C',
    'D'
]

if( listNumber.length !== listLetter.length ){
    alert('impossinile unire')
} else {
    const newArray = []
}

listLetter.forEach((element, index ) => {
    newArray.push(listNumber[index], element);
})


console.log(newArray)