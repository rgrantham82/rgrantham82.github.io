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

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Analytics Projects</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .project-card {
            margin-bottom: 30px;
            transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s;
            opacity: 0;
            transform: translateY(20px);
        }

        .project-card.in-view {
            opacity: 1;
            transform: translateY(0);
        }

        .project-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .project-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <!-- Project 1 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/sql-screenshot.PNG" alt="SQL Examples Screenshot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">SQL Examples</h5>
                        <a href="https://github.com/rgrantham82/SQL_Examples" class="btn btn-primary" data-toggle="tooltip" title="View SQL Examples Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/fraud-detection-plot.png" alt="Fraud Detection Plot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Fraud Detection</h5>
                        <a href="https://github.com/rgrantham82/fraud-detection" class="btn btn-primary" data-toggle="tooltip" title="View Fraud Detection Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 3 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/mini-course-sales-forecast.png" alt="Sales Forecast Plot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Forecasting Mini-Course Sales</h5>
                        <a href="https://www.kaggle.com/code/robertgrantham/forecasting-mini-course-sales" class="btn btn-primary" data-toggle="tooltip" title="View Sales Forecasting Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 4 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/credit-approval-screenshot.PNG" alt="Credit Approval Screenshot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Predicting Credit Approval</h5>
                        <a href="https://www.kaggle.com/code/robertgrantham/predicting-credit-approval" class="btn btn-primary" data-toggle="tooltip" title="View Credit Approval Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 5 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/Austin Violent Crime Insights Dashboard.png" alt="Austin Crime Dashboard" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Austin Violent Crime Insights Dashboard</h5>
                        <a href="https://public.tableau.com/views/AustinViolentCrimeInsightsDashboard/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link" class="btn btn-primary" data-toggle="tooltip" title="View Austin Crime Dashboard">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 6 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/police-shootings-plot.png" alt="Police Shootings Plot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Police Shootings Analysis</h5>
                        <a href="https://www.kaggle.com/code/robertgrantham/police-shootings-analysis" class="btn btn-primary" data-toggle="tooltip" title="View Police Shootings Analysis Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 7 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="/assets/images/client-segmentation-plot.png" alt="Client Segmentation Visualization" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Client Segmentation</h5>
                        <a href="/assets/files/client-segmentation.md" class="btn btn-primary" data-toggle="tooltip" title="View Client Segmentation Project">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();

            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function onVisibilityChange(el, callback) {
                var old_visible;
                return function() {
                    var visible = isElementInViewport(el);
                    if (visible != old_visible) {
                        old_visible = visible;
                        if (visible) {
                            callback();
                        }
                    }
                }
            }

            var cards = document.querySelectorAll('.project-card');

            for (var i = 0; i < cards.length; i++) {
                (function(card) {
                    var handler = onVisibilityChange(card, function() {
                        card.classList.add('in-view');
                    });

                    handler();
                    window.addEventListener('scroll', handler);
                    window.addEventListener('resize', handler);
                })(cards[i]);
            }
        });
    </script>
</body>
