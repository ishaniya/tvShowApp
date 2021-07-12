const form =  document.querySelector("#form");
const ul = document.querySelector("ul");

const getShows = async(movie) => {
    const url = `http://api.tvmaze.com/search/shows?q=${movie}`;

    const newData = await axios.get(url);

    for (let item of newData.data) {

        if (item.show.image) {
            const img = document.createElement('img');
            img.src = item.show.image.medium;
            img.style.margin = '20px';
            ul.append(img);
    
        }
    
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.dir(form.elements[0].value);

    const movie = form.elements[0].value;

    getShows(movie);

    form.elements[0].value='';
})