/*Needed Variables*/
let menulenght = menu.length;
let listmenu = document.querySelector(".listmenu"); //Lista
let icontitle = document.querySelector(".icontitle"); //Titolo Icona
let iconimg = document.querySelector(".listicon"); // Icon PNG
let infoname = document.querySelector(".desc-name-inner"); //Name Description
let infover = document.querySelector(".desc-version-inner") //Version Description
let infocomp = document.querySelector(".desc-compatibility-inner");//Compatibility Description
let infodesc = document.querySelector(".full-description");// Full Description

/*Only Define Variables*/
let createvar;
let createli;
let createa;
let innertext;
let classcounter;

for (let i = 0; i < menulenght; i++){
  /*Creation Menu Links*/
  createli = document.createElement("li");
  createa = document.createElement("a");
  createa.setAttribute("href",(menu[i].info.url));
  createa.textContent=(menu[i].nameLink);
  createa.classList.add("classlink");
  listmenu.appendChild(createli);
  createli.appendChild(createa);
}

  let links = document.querySelectorAll(".classlink");
  
  for ( let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseover", function(){
      icontitle.textContent=(menu[i].info.name);
      iconimg.setAttribute("src", (menu[i].info.linkImage));
      infoname.textContent=(menu[i].info.name);
      infover.textContent=(menu[i].info.version);
      infocomp.textContent=(menu[i].info.compatibility);
      infodesc.textContent=(menu[i].info.description);


    })
  }
    
  
    

  /*Description*/
