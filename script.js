$(document).ready(function() {
	$.ajax({
		url: "https://api.parse.com/1/classes/NewsItem1",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('X-Parse-Application-Id', 'gzdH13KmNJDYnb7xNl3ZFRBnx3Hm3QVJXKpHoViW');
			xhr.setRequestHeader('X-Parse-REST-API-Key', 'REoadyfaQ5OVoWyDn8O9p8Xwx5Wm807eqeUwrJdK');
			}
		})
	.done(function(response) {
		for(var i = 0; i < response.results.length; i++){
			$('.newsfeed').append('<h2>'+response.results[i].title+'</h2>');
			$('.newsfeed').append('<p>'+response.results[i].body+'</p>');
		};
	});
});