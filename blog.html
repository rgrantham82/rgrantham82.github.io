---
layout: default
title: Blog
permalink: /blog/
---

<section class="blog" role="main">
  <h1>{{ page.title }}</h1>

  {%- comment -%}
  Pull in every post under docs/_posts; Jekyll will auto‐load them into site.posts.
  {%- endcomment -%}
  {% assign posts_list = site.posts | sort: 'date' | reverse %}

  {% for post in posts_list %}
    <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
      <header class="post-header">
        {% if post.image %}
          <a href="{{ post.url | relative_url }}">
            <img 
              src="{{ post.image | relative_url }}" 
              alt="Featured image for {{ post.title }}" 
              loading="lazy" 
              itemprop="image"
            >
          </a>
        {% endif %}
        <h2 itemprop="headline">
          <a href="{{ post.url | relative_url }}" itemprop="url">
            {{ post.title }}
          </a>
        </h2>
        <div class="post-meta">
          <time 
            datetime="{{ post.date | date_to_xmlschema }}" 
            itemprop="datePublished"
          >
            {{ post.date | date: "%B %d, %Y" }}
          </time>
          • 
          <span class="read-time">
            {{ post.content | number_of_words | divided_by:200 | ceil }} min read
          </span>
        </div>
      </header>

      <div class="post-excerpt" itemprop="description">
        {{ post.excerpt }}
      </div>

      <footer class="post-footer">
        {% if post.categories %}
          <p class="post-categories">
            <strong>Categories:</strong>
            {% for cat in post.categories %}
              <a href="{{ site.baseurl }}/categories/{{ cat | slugify }}">{{ cat }}</a>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </p>
        {% endif %}
        {% if post.tags %}
          <p class="post-tags">
            <strong>Tags:</strong>
            {% for tag in post.tags %}
              <a href="{{ site.baseurl }}/tags/{{ tag | slugify }}">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </p>
        {% endif %}
      </footer>
    </article>
  {% endfor %}
</section>
