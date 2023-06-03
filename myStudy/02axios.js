//=====async/await======

// const getJoke = async () => {
//     let res = await fetch('https://icanhazdadjoke.com/');
//     // let data = await res.json();
//     console.log(res);
// }

// getJoke();

//=====axios.get======
const showJoke = document.querySelector('#showJoke');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com', config);
        return res.data.joke;
    } catch (er) {
        return "error";
    }
}

const addJoke = async () => {
    const dadJoke = await getDadJoke();
    const joke = document.createElement('li');
    joke.append(dadJoke);
    showJoke.prepend(joke);
}
// getDadJoke();