function validateUsername(value){

  //value = RegExp(value);
 
  var courriel = /^[a-z0-9.]+@homeflix.(org|ca|com)$/;

  var username1 = /[a-zA-Z]{5}/; // ?!?

  var username2 = /[a-zA-Z0-9]{0,}/; 
  return (courriel.test(value) ||(username1.test(value.slice(0,4)) && username2.test(value.slice(5,)) ))

}

function validatePassword(value){
 
  var password = /(?=.*\d+)(?=.*[^A-Za-z0-9])(?=.*[A-Z]).{8,16}/;

  return (password.test(value)) 
}



function updateHeader(username){
	document.getElementById('username').innerHTML = username;

} 

function searchMovies(movies,searchValue) {
	
	var listeFilms = [];
	for(var i = 0; i<movies.length;i++){
		if (movies[i].title.includes(searchValue))
			listeFilms.push(movies[i]);
	}
	//console.log("listeFilms",listeFilms);
	return listeFilms;
	
} 

function sortMovies(movies, isAscending){
	
	var listeEnOrdre = movies.sort(function(a, b){
	    var movieA=a.title.toLowerCase(), movieB=b.title.toLowerCase()
	    if (movieA < movieB)  return -1 
	    if (movieA > movieB)  return 1
	    return 0 
	})

	return (isAscending) ? listeEnOrdre : listeEnOrdre.reverse();

}


function populateSelect(movies){
	//console.log("parametre movies dans populateSelect");
	//console.log(movies);
	var listeGenre = [];
	

	for (var i= 0; i< movies.length; i++){
		for (var j = 0; j< movies[i].genres.length;j++){
			if (!listeGenre.includes(movies[i].genres[j]))
				listeGenre.push(movies[i].genres[j])
		}
	}
	//console.log(listeGenre);
    return listeGenre; 
 }


function filterMovies(movies, genreFilter ){
	var listeFilms = [];
	//console.log("parametre movies dans filterMovies");
	//console.log(movies);
	//console.log(genreFilter);
	for (var i= 0; i< movies.length; i++){
		for (var j = 0; j< movies[i].genres.length;j++){
			if (movies[i].genres.includes(genreFilter))
				listeFilms.push(movies[i])
		}

	} 
	return listeFilms;

}


function displayMovie(movie){
	//console.log({title: movie.title,genres: movie.genres, element: movie.element});
	//return {title: movie.title,genres: movie.genres, element: movie.element}
}
