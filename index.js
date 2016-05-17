function search(query){

	query = encodeURI(query.replace(/\s+/g, '+').toLowerCase());

	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			obj = JSON.parse(xmlhttp.responseText);
			items = obj.items;
			console.log(items);

			var string = "";
			for(key in items) {
				item = items[key];
				title = item.snippet.title;
				string += "<li>";
				string += "<a href='http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v="+item.id.videoId+"'><b>"+title+"</b></a>";
				string += " by <b>"+item.snippet.channelTitle+"</b>";
				string += " <a href='http://www.youtube.com/watch?v="+item.id.videoId+"' target='_blank'>[see]</a>";
				string += "</li><br>";
			}
			document.getElementById("results").innerHTML = string+"<br><br>";
			actual_query = query;
		}
	}

	/* API: AIzaSyCwv9JP-vBoOCEzDB6mxEImOeQR5CNGzxE */
	xmlhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+query+"&type=video&key=AIzaSyCwv9JP-vBoOCEzDB6mxEImOeQR5CNGzxE", true);
	xmlhttp.send();
}