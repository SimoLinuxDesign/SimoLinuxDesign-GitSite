/* @ default js*/
function yearNow(textlocation) {
  var data = new Date();
  var year;
  year = data.getFullYear();
  document.querySelector(textlocation).replaceWith(year);
}

/* Main Menu Interaction*/
function mainmenu() {
  let buttonmenu = document.getElementById("buttonmenu");
  let menu = document.querySelector(".main-nav");
  let check = 0;
  buttonmenu.addEventListener("click", function(){
    buttonmenu.classList.toggle("openmenu");
    if (check == 0){
      setTimeout(() => {
        menu.classList.toggle("showmenu");
      }, 50);
      setTimeout(() => {
        menu.classList.toggle("effecton");
      }, 100);
      check = 1;
    }else{
      setTimeout(() => {
        menu.classList.toggle("showmenu");
      }, 700);
      setTimeout(() => {
        menu.classList.toggle("effecton");
      }, 50);
      check = 0;
    } 
  })
}

/*Hide header with scrolling*/
function hidingHeaderScrolling (){
  let firstposition = window.pageYOffset;
  let header = document.querySelector(".main-header");
  let logo = document.querySelector(".main-logo");
  let buttonmenu = document.querySelector("#buttonmenu");
  window.onscroll = function (){
    let currentposition = window.pageYOffset;
    if (firstposition > currentposition){
      header.classList.remove("removeopacity");
      buttonmenu.classList.remove("butt-headergone");
      logo.classList.remove("logo-headergone");
    }else{
      header.classList.add("removeopacity");
      buttonmenu.classList.add("butt-headergone");
      logo.classList.add("logo-headergone");
    }
    firstposition = currentposition;
  }
}

function progressbar(){
  let wscroll = document.querySelector(".window-cont");
  let totalheight = ((wscroll.scrollHeight) /*- (wscroll.offsetHeight)*/);
  let scrollbar = document.querySelector(".list-progress-bar");
  wscroll.addEventListener("scroll", function(){
    calcolation = (((wscroll.scrollTop + wscroll.offsetHeight)* 100 ) / (totalheight )) + "%";
    console.log(calcolation);
    scrollbar.style.width = calcolation;
  })
  
}