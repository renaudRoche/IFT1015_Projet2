function validateUsername(value){

  //value = RegExp(value);
 
  var courriel = /^[a-z0-9.]+@homeflix.(org|ca|com)$/;

  //var username1 = /[a-zA-Z]{5}/; // ?!?

  //var username2 = /[a-zA-Z0-9]{0,}/; 

  var username = true;
  for (var i = 0; i < 5; i++) {
  	if (!(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90 || 
          value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122)){
  		username = false;
        break;
    }
  }
  if (value.length > 5 && username)
  	for (var j = 5; j < value.length; j++) {
		if (!(value.charCodeAt(j) >= 65 && value.charCodeAt(j) <= 90 || 
			value.charCodeAt(j) >= 97 && value.charCodeAt(j) <= 122 ||
			value.charCodeAt(j) >= 48 && value.charCodeAt(j) <= 57)){
			username = false;
            break;
        }
	}

  return (courriel.test(value) ||username) //1.test(value.slice(0,4)) && username2.test(value.slice(5,)) ))
  //return true;
}

function validatePassword(value){
 
  var password = /(?=.*\d+)(?=.*[^A-Za-z0-9])(?=.*[A-Z]).{8,16}/;
  return true;
  //return (password.test(value)) 
}



function updateHeader(username){
	document.getElementById('username').innerHTML = username;

} 

function searchMovies(movies,searchValue) {
	var listeFilms = [];
	var movieTitle = "";
	if (searchValue == null) searchValue = "";
	for(var i = 0; i<movies.length;i++){
		movieTitle= movies[i].title.toUpperCase();
		if (movieTitle.includes(searchValue.toUpperCase()))
			listeFilms.push(movies[i]);
	}
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
	var listeGenre = [];
	for (var i= 0; i< movies.length; i++){
		for (var j = 0; j< movies[i].genres.length;j++){
			if (!listeGenre.includes(movies[i].genres[j]))
				listeGenre.push(movies[i].genres[j])
		}
	}
    return listeGenre; 
 }


function filterMovies(movies, genreFilter ){
	var listeFilms = [];
	console.log("parametre movies dans filterMovies");
	console.log(movies);
	for (var i= 0; i< movies.length; i++){
			if (movies[i].genres.includes(genreFilter))
				listeFilms.push(movies[i])

	} 
	return listeFilms;

}



function displayMovie(movie){
	var element = document.createElement("div");
		document.className = "c-main_item_card";
		var cover = document.createElement("div");
			var colorChosen = Math.floor(Math.random()*4);
			if (colorChosen == 0) var color = "c-main_item_cover -green";
			if (colorChosen == 1) var color = "c-main_item_cover -blue";
			if (colorChosen == 2) var color = "c-main_item_cover -purple";
			if (colorChosen == 3) var color = "c-main_item_cover -red";
			cover.className = color  
			element.appendChild(cover);
			var preview = document.createElement("p");
				preview.className = "c-main_item_preview";
				cover.appendChild(preview);
				var splitTitle = movie.title.split(" ");
				preview.innerHTML = splitTitle[0].charAt(0).toUpperCase() + ((splitTitle.length>1)? splitTitle[1].charAt(0).toUpperCase() : "") + ((splitTitle.length>2)? splitTitle[2].charAt(0).toUpperCase() : "");
			var details = document.createElement("div");
				details.className = "c-main_item_details";
				cover.appendChild(details);
				var title = document.createElement("h3");
					title.className = "c-main_item_header";
					details.appendChild(title);
					title.innerHTML = "Title : ";
					var titleText = document.createElement("p");
						titleText.className = "c-main_item_text";
						title.appendChild(titleText);
						titleText.innerHTML = movie.title ;
				var genre = document.createElement("h3");
					genre.className = "c-main_item_header";
					details.appendChild(genre);
					genre.innerHTML = "Genre : ";
					var genreText = document.createElement("p");
						genreText.className = "c-main_item_text";
						genre.appendChild(genreText);
						genreText.innerHTML = movie.genres.join(", ");
				var synopsis = document.createElement("h3");
					synopsis.className = "c-main_item_header";
					details.appendChild(synopsis);
					synopsis.innerHTML = "Synopsis : ";
					var synText = document.createElement("p");
						synText.className = "c-main_item_text";
						synopsis.appendChild(synText);
						synText.innerHTML = movie.overview.slice(0,110) + ((movie.overview.length > 130) ? "..." : "");
				var length = document.createElement("h3");
					length.className = "c-main_item_header";
					details.appendChild(length);
					length.innerHTML = "Length : ";
					var lengthText = document.createElement("span");
						lengthText.className = "c-main_item_span";
						length.appendChild(lengthText);
						lengthText.innerHTML = Math.floor(movie.runtime/60) + "h" + movie.runtime%60 + "min";
				var language = document.createElement("h3");
					language.className = "c-main_item_header";
					details.appendChild(language);
					language.innerHTML = "Language : ";
					var languageText = document.createElement("span");
						languageText.className = "c-main_item_span";
						language.appendChild(languageText);
						languageText.innerHTML = movie.language.toUpperCase();
				var rating = document.createElement("h3");
					rating.className = "c-main_item_header";
					details.appendChild(rating);
					rating.innerHTML = "Rating : ";
					var ratingText = document.createElement("span");
						ratingText.className = "c-main_item_span";
						rating.appendChild(ratingText);
						ratingText.innerHTML = movie.rating + "/10"; 
	var subTitle = document.createElement("h2");
		subTitle.className = "c-main_item_title";
		element.appendChild(subTitle);
		subTitle.innerHTML = movie.title ;
	return {title: movie.title,genres: movie.genres, element: element}
}
