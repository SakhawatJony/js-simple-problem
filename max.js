const business = 450;
const minister = 750;
const arrmy = 950;
// if (business > minister) {
//     console.log('business man ar polo onake bigerr');
// }
// else {
//     console.log('minister ar polo onake choto');
// }


// if (business > minister && business > arrmy) {
//     console.log('business man is bigger');

// }

// else if (minister > business && minister > arrmy) {
//     console.log('minister is bigger');
// }

// else {
//     console.log('arramy is bigger');
// }

function biggerNumbers(first, second) {
    if (first > second) {
        return first;
    }

    else {
        return second;
    }
}

// const max = biggerNumbers(50, 526);
// console.log('my bigger number is', max);
