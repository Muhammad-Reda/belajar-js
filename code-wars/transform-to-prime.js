// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript

const trialDivision = (sum) => {
    if (sum == 2) {
        return true;
    }

    let i = 2;
    let k = Math.ceil(Math.sqrt(sum));

    while (i <= k) {
        if (sum % i === 0) {
            return false;
        }
        i += 1;
    }

    return true;
};

function minimumNumber(numbers) {
    //your code here
    let total = 0;
    let prime;

    for (number of numbers) {
        total += number;
    }

    for (let i = total; i < total * 2; i++) {
        let p = trialDivision(i);
        if (p) {
            prime = i;
            break;
        }
    }

    return prime - total;
}

console.log(minimumNumber([3, 1, 2]));
console.log(minimumNumber([5, 2]));
console.log(minimumNumber([1, 1, 1]));
console.log(minimumNumber([2, 12, 8, 4, 6]));
console.log(minimumNumber([50, 39, 49, 6, 17, 28]));
