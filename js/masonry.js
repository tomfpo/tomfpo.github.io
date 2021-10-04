var elem = document.querySelector('.grid-container');
    var msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 230,
        gutter:20,
        isFitWidth:true
      });
    
 function toggleMenu() {
   menu.classList.toggle("menu_opened");
 }
 
 openMenuBtn.addEventListener("click", toggleMenu);
 closedMenuBtn.addEventListener("click", toggleMenu);

 const menuLinks = document.querySelectorAll('navbar-nav a[href^="#"]')
 
 menuLinks.forEach(menuLink => {
   menuLink.addEventListener("click", function() {
     menu.classList.remove ("menu_opened");
   })
 } )