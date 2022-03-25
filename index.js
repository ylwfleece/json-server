let index = 3;

function generateMovieCard(movie) {
    return `<div class="movie-carousel__card"><img id="movie-${movie.id}" src="${movie.imgUrl}" class="movie-carousel__card__img">
    <p class="movie-carousel__card__name">${movie.name}</p>
    <p  class="movie-carousel__card__outlineInfo">${movie.outlineInfo}</p></div>`
}

function sliceMovies(movies, index) {
    console.log(index);
    if (index < 5) {
        return movies.slice(index, index + 4);
    } else {
        return movies.slice(5);
    }
}

function generateMovieCarousel(movies) {
    let fourMovies = sliceMovies(movies, index);
    return fourMovies.map(movie => generateMovieCard(movie)).join('');
}

function renderMovieCarousel(movies) {
    const tmp = generateMovieCarousel(movies);
    const ele = document.querySelector('.movie-carousel');
    render(ele, tmp);
}

function render(element, template) {
    element.innerHTML = template;
}

function getMovies() {
    return fetch('http://localhost:3000/movies')
        .then((response) => response.json())
}

function displayMovies() {
    getMovies().then(movies => {
        renderMovieCarousel(movies);
    })
}

function setUpArrows() {

    document.querySelector('.left-arrow').addEventListener('click', (e) => {
        index -= 1;
        displayMovies();
    })

    document.querySelector('.right-arrow').addEventListener('click', (e) => {
        index += 1;
        displayMovies();
    })

}

function init() {
   setUpArrows();
   displayMovies();
}

init();



    
