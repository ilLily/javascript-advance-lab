const cardArea = document.querySelector('#cardArea');
const myForm = document.querySelector('#myForm');


const searchShow = async (event) => {
    await event.preventDefault();
    const query = setQs();
    myForm.children[0].value = "";
    const data = await getshowData(query);
    renderData(data);
}

myForm.addEventListener('submit', searchShow);
//popState

window.addEventListener('popstate', async (event) => {
    const { pathname, search } = location;
    let query = search.split('=')[1];
    const data = await getshowData(query);
    renderData(data);
})

const setQs = () => {
    const inputVal = myForm.elements.query.value;
    const usp = new URLSearchParams(location.search)
    usp.set('query', inputVal);
    history.pushState({}, "", `?${usp.toString()}`)
    return usp.get('query');
}

const getshowData = async (query) => {
    try {
        const config = { params: { 'q': query } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        return res.data;
    } catch (er) {
        console.log(er);
    }

}

const renderData = (data) => {
    console.log(data);
    cardArea.innerHTML = "";
    data.map(({ show }) => {
        if (show.image.medium) {
            cardArea.innerHTML += `<div class="card" style="width: 18rem;">
           <img src="${show.image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            ${show.summary}
            <a href="${show.url}" class="btn btn-primary">see more at TVmaze</a>
            </div>
       </div>`
        }
    })
}

