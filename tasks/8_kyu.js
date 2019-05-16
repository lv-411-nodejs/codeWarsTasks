function countPositivesSumNegatives(input) {
    let positive = 0;
    let negative = 0;

    if (input === [] || input === null || input < 1)
        return [];

    for (let i=0; i<input.length; i++){
        if (input[i] > 0){
            positive += 1;
        } else {
            negative += input[i]
        }
    }
    return [positive, negative]
}

countPositivesSumNegatives([-1, -2, -3, 3, 2, 1]);

function stringToNumber (str){
    return Number(str)
}

stringToNumber("123");