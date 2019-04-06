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
	console.log("listeFilms",listeFilms);
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
	console.log("parametre movies dans populateSelect");
	console.log(movies);
	var listeGenre = [];
	

	for (var i= 0; i< movies.length; i++){
		for (var j = 0; j< movies[i].genres.length;j++){
			if (!listeGenre.includes(movies[i].genres[j]))
				listeGenre.push(movies[i].genres[j])
		}
	}
	console.log(listeGenre);
    return listeGenre; 
 }


function filterMovies(movies, genreFilter ){
	var listeFilms = [];
	console.log("parametre movies dans filterMovies");
	console.log(movies);
	console.log(genreFilter);
	for (var i= 0; i< movies.length; i++){
		for (var j = 0; j< movies[i].genres.length;j++){
			if (movies[i].genres.includes(genreFilter))
				listeFilms.push(movies[i])
		}

	} 
	return listeFilms;

}

var SHOW_SAMPLE = true;

function displayMovie(movie){
	console.log({title: movie.title,genres: movie.genres, element: movie.element});
	return {title: movie.title,genres: movie.genres, element: movie.element}
}

/*var element = createElement(li);
	element.className = "c-main_item o-layout_item u-1/4";
	var card = element.createElement(div);
		card.className = "c-main_item_card";
		var cover = card.createElement(div);
			cover.className = "c-main_item_cover";// -red"
			var preview = cover.createElement(p);
				preview.className = "c-main_item_preview";
				preview.innerHTML = //premiere lettre des titres
			var details = cover.createElement(div);
				details.className = "c-main_item_details";
				var title = details.createElement(h3);
					title.className = "c-main_item_header";
					title.innerHTML = "Title :";
					var titleText = title.createElement(p);
						titleText.className = "c-main_item_text";
						titleText.innerHTML = //titre du film
				var genre = details.createElement(h3);
					genre.className = "c-main_item_header";
					genre.innerHTML = "Genre :";
					var genreText = genre.createElement(p);
						genreText.className = "c-main_item_text";
						genreText.innerHTML = //genres du film
				var synopsis = details.createElement(h3);<
					synopsis.className = "c-main_item_header";
					synopsis.innerHTML = "Synopsis :";
					var synText = synopsis.createElement(p);
						synText.className = "c-main_item_text";
						synText.innerHTML = //synopsis du film
				var length = details.createElement(h3);
					length.className = "c-main_item_header";
					length.innerHTML = "Length :";
					var lengthText = length.createElement(span);
						lengthText.className = "c-main_item_span";
						lengthText.innerHTML = // movie length
				var language = details.createElement(h3);
					language.className = "c-main_item_header";
					language.innerHTML = "Language :";
					var languageText = language.createElement(span);
						languageText.className = "c-main_item_span";
						languageText.innerHTML = //langages du film
				var rating = details.createElement(h3);
					rating.className = "c-main_item_header";
					rating.innerHTML = "Rating :";
					var ratingText = rating.createElement(span);
						ratingText.className = "c-main_item_span";
						ratingText.innerHTML = // rating du film 
		var subTitle = card.createElement(h2);
			subTitle.className = "c-main_item_title";
			subTitle.innerHTML = //titre du film */