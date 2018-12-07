// zadanie 3 zajecia 4
function sub(a, b) {
    const result = a - b;
    return new Promise((resolve, reject) => {
        if (result < 0) {
            reject('mniej niz 0');
        }
        resolve(result);
    });
}


sub(2, 12)
    .then(result => {
        console.log('result', result)
    })
    .catch(error => {
        console.log(error)
        // return sub(2, 1);
        // return Promise.reject('abc')
        throw new Error('aaa')
    })
    .then(result => {
        console.log('result2', result)
    })
    .catch(
        err => console.log(err)
    )

console.log('app.end')