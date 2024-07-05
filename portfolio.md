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
              <div class="col-lg-4 col-md-6 project-card fade-in">
                <div class="card">
                  <img src="/assets/images/sql-screenshot.PNG" alt="SQL Examples Screenshot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">SQL Examples</h5>
                    <p class="card-text">A collection of SQL queries showcasing various database operations, including data retrieval, manipulation, and aggregation.</p>
                    <a href="https://github.com/rgrantham82/SQL_Examples" class="btn btn-primary" data-toggle="tooltip" title="View SQL Examples Repository">View Repository</a>
                  </div>
                </div>
              </div>
              <!-- Project 2 -->
              <div class="col-lg-4 col-md-6 project-card slide-in-from-left">
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
              <div class="col-lg-4 col-md-6 project-card zoom-in">
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
              <div class="col-lg-4 col-md-6 project-card zoom-in">
                <div class="card">
                  <img src="/assets/images/austin-violent-crime-dashboard.png" alt="Austin Violent Crime Dashboard Screenshot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Austin Violent Crime Insights Dashboard</h5>
                    <p class="card-text">An interactive tool visualizing crime data across Austin, TX, aiding law enforcement and policymakers in making informed decisions.</p>
                    <a href="https://github.com/rgrantham82/austin-violent-crime-dashboard" class="btn btn-primary" data-toggle="tooltip" title="View Austin Crime Dashboard">View Repository</a>
                  </div>
                </div>
              </div>
              <!-- Project 5 -->
              <div class="col-lg-4 col-md-6 project-card slide-in-from-left">
                <div class="card">
                  <img src="/assets/images/police-shootings-analysis.png" alt="Police Shootings Analysis Screenshot" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Police Shootings Analysis</h5>
                    <p class="card-text">Analyzing police shootings data to understand patterns and factors influencing incidents.</p>
                    <a href="https://github.com/rgrantham82/police-shootings-analysis" class="btn btn-primary" data-toggle="tooltip" title="View Police Shootings Analysis">View Repository</a>
                  </div>
                </div>
              </div>
              <!-- Project 6 -->
              <div class="col-lg-4 col-md-6 project-card fade-in">
                <div class="card">
                  <img src="/assets/images/client-segmentation-chart.png" alt="Client Segmentation Chart" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Client Segmentation</h5>
                    <p class="card-text">Developed an interactive D3.js chart to segment clients based on various attributes, aiding in targeted marketing strategies.</p>
                    <a href="https://github.com/rgrantham82/client-segmentation" class="btn btn-primary" data-toggle="tooltip" title="View Client Segmentation Project">View Repository</a>
                  </div>
                </div>
              </div>
              <!-- Project 7 -->
              <div class="col-lg-4 col-md-6 project-card zoom-in">
                <div class="card">
                  <img src="/assets/images/new-orleans-slave-sales.png" alt="New Orleans Slave Sales Analysis" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">New Orleans Slave Sales Analysis</h5>
                    <p class="card-text">Analyzed historical slave sales data in New Orleans, presenting findings through a D3.js time series visualization.</p>
                    <a href="https://github.com/rgrantham82/new-orleans-slave-sales-analysis" class="btn btn-primary" data-toggle="tooltip" title="View Slave Sales Analysis">View Repository</a>
                  </div>
                </div>
              </div>
              <!-- Project 8 -->
              <div class="col-lg-4 col-md-6 project-card slide-in-from-left">
                <div class="card">
                  <img src="/assets/images/data-integrity-optimization.png" alt="Data Integrity and Optimization" class="card-img-top project-img" />
                  <div class="card-body">
                    <h5 class="card-title">Data Integrity and Optimization</h5>
                    <p class="card-text">Optimized data integrity for Austin Crime Reports using multiple datasets, presented in a comprehensive blog post.</p>
                    <a href="https://github.com/rgrantham82/data-integrity-optimization" class="btn btn-primary" data-toggle="tooltip" title="View Data Integrity Project">View Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  // Add fade-in effect on scroll
  document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectCards.forEach((card) => {
      observer.observe(card);
    });
  });
</script>