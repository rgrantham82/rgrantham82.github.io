---
layout: page
title: Portfolio
subtitle: Explore My Data Analytics Projects
description: Welcome to my portfolio showcasing various data analytics projects I've worked on. Each project demonstrates my skills in SQL, predictive analytics, data visualization, and more.
show_sidebar: false
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7WZFJ98W4K"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-7WZFJ98W4K');
</script>

<div class="projects">
    <div class="project">
        <h3>Fraud Detection</h3>
        <img src="assets/images/fraud-detection.png" alt="Fraud Detection Project" class="lazy" data-src="assets/images/fraud-detection.png">
        <p>This project focuses on detecting fraudulent transactions using machine learning techniques. It includes data preprocessing, feature engineering, model training, and evaluation.</p>
        <a href="https://github.com/rgrantham82/fraud-detection" class="btn btn-primary">View on GitHub</a>
    </div>
    <div class="project">
        <h3>Violent Crimes Dashboard for Austin, TX</h3>
        <img src="assets/images/violent-crimes-dashboard.png" alt="Violent Crimes Dashboard" class="lazy" data-src="assets/images/violent-crimes-dashboard.png">
        <p>An interactive dashboard showcasing violent crime trends in Austin, TX. The dashboard is built using Tableau and provides insights into crime hotspots, trends over time, and more.</p>
        <a href="https://public.tableau.com/views/AustinCrimeDashboard/CrimeDashboard" class="btn btn-primary">View Dashboard</a>
    </div>
    <div class="project">
        <h3>Client Segmentation</h3>
        <img src="assets/images/client-segmentation.png" alt="Client Segmentation" class="lazy" data-src="assets/images/client-segmentation.png">
        <p>This project involves segmenting clients based on their behavior and demographics using clustering algorithms. The results are visualized using interactive charts built with D3.js.</p>
        <a href="client-segmentation.md" class="btn btn-primary">View Project</a>
    </div>
    <div class="project">
        <h3>New Orleans Slave Sales Analysis</h3>
        <img src="assets/images/new-orleans-slave-sales.png" alt="New Orleans Slave Sales Analysis" class="lazy" data-src="assets/images/new-orleans-slave-sales.png">
        <p>An analysis of historical data on slave sales in New Orleans. This project includes data cleaning, analysis, and visualization of sales patterns over time using D3.js.</p>
        <a href="https://github.com/rgrantham82/new-orleans-slave-sales-analysis" class="btn btn-primary">View on GitHub</a>
    </div>
    <div class="project">
        <h3>Data Integrity and Optimization</h3>
        <img src="assets/images/data-integrity-optimization.png" alt="Data Integrity and Optimization" class="lazy" data-src="assets/images/data-integrity-optimization.png">
        <p>This project focuses on improving data integrity and optimizing performance using the Austin Crime Reports dataset and additional datasets. Detailed methods and results are documented in a blog post.</p>
        <a href="data-integrity-optimization.md" class="btn btn-primary">Read Blog Post</a>
    </div>
</div>

<!-- Cookie Banner -->
<div id="cookieBanner" class="cookie-banner fade-out">
    <div class="cookie-banner-content">
        <p>We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>
        <button id="acceptCookies" class="btn btn-success">Accept</button>
        <button id="rejectCookies" class="btn btn-danger">Reject</button>
    </div>
</div>

<!-- Alpine.js for interactive functionality -->
<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.x.x/dist/alpine.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
<script src="/assets/js/alpine.js"></script>

<style>
    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .project {
        flex: 1 1 calc(33.333% - 20px);
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
    }

    .project img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .project h3 {
        margin-top: 0;
    }

    .project p {
        margin: 10px 0;
    }

    .project .btn {
        display: inline-block;
        margin-top: 10px;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .project .btn:hover {
        background-color: #0056b3;
    }

    .project:hover {
        transform: translateY(-10px);
    }

    .cookie-banner {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #007bff;
        color: #fff;
        padding: 20px;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        display: none;
        z-index: 1000;
    }

    .cookie-banner-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cookie-banner button {
        margin-left: 10px;
    }
</style>

<script>
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cookie banner handling
    const cookieBanner = document.getElementById('cookieBanner');
    const showBanner = Cookies.get('showCookieBanner') !== 'false';

    function toggleCookieBanner() {
        if (showBanner) {
            cookieBanner.classList.add('fade-in');
            cookieBanner.style.display = 'block';
        } else {
            cookieBanner.style.display = 'none';
        }
    }

    function acceptCookies() {
        Cookies.set('showCookieBanner', 'false', {
            expires: 7,
            path: '/'
        });
        Cookies.set('cookiesAccepted', 'true', {
            expires: 7,
            path: '/'
        });
        animateBannerOut();
    }

    function rejectCookies() {
        Cookies.set('showCookieBanner', 'false', {
            expires: 7,
            path: '/'
        });
        animateBannerOut();
    }

    function animateBannerOut() {
        cookieBanner.classList.add('fade-out');
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500); // Match the animation duration
    }

    if (cookieBanner) {
        document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
        document.getElementById('rejectCookies').addEventListener('click', rejectCookies);
        toggleCookieBanner();
    }

    // Lazy loading for project images
    document.addEventListener('DOMContentLoaded', function () {
        const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            // Fallback for browsers without IntersectionObserver support
            let lazyLoad = function () {
                lazyImages.forEach(function (lazyImage) {
                    if (lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                    }
                });

                if (lazyImages.length === 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                }
            };

            document.addEventListener("scroll", lazyLoad);
            window.addEventListener("resize", lazyLoad);
            window.addEventListener("orientationchange", lazyLoad);
        }
    });
</script>