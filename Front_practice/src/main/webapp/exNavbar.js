/**
 * exNavbar.js
 */
$(function() {
	const toggleBtn = document.querySelector('.navToggleBtn');
	const menu = document.querySelector(".nav_mainMenu");
	const icons = document.querySelector(".socialIcons");
	
	toggleBtn1.addEventListener('click', () => {
	    menu.classList.toggle('active');
	    icons.classList.toggle('active');
	});
});