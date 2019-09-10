
var api = {
	root: "https://api.themoviedb.org/3",
  	token: "2c80210ad3239a0fdd40d6ce68fd02e0" // TODO 0 put your api key here
}

var flicklistView = new Vue({
	el: '#mount-target',
	data: function() {
		return {
			// This is the data model.
			// Whenever it changes, Vue will automatically re-render
			// the html for us.
			watchlistItems: [],
			browseItems: []
		};
	},
	methods: {
		discoverMovies: function () {
			/**
			 * Makes an AJAX request to themoviedb.org, asking for some movies
			 * if successful, updates the data.browseItems appropriately
			 */

			fetch(`${api.root}/discover/movie?api_key=${api.token}`)
					.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
					.then((response) => {
						console.log("We got a response from The Movie DB!");
						console.log(response);
						// TODO 2
						// update this.browseItems, setting it equal to the movies we recieved in the response
						this.browseItems = response.results

					});
		},
		addToWatchlist(title) {
			this.watchlistItems.push(title);
		}
	},
	mounted: function() {
		// call discoverMovies when things start up
		this.discoverMovies();
	},
});
