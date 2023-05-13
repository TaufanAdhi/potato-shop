const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#hamburger-menu');

menu.onclick = () => {
  navbarNav.classList.toggle('active');
}

const navbar = document.querySelector('.navbar');

document.addEventListener('click', function(e) {
	if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active')
	}
})


// jadi begini progres nya 
// document.addEventListener('click', function(e) 
// pada intinya begini proses nya pertama guna kalimat pertama berupa 'clik' itu seperti menunggu kita mengeklik apapun itu saat kita klik di liat apa  yang di klik , setelah itu di kasi tugas pada kalimat ke 2 berupa 
// function saya memberi tugas liat dulu klik nya jika klik nya bukan #hambuergen-menu dan .navbarNav maka hilangkan clas yang berupa active 