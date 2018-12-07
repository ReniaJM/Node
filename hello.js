const promise= new Promise((resolve, reject) =>{
    setTimeout(()=> {resolve('hello');
    }, 5000)
});

promise
.then (one =>{
    console.log(one)
});