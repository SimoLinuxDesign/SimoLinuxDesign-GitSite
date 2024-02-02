/*Constant Item*/
const backBtnLink="../../tutorial.html"

function addinfo(){
  let mainTitleSel = document.querySelector(".main-art-title");
  let icon = document.querySelector(".art-icon");
  let infoname = document.querySelector(".info-name-inner");
  let infovers = document.querySelector(".info-vers-inner");
  let infocomp = document.querySelector(".info-comp-inner");
  let infogit = document.querySelector(".info-git-inner");
  let infodesc = document.querySelector(".info-desc");
  let infoinst = document.querySelector(".installation-text");
  let backBtnsel = document.querySelector(".backbtnclass")
  for (let i = 0; i < (menu.length); i++){
    if (menu[i].nameLink == nameclass){
      mainTitleSel.textContent = (menu[i].info.name);
      icon.setAttribute("src", (menu[i].info.linkImage2));
      infoname.textContent = (menu[i].info.name);
      infovers.textContent = (menu[i].info.version);
      infocomp.textContent = (menu[i].info.compatibility);
      infogit.setAttribute("href", (menu[i].info.gitURL))
      infodesc.textContent = (menu[i].info.description);
      /*infoinst.textContent = (menu[i].info.install);*/
      
    }
  }
  backBtnsel.setAttribute("href", backBtnLink);
}

addinfo();