# Specify the RubyGems source
source "https://rubygems.org"

# Jekyll Core
gem "jekyll", "~> 4.3.4"

# Plugins for Functionality
gem "jekyll-feed", "~> 0.15"           # Generate Atom feeds for your site
gem "jekyll-sitemap", "~> 1.4"        # Generate a sitemap for SEO
gem "jekyll-seo-tag", "~> 2.7"        # Add SEO metadata to your site
gem "jekyll-paginate", "~> 1.1"       # Enable pagination for blog posts
gem "jekyll-archives", "~> 2.2"       # Create archive pages (e.g., yearly, monthly)
gem "jekyll-data", "~> 1.0"           # Use external data sources in your site

# Optional plugins for development
group :jekyll_plugins do
  gem "jekyll-watch", "~> 2.2"        # Automatically rebuild site on file changes
end

# Ruby dependency for syntax highlighting
gem "rouge", "~> 4.0"                 # Syntax highlighter for code snippets

# For managing GitHub Pages deployment locally (Optional)
gem "github-pages", group: :jekyll_plugins if ENV["GITHUB_ACTIONS"]
