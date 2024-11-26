---  
layout: home
permalink: /gallery
author_profile: true
excerpt: "Celebrating the art of beautiful handwriting and its fusion with personal expression."  
comments: true  
share: true  
toc: true  
category: portfolio  
tags:  
  - calligraphy  
  - visual art  
  - lettering  
  - typography  
---

<link rel="stylesheet" href="/assets/css/gallery.css">

# Calligraphy Gallery

Welcome to my Calligraphy Gallery! Here, you’ll find a curated selection of my artwork that blends **sustainability** with **artistic passion**. Using **recycled cardboard as my canvas**, each piece reflects care for the environment and creative innovation.

---

## Featured Works

<div class="artwork-gallery">
  {% for artwork in site.data.artworks %}
  <div class="artwork-item">
    <img src="{{ artwork.image }}" alt="{{ artwork.title }}" class="artwork-image">
    <div class="artwork-details">
      <h3>{{ artwork.title }}</h3>
      <p>{{ artwork.description }}</p>
      <span class="sustainability-badge">Eco-Friendly</span>
    </div>
  </div>
  {% endfor %}
</div>

---

## Why Cardboard?

Recycled cardboard isn’t just my canvas; it’s my philosophy. It transforms the ordinary into the extraordinary, proving that even discarded materials can tell powerful stories. This approach:

- Promotes sustainability by reducing waste.
- Adds depth and texture to every piece, enhancing its unique character.
- Highlights my commitment to art with purpose, grounded in community and environmental values.

---

## Commission Your Own Artwork

Looking for a personalized calligraphy piece? I’d love to collaborate! Whether it’s for a gift, a special occasion, or a meaningful message, I can create something just for you.

<div class="cta">
  <a href="/contact/" class="cta-button">Get in Touch</a>
</div>

---

## Let’s Create Together

Art has the power to inspire and connect. My calligraphy is more than aesthetic—it’s a way to express meaning and values. Explore the gallery, and if something resonates with you, let’s collaborate to bring your vision to life.

Thank you for visiting my gallery! New works are added regularly, so check back often.
