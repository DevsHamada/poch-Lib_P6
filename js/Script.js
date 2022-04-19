function bascule(id) 
{ 
	if (document.getElementById(id).style.visibility == "hidden")
	{
			document.getElementById(id).style.visibility = "visible"; 
			document.getElementById("buttonadd").style.visibility = "hidden"; 
	}
}
function askBook() {
	fetch("https://www.googleapis.com/books/v1/volumes?q=fleurs+inauthor:keyes")
	.then(function(res) {
		console.log(res);
	  if (res.ok) {
		return res.json();
	  }
	})
	.then(function(value) {
		document
		.getElementById("hello-result")
		.innerText = value.kind;
		console.log(value);

	})	
	.catch(function(err) {
		console.log(err);
	});
  }
  