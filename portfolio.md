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
  function gtag(){dataLayer.push(arguments);}
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
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .project-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .project-img {
            width: 100%;
            height: auto;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 class="my-4">Data Analytics Projects</h1>
        <div class="row">
            <!-- Project 1 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/sql-screenshot.PNG" alt="SQL Examples Screenshot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">SQL Examples</h5>
                        <p class="card-text">Example of SQL queries and solutions.</p>
                        <a href="https://github.com/rgrantham82/SQL_Examples" class="btn btn-primary" data-toggle="tooltip" title="View SQL Examples Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/fraud-detection-plot.png" alt="Fraud Detection Plot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Fraud Detection Project</h5>
                        <p class="card-text">AI-driven fraud prevention system visualization.</p>
                        <a href="https://github.com/rgrantham82/fraud-detection" class="btn btn-primary" data-toggle="tooltip" title="View Fraud Detection Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 3 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/mini-course-sales-forecast.png" alt="Sales Forecast Plot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Forecasting Mini-Course Sales</h5>
                        <p class="card-text">Sales prediction analysis for a mini-course.</p>
                        <a href="https://www.kaggle.com/code/robertgrantham/forecasting-mini-course-sales" class="btn btn-primary" data-toggle="tooltip" title="View Sales Forecasting Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 4 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/credit-approval-screenshot.PNG" alt="Credit Approval Screenshot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Predicting Credit Approval</h5>
                        <p class="card-text">Predictive model for credit approval assessment.</p>
                        <a href="https://www.kaggle.com/code/robertgrantham/predicting-credit-approval" class="btn btn-primary" data-toggle="tooltip" title="View Credit Approval Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 5 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/Austin Violent Crime Insights Dashboard.png" alt="Austin Crime Dashboard" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Austin Violent Crime Insights Dashboard</h5>
                        <p class="card-text">Interactive Crime Data Visualization</p>
                        <a href="https://public.tableau.com/views/AustinViolentCrimeInsightsDashboard/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link" class="btn btn-primary" data-toggle="tooltip" title="View Austin Crime Dashboard">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 6 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/police-shootings-plot.png" alt="Police Shootings Plot" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Police Shootings Analysis</h5>
                        <p class="card-text">In-depth data examination of police shootings.</p>
                        <a href="https://www.kaggle.com/code/robertgrantham/police-shootings-analysis" class="btn btn-primary" data-toggle="tooltip" title="View Police Shootings Analysis Project">View Project</a>
                    </div>
                </div>
            </div>
            <!-- Project 7 -->
            <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                    <img src="assets/images/annual_income_vs_investment_amount.png" alt="Client Segmentation Visualization" class="card-img-top project-img">
                    <div class="card-body">
                        <h5 class="card-title">Client Segmentation Project</h5>
                        <p class="card-text">Client segmentation based on various attributes such as annual income, investment amount, and engagement score.</p>
                        <a href="/assets/files/client-segmentation.html" class="btn btn-primary" data-toggle="tooltip" title="View Client Segmentation Project">View Project</a>
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
        });
    </script>
</body>
 
