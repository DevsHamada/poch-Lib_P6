class Book {

	constructor(id, title, authors, description, image) {
	  this.id = id;
	  this.title = title;
	  this.authors = authors;
	  this.description = description;
	  this.image = image;
	}
	display() {
	  console.log("super" + this.id)
	}
  }