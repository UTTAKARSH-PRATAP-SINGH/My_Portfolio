const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
     sideMenu.classList.remove('-right-64');
     sideMenu.classList.add('right-0');
}

function closeMenu(){
     sideMenu.classList.remove('right-0');
     sideMenu.classList.add('-right-64');
}


window.addEventListener('scroll', () => {
     if(scrollY > 50){
          navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm')
          navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
     }else{
          navBar.classList.remove ('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm')
          navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
          
     }
})


// const darkModeToggle = document.querySelector('button img'); // Selects your moon button image
// const htmlElement = document.documentElement;

// darkModeToggle.addEventListener('click', function() {
//     if (htmlElement.getAttribute('data-theme') === 'light') {
//         htmlElement.setAttribute('data-theme', 'dark');
//     } else {
//         htmlElement.setAttribute('data-theme', 'light');
//     }
// });

// light mode and dark mode

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.

// matchMedia('(prefers-color-scheme: dark)').matches)) {

// document.documentElement.classList.add('dark')

// } else {

// document.documentElement.classList.remove('dark')

// }

// function toggleTheme(){
//      document.documentElement.classList.toggle('dark');

// if(document.documentElement.classList.contains('dark')){

// localStorage.theme = 'dark';

// }else{
//      localStorage.theme = 'light';
// }

// }


// On page load, check localStorage or system preference for theme
function toggleTheme() {
     document.documentElement.classList.toggle('dark');
     
     console.log('Toggled theme:', document.documentElement.classList.contains('dark') ? 'dark' : 'light'); // Debug log
 
     if (document.documentElement.classList.contains('dark')) {
         localStorage.setItem('theme', 'dark');
     } else {
         localStorage.setItem('theme', 'light');
     }
 
     console.log('Current theme in localStorage:', localStorage.getItem('theme')); // Debug log
 }
   