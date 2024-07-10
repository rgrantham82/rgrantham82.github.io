---
title: Client Segmentation Analysis
subtitle: An Interactive Analysis of Client Investment Behaviors
layout: page
show_sidebar: false
---

## Introduction

Client segmentation is a crucial process in data analytics that involves dividing a broad consumer or business market into sub-groups of consumers based on shared characteristics. This project aims to segment clients based on various attributes such as age, gender, annual income, investment amount, investment preference, transaction frequency, risk tolerance, and engagement score. The goal is to identify patterns and insights that can help in better understanding the client base and tailoring strategies accordingly.

## Data Description

The dataset used for this analysis includes the following attributes:

- **Client ID**: Unique identifier for each client.
- **Age**: Age of the client.
- **Gender**: Gender of the client.
- **Annual Income**: Annual income of the client.
- **Investment Amount**: Amount invested by the client.
- **Investment Preference**: Type of investment preferred by the client.
- **Transaction Frequency**: Number of transactions made by the client.
- **Risk Tolerance**: The risk tolerance level of the client.
- **Engagement Score**: An engagement score for the client.

The dataset is sourced from a synthetic dataset designed to mimic real-world client data.

## Methodology

The client segmentation analysis is performed using a combination of exploratory data analysis (EDA) and clustering techniques. Key steps include:

1. **Data Cleaning**: Handling missing values, outliers, and ensuring data consistency.
2. **Exploratory Data Analysis (EDA)**: Understanding the distribution and relationships between different attributes.
3. **Clustering**: Applying clustering algorithms to segment clients into distinct groups.

## Results

The interactive chart below visualizes clients' investment amounts against their annual income, color-coded by their investment preference. This visualization helps in identifying clusters of clients with similar investment behaviors.

<style>
.axis-label {
    font: 14px sans-serif;
  }
  .tooltip {
    position: absolute;
    text-align: center;
    width: 100px;
    height: 50px;
    padding: 2px;
    font: 12px sans-serif;
    background: lightsteelblue;
    border: 0px;
    border-radius: 8px;
    pointer-events: none;
  }
</style>
<body>
  <div id="scatterplot"></div>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script>
    const margin = {top: 20, right: 30, bottom: 40, left: 50};
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3.select("#scatterplot")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("/assets/files/synthetic_client_data.csv").then(data => {
      data.forEach(d => {
        d['Annual Income'] = +d['Annual Income'];
        d['Investment Amount'] = +d['Investment Amount'];
      });

      const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d['Annual Income']))
        .range([0, width]);

      const y = d3.scaleLinear()
        .domain(d3.extent(data, d => d['Investment Amount']))
        .range([height, 0]);

      const color = d3.scaleOrdinal()
        .domain(["Low", "Medium", "High"])
        .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

      const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", 30)
        .style("text-anchor", "middle")
        .text("Annual Income");

      svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", -height / 2)
        .attr("y", -margin.left)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Investment Amount");

      svg.append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d['Annual Income']))
        .attr("cy", d => y(d['Investment Amount']))
        .attr("r", 5)
        .style("fill", d => color(d['Risk Tolerance']))
        .on("mouseover", (event, d) => {
          tooltip.transition()
            .duration(200)
            .style("opacity", .9);
          tooltip.html(`Income: ${d['Annual Income']}<br>Investment: ${d['Investment Amount']}`)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", d => {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });
    });
  </script>
</body>

## Recommendations Based on Cluster Analysis

### Cluster 0: Younger Individuals with Lower Income and Engagement

1. **Financial Education Programs**:
   - Offer workshops and online courses focused on financial literacy, investment basics, and budgeting.
   - Provide content on building long-term financial habits and the importance of early investing.

2. **Starter Investment Products**:
   - Develop products with low entry barriers such as micro-investing platforms or robo-advisors.
   - Promote mutual funds and other low-risk investment options to build confidence.

3. **Engagement Strategies**:
   - Implement loyalty programs or gamification to encourage frequent interactions with financial services.
   - Use social media, email newsletters, and mobile apps for engagement.

### Cluster 1: Mid-tier Investors

- Develop mid-tier investment products that offer value-added services like financial health check-ups and periodic portfolio reviews.
- Create community forums where clients can share experiences and learn from financial experts.

### Cluster 2: High-Net-Worth Individuals

- Offer personalized investment strategies that include managed accounts, high-frequency trading platforms, or niche investment funds.
- Provide regular updates, market analysis, and investment insights to keep them informed and engaged.

## Conclusion

The client segmentation analysis provides valuable insights into the different types of clients based on their investment behaviors and preferences. This information can be used to tailor marketing strategies, improve customer service, and develop personalized financial products that better meet the needs of different client segments.

By understanding the unique characteristics and behaviors of each client segment, businesses can enhance their engagement and satisfaction, ultimately leading to increased loyalty and profitability.
