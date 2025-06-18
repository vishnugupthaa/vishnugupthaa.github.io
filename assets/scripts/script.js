'use strict';
// Place this after your DOM loads (or just before </body>)
document.addEventListener('DOMContentLoaded', function() {
	const tooltip = document.getElementById('skill-tooltip');
	const skillCards = document.querySelectorAll('.skill-card');
	skillCards.forEach(card => {
		card.addEventListener('mousemove', e => {
			const skillName = card.getAttribute('data-skill');
			tooltip.textContent = skillName;
			tooltip.style.opacity = 1;
			// Offset so the tooltip doesn't cover the pointer
			tooltip.style.left = (e.clientX + 12) + 'px';
			tooltip.style.top = (e.clientY + 12) + 'px';
		});
		card.addEventListener('mouseleave', () => {
			tooltip.style.opacity = 0;
		});
	});
});
// Add this at the end of your script.js
document.querySelector('.contact-form').addEventListener('submit', function(e) {
	e.preventDefault();
	const success = this.querySelector('.form-success');
	success.style.display = 'block';
	setTimeout(() => {
		success.style.display = 'none';
	}, 3500);
	this.reset();
});
// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function() {
	sidebar.classList.toggle("active");
});
// Navigation between sections
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
navigationLinks.forEach(link => {
	link.addEventListener("click", function(e) {
		e.preventDefault();
		const targetPage = this.dataset.navLink;
		pages.forEach(page => {
			page.classList.toggle("active", page.dataset.page === targetPage);
		});
		navigationLinks.forEach(navLink => navLink.classList.remove("active"));
		this.classList.add("active");
		window.scrollTo(0, 0);
	});
});
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const html = document.documentElement;
// Set icon based on theme
function updateThemeIcon() {
	if (html.getAttribute('data-theme') === 'dark') {
		themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
	} else {
		themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
	}
}
// On page load, set icon
updateThemeIcon();
// Toggle theme on click
themeToggleBtn.addEventListener('click', function() {
	const currentTheme = html.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	html.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	updateThemeIcon();
});
