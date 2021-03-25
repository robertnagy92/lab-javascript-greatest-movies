// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArr) => {
let directorsArr = moviesArr.map(eachMovie => {
    return eachMovie.director
})
return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    return arr.filter(({ director, genre }) =>
        genre.includes("Drama") && director === "Steven Spielberg"
    ).length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    const imdbMovies = arr.length;
    const sumRates = arr.reduce((acc, val) => acc + Number(val.rate), 0);

    return Number(Number(sumRates / imdbMovies).toFixed(2));
  }
// Iteration 4: Drama arr - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(({genre}) => genre.includes("Drama"));
    if(dramaMovies.length === 0){
        return 0
    }
    return ratesAverage(dramaMovies) 
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let arrCopy = JSON.parse(JSON.stringify(arr))
    const orderedMovies = arrCopy.sort((movieA, movieB) => {
        if (movieA.year >= movieB.year) {
          return 1;
        }
        return -1;
      });
      return orderedMovies
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let arrCopy = JSON.parse(JSON.stringify(arr))
    const orderedMovies = arrCopy.sort((movieA, movieB) => {
      if (movieA.title >= movieB.title) {
        return 1;
      }
      return -1;
    });
  
    return orderedMovies
      .map(({ title }) => title)
      .filter((movie, index) => index < 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
