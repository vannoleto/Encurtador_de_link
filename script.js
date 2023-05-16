function encurtarLink() {
	var url = document.getElementById("url").value;
	var accessToken = "SEU_CODIGO_TOKEN";
	var apiUrl = "https://api-ssl.bitly.com/v4/shorten";

	fetch(apiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + accessToken
		},
		body: JSON.stringify({
			long_url: url
		})
	})
	.then(response => response.json())
	.then(data => {
		document.getElementById("resultado").value = data.link;
	})
	.catch(error => console.error(error));
}
