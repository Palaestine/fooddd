
/************************************* Search Page*******************************************************/

const searchIcon = document.getElementById("search__icon"),
      searchPage = document.querySelector(".search__page"),
      searchClose = document.querySelector(".search__close");


if(searchIcon)
{
    searchIcon.addEventListener("click" , ()=>{
        searchPage.classList.add("open__search");
    });
}

if(searchClose)
{
    searchClose.addEventListener("click" , ()=>{
        searchPage.classList.remove("open__search");
    });
}

/********************************************************************************************/

const toggle = document.getElementById("toggle"),
      closee  = document.getElementById("close"),
      menu = document.querySelector(".menu");
     



      if(toggle)
      toggle.addEventListener("click" , ()=>{
        menu.classList.add("show__menu")
      });
      if(closee)
      closee.addEventListener("click" , ()=>{
        menu.classList.remove("show__menu")
      });


/*==============================  Show Menu  =========================================*/

const navLink = document.querySelectorAll(".nav__link");

      const linkActive = () =>{
        const menuu = document.querySelector(".menu");

                 menuu.classList.remove("show__menu");
      }

      navLink.forEach(m => m.addEventListener("click" , linkActive));


      
/*==============================  Scroll Section Active Link  =========================================*/

const sectionss = document.querySelectorAll("section"),
menuList = document.querySelectorAll("nav .menu .menu__list  a");


function activeMenu (){
  let len = sectionss.length;
  
  while(--len && window.scrollY + 97 < sectionss[len].offsetTop){}
  menuList.forEach(sec => sec.classList.remove("activem"));
  menuList[len].classList.add("activem");
}

activeMenu();
window.addEventListener("scroll" , activeMenu)

/*==============================  Loader =========================================*/

onload = ()=>{
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.display = "none"}
    ,2500)

  }

