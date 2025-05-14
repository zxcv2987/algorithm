function solution(number, k) {
    let result = [];
    let digits = number.split('').map(Number);
    let targetLength = number.length - k;
    let start = 0;

    for (let i = 0; i < targetLength; i++) {
        let maxIndex = start;
        let maxDigit = digits[start];

        for (let j = start; j <= k + i; j++) {
            if (digits[j] > maxDigit) {
                maxDigit = digits[j];
                maxIndex = j;
            }
        }

        result.push(maxDigit);
        start = maxIndex + 1;
    }

    return result.join('');
}

solution("4177252841",4)