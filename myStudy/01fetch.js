// fetch('https://swapi.dev/api/people/1/')
//     .then((r) => {
//         return r.json();
//     }).then((data) => {
//         console.log(data);
//     }).then(() => {
//         return fetch('https://swapi.dev/api/people/2/')
//     }).then((r) => {
//         return r.json();
//     }).then((data) => {
//         console.log(data);
//     }).catch((er) => {
//         console.log(er);
//     })

const getData = async (url) => {
    try {
        const response = await fetch(url);
        const rJson = await response.json();
        console.log(rJson);
    } catch (er) {
        console.log(er);
    }
    // .then((r) => {
    //     return r.json();
    // }).then(data => {
    //     console.log(data);
    // }).catch((er) => {
    //     console.log(er);
    // })
}
getData('https://swapi.dev/api/people/1ddd/');