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

<section class="section">
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="content">
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Data Analytics Projects</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
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
          <div class="container">
            <div class="row">
              <!-- Project 1 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/sql-screenshot.PNG" alt="SQL Examples Screenshot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">SQL Examples</h5>
                    <p class="card-text">A collection of SQL queries showcasing various database operations, including data retrieval, manipulation, and aggregation.</p>
                    <a href="https://github.com/rgrantham82/SQL_Examples" class="btn btn-primary" data-toggle="tooltip" title="View SQL Examples Repository">View Project</a>
                  </div>
                </div>
              </div>
              <!-- Project 2 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/fraud-detection-plot.png" alt="Fraud Detection Plot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Fraud Detection</h5>
                    <p class="card-text">Developed a machine learning model to detect fraudulent transactions, improving the accuracy of fraud detection systems.</p>
                    <a href="https://github.com/rgrantham82/fraud-detection" class="btn btn-primary" data-toggle="tooltip" title="View Fraud Detection Project">View Repository</a>
                  </div>
                </div>
              </div>
              <!-- Project 3 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/mini-course-sales-forecast.png" alt="Sales Forecast Plot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Forecasting Mini-Course Sales</h5>
                    <p class="card-text">Implemented time series analysis techniques to forecast sales for an online mini-course, enabling better inventory management.</p>
                    <a href="https://www.kaggle.com/code/robertgrantham/forecasting-mini-course-sales" class="btn btn-primary" data-toggle="tooltip" title="View Sales Forecasting Project">View Project</a>
                  </div>
                </div>
              </div>
              <!-- Project 4 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/credit-approval-screenshot.PNG" alt="Credit Approval Screenshot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Predicting Credit Approval</h5>
                    <p class="card-text">Built a predictive model to assess credit approval chances based on applicant information, aiding in risk assessment.</p>
                    <a href="https://www.kaggle.com/code/robertgrantham/predicting-credit-approval" class="btn btn-primary" data-toggle="tooltip" title="View Credit Approval Project">View Project</a>
                  </div>
                </div>
              </div>
              <!-- Project 5 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/Austin Violent Crime Insights Dashboard.png" alt="Austin Crime Dashboard" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Austin Violent Crime Insights Dashboard</h5>
                    <p class="card-text">Created a Tableau dashboard to visualize and analyze violent crime data in Austin, providing insights for law enforcement and policymakers.</p>
                    <a href="https://public.tableau.com/views/AustinViolentCrimeInsightsDashboard/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link" class="btn btn-primary" data-toggle="tooltip" title="View Austin Crime Dashboard">View Dashboard</a>
                  </div>
                </div>
              </div>
              <!-- Project 6 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/police-shootings-plot.png" alt="Police Shootings Plot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Police Shootings Analysis</h5>
                    <p class="card-text">Analyzed data on police shootings to identify patterns and trends, contributing to discussions on law enforcement practices.</p>
                    <a href="https://www.kaggle.com/code/robertgrantham/police-shootings-analysis" class="btn btn-primary" data-toggle="tooltip" title="View Police Shootings Analysis Project">View Project</a>
                  </div>
                </div>
              </div>
              <!-- Project 7 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/client-segmentation-plot.png" alt="Client Segmentation Visualization" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Client Segmentation</h5>
                    <p class="card-text">Utilized clustering techniques to segment clients based on purchasing behavior, enabling targeted marketing strategies.</p>
                    <a href="/client-segmentation" class="btn btn-primary" data-toggle="tooltip" title="View Client Segmentation Project">View Project</a>
                  </div>
                </div>
              </div>
              <!-- Project 8 -->
              <div class="col-lg-4 col-md-6 project-card">
                <div class="card">
                  <img src="/assets/images/data_integrity_optimization_final.png" alt="Austin Crime Reports" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Data Integrity and Optimization Using Austin Crime Reports</h5>
                    <p class="card-text">Investigated data integrity and optimization techniques on Austin Crime Reports dataset, enhancing data reliability and efficiency.</p>
                    <a href="https://github.com/rgrantham82/data-integrity-optimization/tree/main" class="btn btn-primary" data-toggle="tooltip" title="View Austin Crime Reports Project">View Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script>
            document.addEventListener("DOMContentLoaded", function() {
              const cards = document.querySelectorAll(".project-card");
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                  }
                });
              });
              cards.forEach((card) => {
                observer.observe(card);
              });
            });
          </script>
        </div>
      </div>
    </div>
  </div>
</section>
