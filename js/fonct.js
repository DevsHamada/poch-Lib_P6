/*
La fonction searchForBook permet de récupérer le titre et l'auteur et à l'aide de l’API retourner 
Si trouve les livres correspond 
Si c'est vide ==> alerte

*/
function searchForBook(event) {
  event.preventDefault();
  let i = 0;
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  //console.log(title.value);
  if (title.value === "" || author.value === "") {
    alert("veuillez renseigner le titre et l'auteur !");
    location.reload();
  } else {
    i = 0;
    if (rechFind === 1) {
      document.getElementById("booktop").innerHTML = "";
      document
        .getElementById("content")
        .removeChild(document.getElementById("booktop"));
      rechFind = 0;
    }

    let request =
      GOOGLE_BOOKS_API + "?q=" + title.value + "+inauthor:" + author.value;
    fetch(request)
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (value) {
        //  console.log(value);
        // console.log(value.items);
        if (value.totalItems > 0) {
          // ajoute le nœud texte au nouveau div créé
          content.insertAdjacentElement("afterbegin", newDivtop);
          for (let book of value.items) {
            let description = book.volumeInfo.description;
            let image =
              "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Salesforce_P1_FR/unavailable.png";
            if (book.volumeInfo.description === null) {
              description = "Information manquante";
            }
            if (book.volumeInfo.imageLinks != null) {
              if (book.volumeInfo.imageLinks.thumbnail != null) {
                image = book.volumeInfo.imageLinks.thumbnail;
              }
            }

            displayBook(
              i,
              book.id,
              book.volumeInfo.title,
              book.volumeInfo.authors[0],
              description,
              image
            );
            rechFind = 1;
            i = i + 1;
          }
        } else {
          alert("Aucun livre n’a été trouvé!");
        }
      })
      .catch(function (err) {
        // Une erreur est survenue
      });
  }
}

/*
La fonction verifybook permet de vérifier si le livre est déjà ajouter à la poch'liste
*/
function verifybook(id) {
  exist = false;

  let nbrocc = localStorage.getItem("occurs");
  let nboc = JSON.parse(nbrocc);
  let identifiant = document.getElementById(id).innerText;

  console.log("identifiant : " + identifiant);
  console.log("nboc : " + nboc);

  while (nboc > 0) {
    let monbookrecap = localStorage.getItem("objet" + nboc);
    let monobjet = JSON.parse(monbookrecap);
    if (monobjet != null && identifiant === monobjet.id) {
      console.log("ok ");

      exist = true;
    }

    //console.log("ko");
    nboc = nboc - 1;
  }
}

/*
La fonction stockageLocal permet de stocker en localStorage les livres bookmark
*/
function stockageLocal(event) {
  event.preventDefault();

  let j = 0;
  let idbut = event.target.id;
  if (idbut.length > 10) {
    j = idbut.charAt(0) + idbut.charAt(1);
  } else {
    j = idbut.charAt(0);
  }

  let id = document.getElementById(j + "-id").innerText;
  let titre = document.getElementById(j + "-Titre").innerText;
  let auteur = document.getElementById(j + "-Auteur").innerText;
  let descript = document.getElementById(j + "-disc").innerText;
  let picture = document.getElementById(j + "-image").src;

  verifybook(j + "-id");

  console.log(exist);
  if (exist) {
    alert("Vous ne pouvez ajouter deux fois le même livre!");
  } else {
    if (tagBookMark) {
      document.getElementById("bookpop").innerHTML = "";
      tagBookMark = false;
    }
    let monoccurs = localStorage.getItem("occurs");
    let occ = JSON.parse(monoccurs);
    const BookMark = new Book(id, titre, auteur, descript, picture);
    BookMark.display();
    let monBook = JSON.stringify(BookMark);
    occ = occ + 1;
    localStorage.setItem("objet" + occ, monBook);
    localStorage.setItem("occurs", occ);

    console.log(occ);
    displayBookMark();
    document.getElementById(j + "-icon").src = iconBookMark;
  }
}
/*
La fonction stockageremove permet de retirer du localStorage les livres supprimés
*/
function stockageremove(event) {
  event.preventDefault();
  let l = 0;
  let idbut = event.target.id;
  if (idbut.length > 11) {
    l = idbut.charAt(0) + idbut.charAt(1);
  } else {
    l = idbut.charAt(0);
  }

  //console.log("supp : objet" + l);
  localStorage.removeItem("objet" + l);
  if (tagBookMark) {
    document.getElementById("bookpop").innerHTML = "";
    tagBookMark = false;
  }
  displayBookMark();
}
