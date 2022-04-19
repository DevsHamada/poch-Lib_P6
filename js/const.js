const btnadd = document.createElement("button");
// crée un nouvel élément div
let newDivtop = document.createElement("div");
    newDivtop.id= "booktop";
    newDivtop.className="booktop";

let newDivpop = document.createElement("div");
    newDivpop.id= "bookpop";
    newDivpop.className="bookpop"; 

let newentete = document.createElement("div");
    newentete.className="head"; 

let newlogo = document.createElement("div");
    newlogo.id= "logo";

let newresult= document.createElement("div");
    newresult.id= "resultbook";

let newform = document.createElement("div");
newform.id= "form";

let h1titre = document.createElement("h1");

let rech = 0;  
let bMark = 0;  
let exist =  false ; 
let ins =document.getElementsByClassName("h2")[0]; // <h2 class="h2">Nouveau Livre</h2>
let title =document.getElementsByClassName("title")[0]; // <h2 class="h2">Nouveau Livre</h2>
let content =document.getElementById("content"); 
let tabBook = [];
let GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";
const iconBookMark = "./image/bookmark.svg";
const iconBookMarkAdd = "./image/add-bookmark.svg";
const iconTrash = "./image/remove-bookmark.svg";
let i = 1 ;
let k = 1 ;
let j = 0;