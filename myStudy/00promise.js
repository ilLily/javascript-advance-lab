const fakeRequest = (url) => {
    return new Promise((success, fail) => {
        setTimeout(() => {
            Math.random() > .5 ? success('success') : fail('fail');
        }, 2000)
    })
}

//new promise function will return a promise object（pending). 
//要有個東西去接這個promise object的結果，才能看到結果，或把這個結果拿來運用 


fakeRequest('/home/happy')//這裡會產出一個promise object 
    .then((r) => { //接收成功的結果
        console.log(r);
        console.log('done with request');
    })
    .catch((er) => { //接收失敗的結果
        console.log(er);
        console.log('error');
    })


const changeBgInEverySecond = (color, delay) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolved();
        }, delay)
    })
}

changeBgInEverySecond('red', 1000)
    .then(() => changeBgInEverySecond('orange', 1000))
    .then(() => changeBgInEverySecond('yellow', 1000))
    .then(() => changeBgInEverySecond('green', 1000))
    .then(() => changeBgInEverySecond('blue', 1000))
    .then(() => changeBgInEverySecond('purple', 1000));