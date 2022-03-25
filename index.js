// get all movies from server
// generate movie cards 
// display movie cards

// set up arrows to render based on display indices


function generateMovieCard(movie) {
    return `<img id="movie-${movie.id}" src="${movie.imgUrl}" class="moviecarousel__card__img">
    <p class="moviecarousel__card__name">${movie.name}</p>
    <p  class="moviecarousel__card__outlineInfo">${movie.outlineInfo}</p>`
}

function generateMovieCarousel(movies) {
    return movies.map(movie => generateMovieCard(movie)).join('');
}

function renderMovieCarousel(movies) {
    const tmp = generateMovieCarousel(movies);
    const ele = document.querySelector('.moviecarousel');
    render(ele, tmp);
}

function render(element, template) {
    element.innerHTML = template;
}

let movies = fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(moviesJson => renderMovieCarousel(moviesJson))
    
