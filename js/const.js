const btnadd = document.createElement("button");
// crée un nouvel élément div
const newDivtop = document.createElement("div");
newDivtop.id = "booktop";
newDivtop.className = "booktop";

const newDivpop = document.createElement("div");
newDivpop.id = "bookpop";
newDivpop.className = "bookpop";

const newentete = document.createElement("header");
newentete.className = "head";

const newlogo = document.createElement("div");
newlogo.id = "logo";

const newresult = document.createElement("section");
newresult.id = "resultbook";

const newform = document.createElement("div");
newform.id = "form";

const h1titre = document.createElement("h1");

const ins = document.getElementsByClassName("h2")[0]; // <h2 class="h2">Nouveau Livre</h2>
const title = document.getElementsByClassName("title")[0]; // <h2 class="h2">Nouveau Livre</h2>
const content = document.getElementById("content");
const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";
const iconBookMark = "./image/bookmark.svg";
const iconBookMarkAdd = "./image/add-bookmark.svg";
const iconTrash = "./image/remove-bookmark.svg";

let exist = false;
let rechFind = 0;
let tagBookMark = false;
