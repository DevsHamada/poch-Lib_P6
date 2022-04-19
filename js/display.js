if (document.readyState === 'complete') {
  displayBtnAjout();
} else {
  document.addEventListener('DOMContentLoaded', displayBtnAjout);
  document.addEventListener('DOMContentLoaded', displayBookMark);

}

function displayBtnAjout() 
{ 
    document.getElementById("myBooks").insertAdjacentElement('afterbegin',newentete);
    document.getElementById("myBooks").insertAdjacentElement('beforeend',newresult);
    newentete.insertAdjacentElement('afterbegin',title);
    newentete.insertAdjacentElement('afterbegin',newlogo);
    newresult.insertAdjacentElement('afterbegin',content);
    newresult.insertAdjacentElement('afterbegin',newDivpop);

    btnadd.innerHTML = "Ajouter un livre";
    btnadd.id ="add-book"
    ins.insertAdjacentElement('afterend', btnadd);
    document.getElementById("add-book").addEventListener("click", displayNewBook);

        }
 function displayNewBook() 
{ 
            document.getElementById("myBooks").removeChild(btnadd);
            ins.insertAdjacentElement('afterend', newform);

            var newlabel = document.createElement("Label");
            newlabel.setAttribute("for","Titre du livre");
            newlabel.innerHTML = "Titre du livre";
            newform.insertAdjacentElement('beforeend', newlabel);

            textInput = document.createElement('INPUT'); //on crée l'élément (la balise) input
            textInput.id = 'title'; //on définit l'attribut id du input
            textInput.type='TEXT';  // de type text 
            textInput.name='myInput';  
            newform.insertAdjacentElement('beforeend', textInput); // la positionné 

            var newlabel2 = document.createElement("Label");
            newlabel2.setAttribute("for","Auteur");
            newlabel2.innerHTML = "Auteur";
            newform.insertAdjacentElement('beforeend', newlabel2);

            textInput2 = document.createElement('INPUT'); //on crée l'élément (la balise) input
            textInput2.id = 'author'; //on définit l'attribut id du input
            textInput2.type='TEXT';
            textInput2.name='myInput';
            newform.insertAdjacentElement('beforeend', textInput2);

            const btnfind = document.createElement("button");
            btnfind.innerHTML = "Rechercher";
            btnfind.id ="find-book"
            newform.insertAdjacentElement('beforeend', btnfind);

            const btndel = document.createElement("button");
            btndel.innerHTML = "Annuler";
            btndel.id ="cancel";
            newform.insertAdjacentElement('beforeend', btndel);
            
       //     ins.insertAdjacentHTML('afterend', '<br />');

            document.getElementById("find-book").addEventListener("click", searchForBook);
            document.getElementById("cancel").addEventListener("click",function(){location.reload()});
        }

      function displayBook(i , id , title , author , description , image){
      // crée un nouvel élément div
      let newDiv = document.createElement("div");
      newDiv.id= i+"book";
      newDiv.className="book";
      // ajoute le nœud texte au nouveau div créé
      newDivtop.insertAdjacentElement('afterbegin', newDiv);

      // crée un nouvel élément h4
      let newH4 = document.createElement("h3");
      newH4.id= i+"-Titre";
      newH4.className="entete-book";
      newH4.innerHTML ="Titre :" + title;
      // ajoute le nœud texte au nouveau div créé
      newDiv.insertAdjacentElement('afterbegin', newH4);

      // crée un nouvel élément h6
      let newH6 = document.createElement("h4");
      newH6.id= i+"-id";
      newH6.className = "id";
      newH6.innerHTML ="id :" + id;
      // ajoute le nœud texte au nouveau div créé
      newDiv.insertAdjacentElement('beforeend', newH6);

      // crée un nouvel élément h6
      var newp = document.createElement("h4");
      newp.id= i+"-Auteur";
      newp.className = "Auteur";
      newp.innerHTML ="Auteur :" + author;
      // ajoute le nœud texte au nouveau div créé
      newDiv.insertAdjacentElement('beforeend', newp);

      // crée un nouvel élément div
      var newDisc = document.createElement("div");
      newDisc.id= i+"-disc";
      newDisc.className = "disc";
      let disc = "Description : " + description ;
      newDisc.innerHTML = disc.substring(0,200);
      // ajoute le nœud texte au nouveau div créé
      newDiv.insertAdjacentElement('beforeend', newDisc);

      let newimg = document.createElement("img");
      newimg.src = image;
      newimg.id = i+"-image";
      newimg.className = "picture";
      newDiv.insertAdjacentElement('beforeend', newimg);
      
      let newicon = document.createElement("img");
      verifybook(i+"-id");
      if (exist){
        newicon.src =  iconBookMark;
      }
      else {
      newicon.src =  iconBookMarkAdd;
      }
      newicon.id = i+"-icon";
      newicon.className = "icon";
      newH4.insertAdjacentElement('beforeend', newicon);

      newH4.addEventListener("click", stockageLocal);

        }

  function displayBookMark(){ 
  //localStorage.removeItem("occurs");

  newresult.insertAdjacentElement('beforeend', newDivpop);
  bMark = 1;

   let recocc = localStorage.getItem("occurs");
   let occs = JSON.parse(recocc);

  console.log("occs : " +  occs );

  while (occs > 0) {  

    var monbookrecap = localStorage.getItem("objet"+occs);
    var monobjet = JSON.parse(monbookrecap);


    if (monobjet != null){


    // crée un nouvel élément div
    let newDiv = document.createElement("div");
    newDiv.id= occs+"book";
    newDiv.className="book";
    // ajoute le nœud texte au nouveau div créé
    newDivpop.insertAdjacentElement('afterbegin', newDiv);
    // crée un nouvel élément h4
    let newH4 = document.createElement("h3");
    newH4.id= occs+"-Titre";
    newH4.className="entete-book";
    newH4.innerHTML =monobjet.title;
    // ajoute le nœud texte au nouveau div créé
    newDiv.insertAdjacentElement('afterbegin', newH4);

    // crée un nouvel élément h6
    let newH6 = document.createElement("h4");
    newH6.id= occs+"-id";
    newH6.className = "id";
    newH6.innerHTML =monobjet.id;
    // ajoute le nœud texte au nouveau div créé
    newDiv.insertAdjacentElement('beforeend', newH6);

    // crée un nouvel élément h6
    var newp = document.createElement("h4");
    newp.id= occs+"-Auteur";
    newp.className = "Auteur";
    newp.innerHTML = monobjet.authors;
    // ajoute le nœud texte au nouveau div créé
    newDiv.insertAdjacentElement('beforeend', newp);

    // crée un nouvel élément div
    var newDisc = document.createElement("div");
    newDisc.id= occs+"-disc";
    newDisc.className = "disc";
    let disc =  monobjet.description ;
    newDisc.innerHTML = disc.substring(0,200); 
    // ajoute le nœud texte au nouveau div créé
    newDiv.insertAdjacentElement('beforeend', newDisc);

    let newimg = document.createElement("img");
    newimg.src =  monobjet.image;
    newimg.id = occs+"-image";
    newimg.className = "picture";
    newDiv.insertAdjacentElement('beforeend', newimg);

    let newicon = document.createElement("img");
    newicon.src =  iconTrash;
    newicon.id = occs+"-icon";
    newicon.className = "icon";
    newH4.insertAdjacentElement('beforeend', newicon);


    newicon.addEventListener("click", stockageremove);
  }
  occs = occs - 1;      

  }

 }


