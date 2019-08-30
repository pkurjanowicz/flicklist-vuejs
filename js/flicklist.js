

var api = {
	root: "https://api.themoviedb.org/3",
	token: "2c80210ad3239a0fdd40d6ce68fd02e0" // TODO put your api key here
}


function testTheAPI() {
	fetch(`${api.root}/discover/movie?api_key=${api.token}`)
		.then(resp => resp.ok ? resp : Promise.reject(resp))
		.then(function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		})
}


console.log("The script loaded!");
testTheAPI();
