---
layout: post
title:  "Exploring Patterns in Fatal Police Shootings: An In-Depth Statistical Analysis"
author_profile: true
date:   2024-08-09
description: A comprehensive analysis of age distribution, gender differences, and racial associations in fatal police shootings across the United States.
tags: 
- data analysis
- police shootings
- statistical analysis  
---
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7WZFJ98W4K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7WZFJ98W4K');
</script>

In this post, we dive into a detailed statistical analysis of fatal police shootings across the United States, focusing on age distribution, gender differences, and the relationship between race and armed status. This analysis is part of an ongoing effort to understand the patterns and trends in these tragic incidents.

![Fig. 1](/assets/images/2024-08-08/visualizations.png)

Several key visualizations have been generated to support this analysis:

- **Age Distribution**: A histogram displaying the distribution of ages among individuals involved in fatal police shootings.
- **Racial Distribution**: A bar chart showing the distribution of races in the dataset.
- **Total Shootings Per Agency**: A histogram illustrating the distribution of total shootings across different police agencies, using a logarithmic scale to capture the wide range of frequencies.

The visualizations can be found [here](/assets/images/2024-08-08).

### Age Distribution: Insights and Outliers

The dataset includes **9,598** records of individuals involved in fatal police shootings. The analysis reveals the following age statistics:

- **Mean Age**: 37.4 years
- **Median Age**: 35 years
- **Standard Deviation**: 12.72 years
- **Age Range**: 2 to 92 years

The age distribution indicates that the majority of the individuals involved are adults, with a significant portion falling between **28 and 45 years**. However, there are outliers, including very young individuals (as young as 2 years) and elderly individuals (up to 92 years). These outliers may require further investigation to ensure data accuracy and understand their specific contexts.

### Gender Differences: Analyzing Age Disparity

To explore potential gender differences in the ages of those involved in fatal police shootings, a T-test was conducted comparing the ages of males and females:

- **T-Statistic**: -0.3819
- **P-Value**: 0.7025

The results show no statistically significant difference in the ages of male and female individuals in this dataset. The observed difference in mean ages is likely due to random variation rather than a true underlying difference.

### Race and Armed Status: A Significant Association

A chi-square test was performed to examine the relationship between race and armed status:

- **Chi-Square Statistic**: 327.17
- **P-Value**: 2.2973e-10
- **Degrees of Freedom**: 182

The test results indicate a significant association between race and armed status, suggesting that the likelihood of an individual being armed during a fatal police shooting varies by race. This finding underscores the importance of considering racial factors in understanding the dynamics of these incidents.

### Conclusion

This analysis highlights several important aspects of fatal police shootings in the United States, including the typical age range of victims, the lack of significant age differences between genders, and the strong association between race and armed status. These findings contribute to a deeper understanding of the factors at play in these tragic events and provide a foundation for further research and policy discussions.

For those interested in exploring the data further, the complete analysis, including the Python code used, is available [here](https://github.com/washingtonpost/data-police-shootings).

By examining these patterns and trends, we can better understand the complex and often troubling dynamics of fatal police shootings, with the ultimate goal of informing efforts to reduce these incidents and improve community safety.
