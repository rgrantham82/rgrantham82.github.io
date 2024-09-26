/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

if (typeof jQuery !== 'undefined') {
	$(document).ready(function() {
		// FitVids init
		$("#main").fitVids();

		// Follow menu drop down
		$(".author__urls-wrapper button").on("click", function() {
			$(".author__urls").toggleClass("is--visible");
			$(".author__urls-wrapper").find("button").toggleClass("open");
		});

		// Close search screen with Esc key
		$(document).keyup(function(e) {
			if (e.keyCode === 27) {
				if ($(".initial-content").hasClass("is--hidden")) {
					$(".search-content").toggleClass("is--visible");
					$(".initial-content").toggleClass("is--hidden");
				}
			}
		});

		// Search toggle with selector caching
		const searchContent = $(".search-content");
		const initialContent = $(".initial-content");

		$(".search__toggle").on("click", function() {
			searchContent.toggleClass("is--visible");
			initialContent.toggleClass("is--hidden");
			// set focus on input
			setTimeout(function() {
				searchContent.find("input").focus();
			}, 400);
		});

		// Smooth scrolling with updated let/const
		const scroll = new SmoothScroll('a[href*="#"]', {
			offset: 20,
			speed: 400,
			speedAsDuration: true,
			durationMax: 500,
		});

		// Gumshoe scroll spy init with library check
		if (typeof Gumshoe !== "undefined" && $("nav.toc").length > 0) {
			const spy = new Gumshoe("nav.toc a", {
				navClass: "active",
				contentClass: "active",
				nested: false,
				nestedClass: "active",
				offset: 20,
				reflow: true,
				events: true,
			});
		}

		// Auto scroll sticky ToC with debounce
		const scrollTocToContent = function(event) {
			const target = event.target;
			const scrollOptions = {
				behavior: "auto",
				block: "nearest",
				inline: "start"
			};

			const tocElement = document.querySelector("aside.sidebar__right.sticky");
			if (!tocElement) return;
			if (window.getComputedStyle(tocElement).position !== "sticky") return;

			if (target.parentElement.classList.contains("toc__menu") && target === target.parentElement.firstElementChild) {
				// Scroll to top instead
				document.querySelector("nav.toc header").scrollIntoView(scrollOptions);
			} else {
				target.scrollIntoView(scrollOptions);
			}
		};

		function debounce(func, wait) {
			let timeout;
			return function(...args) {
				const context = this;
				clearTimeout(timeout);
				timeout = setTimeout(() => func.apply(context, args), wait);
			};
		}

		// Chrome-specific event listener with debounce
		if (!!window.chrome) {
			document.addEventListener("gumshoeActivate", debounce(scrollTocToContent, 100));
		}

		// Lazy loading images using Intersection Observer
		const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

		if ("IntersectionObserver" in window) {
			const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						const lazyImage = entry.target;
						lazyImage.src = lazyImage.dataset.src;
						lazyImage.classList.remove("lazy");
						lazyImageObserver.unobserve(lazyImage);
					}
				});
			});

			lazyImages.forEach(function(lazyImage) {
				lazyImageObserver.observe(lazyImage);
			});
		} else {
			// Fallback for older browsers
			lazyImages.forEach(function(lazyImage) {
				lazyImage.src = lazyImage.dataset.src;
			});
		}

		// Add lightbox class to all image links
		$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']")
			.has("> img")
			.addClass("image-popup");

		// Magnific-Popup options with library check
		if (typeof $.fn.magnificPopup !== "undefined") {
			$(".image-popup").magnificPopup({
				type: "image",
				tLoading: "Loading image #%curr%...",
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [1, 1], // Preload 1 before and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
				},
				removalDelay: 500,
				mainClass: "mfp-zoom-in",
				callbacks: {
					beforeOpen: function() {
						this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
					},
				},
				closeOnContentClick: true,
				midClick: true,
			});
		}

		// Add anchors for headings
		document
			.querySelector(".page__content")
			.querySelectorAll("h1, h2, h3, h4, h5, h6")
			.forEach(function(element) {
				const id = element.getAttribute("id");
				if (id) {
					const anchor = document.createElement("a");
					anchor.className = "header-link";
					anchor.href = "#" + id;
					anchor.innerHTML =
						'<span class="sr-only">Permalink to ' + element.textContent + '</span><i class="fas fa-link"></i>';
					anchor.title = "Permalink";
					element.appendChild(anchor);
				}
			});

		// Copy text to clipboard function
		const copyText = function(text) {
			if (document.queryCommandEnabled("copy") && navigator.clipboard) {
				navigator.clipboard.writeText(text).then(
					() => true,
					() => console.error("Failed to copy text to clipboard: " + text)
				);
				return true;
			} else {
				const isRTL = document.documentElement.getAttribute("dir") === "rtl";

				const textarea = document.createElement("textarea");
				textarea.className = "clipboard-helper";
				textarea.style[isRTL ? "right" : "left"] = "-9999px";
				const yPosition = window.pageYOffset || document.documentElement.scrollTop;
				textarea.style.top = yPosition + "px";

				textarea.setAttribute("readonly", "");
				textarea.value = text;
				document.body.appendChild(textarea);

				let success = true;
				try {
					textarea.select();
					success = document.execCommand("copy");
				} catch (e) {
					success = false;
				}
				textarea.parentNode.removeChild(textarea);
				return success;
			}
		};

		// Copy button event listener with minor improvements
		const copyButtonEventListener = function(event) {
			const thisButton = event.target;
			let codeBlock = thisButton.nextElementSibling;
			while (codeBlock && codeBlock.tagName.toLowerCase() !== "code") {
				codeBlock = codeBlock.nextElementSibling;
			}
			if (!codeBlock) {
				console.warn(thisButton);
				throw new Error("No code block found for this button.");
			}
			const realCodeBlock = codeBlock.querySelector("td.code, td.rouge-code");
			if (realCodeBlock) {
				codeBlock = realCodeBlock;
			}
			const result = copyText(codeBlock.innerText);
			thisButton.focus();
			if (result) {
				if (thisButton.interval !== null) {
					clearInterval(thisButton.interval);
				}
				thisButton.classList.add('copied');
				thisButton.interval = setTimeout(function() {
					thisButton.classList.remove('copied');
					clearInterval(thisButton.interval);
					thisButton.interval = null;
				}, 1500);
			}
			return result;
		};

		// Add copy button if enabled
		if (window.enable_copy_code_button) {
			document.querySelectorAll(".page__content pre.highlight > code").forEach(function(element) {
				const container = element.parentElement;
				if (container.firstElementChild.tagName.toLowerCase() !== "code") {
					return;
				}
				const copyButton = document.createElement("button");
				copyButton.title = "Copy to clipboard";
				copyButton.className = "clipboard-copy-button";
				copyButton.innerHTML = '<span class="sr-only">Copy code</span><i class="far fa-fw fa-copy"></i><i class="fas fa-fw fa-check copied"></i>';
				copyButton.addEventListener("click", copyButtonEventListener);
				container.prepend(copyButton);
			});
		}
	});
} else {
	console.error("jQuery is not loaded.");
}
