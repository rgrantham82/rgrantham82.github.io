/* ==========================================================================  
   Main Script: Interactive Features and Enhancements  
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	// Smooth Scrolling for Navigation Links
	document.querySelectorAll(".nav-links a").forEach(link => {
		link.addEventListener("click", e => {
			e.preventDefault();
			const target = document.getElementById(link.getAttribute("href").substring(1));
			if (target) {
				window.scrollTo({
					top: target.offsetTop - 50, // Offset for fixed navbar
					behavior: "smooth",
				});
			}
		});
	});

	// Responsive Navbar Toggle
	const navbar = document.querySelector(".navbar");
	const navLinksContainer = document.querySelector(".nav-links");
	const toggleButton = document.createElement("button");
	toggleButton.classList.add("menu-toggle");
	toggleButton.innerHTML = "☰"; // Hamburger menu icon
	navbar.insertBefore(toggleButton, navLinksContainer);

	toggleButton.addEventListener("click", () => {
		navLinksContainer.style.display =
			navLinksContainer.style.display === "flex" ? "none" : "flex";
	});

	window.addEventListener("resize", () => {
		navLinksContainer.style.display = window.innerWidth > 768 ? "flex" : "none";
	});

	// Lazy Loading Images
	const images = document.querySelectorAll("img[data-src]");
	if ("IntersectionObserver" in window) {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.getAttribute("data-src");
					img.removeAttribute("data-src");
					observer.unobserve(img);
				}
			});
		});

		images.forEach(img => observer.observe(img));
	}

	// Highlight Active Section in Navbar
	const sections = document.querySelectorAll("section");
	const navObserver = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					document.querySelectorAll(".nav-links a").forEach(link =>
						link.classList.remove("active")
					);
					const activeLink = document.querySelector(
						`.nav-links a[href="#${entry.target.id}"]`
					);
					if (activeLink) activeLink.classList.add("active");
				}
			});
		}, {
			threshold: 0.6
		}
	);
	sections.forEach(section => navObserver.observe(section));

	// GSAP Animations
	if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(".hero-title", {
			y: -100,
			opacity: 0,
			duration: 2,
			ease: "power4.out"
		});
		gsap.from(".project-card", {
			scale: 0.8,
			opacity: 0,
			stagger: 0.3,
			duration: 1.5,
			ease: "power2.out",
		});

		document.querySelectorAll(".fade-in-element").forEach(el => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					toggleActions: "play none none none"
				},
				y: 50,
				opacity: 0,
				duration: 1,
			});
		});
	}

	// Theme Toggle (Dark/Light Mode)
	const themeToggle = document.querySelector(".theme-toggle");
	if (themeToggle) {
		themeToggle.addEventListener("click", () => {
			document.body.classList.toggle("dark-mode");
			localStorage.setItem(
				"theme",
				document.body.classList.contains("dark-mode") ? "dark" : "light"
			);
		});

		// Apply saved theme on load
		if (localStorage.getItem("theme") === "dark") {
			document.body.classList.add("dark-mode");
		}
	}

	// Search Filter
	const searchInput = document.querySelector(".search-input");
	if (searchInput) {
		searchInput.addEventListener("input", () => {
			const query = searchInput.value.toLowerCase();
			document.querySelectorAll(".search-item").forEach(item => {
				item.style.display = item.textContent.toLowerCase().includes(query) ?
					"block" :
					"none";
			});
		});
	}

	// Loader Animation
	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		if (loader) loader.style.display = "none";
	});

	// Copy to Clipboard
	document.querySelectorAll(".clipboard-copy-button").forEach(button => {
		button.addEventListener("click", () => {
			const codeBlock = button.nextElementSibling?.querySelector("code");
			if (codeBlock) {
				navigator.clipboard.writeText(codeBlock.textContent).then(() => {
					button.classList.add("copied");
					setTimeout(() => button.classList.remove("copied"), 1500);
				});
			}
		});
	});

	// Initialize Lightbox
	if (typeof $.fn.magnificPopup !== "undefined") {
		$(".image-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: "mfp-zoom-in",
		});
	}
});
