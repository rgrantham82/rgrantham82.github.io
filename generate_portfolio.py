import yaml
import os

# Define the path to the YAML file in the _portfolio directory

yaml_file_path = os.path.join("_portfolio", "projects.yml")

# Load YAML data

with open(yaml_file_path, "r") as file:
    projects_data = yaml.safe_load(file)
# Create Markdown files for each project

for item in projects_data["items"]:
    # Create a file name based on the project title

    file_name = item["title"].lower().replace(" ", "-") + ".md"
    file_path = os.path.join("_portfolio", file_name)

    # Write the Markdown content

    with open(file_path, "w") as md_file:
        md_file.write(f"---\n")
        md_file.write(f"title: \"{item['title']}\"\n")
        md_file.write(f"excerpt: \"{item['subtitle']}\"\n")
        md_file.write(f"header:\n")
        md_file.write(f"  image: \"{item['image']}\"\n")
        md_file.write(f"  caption: \"{item['title']}\"\n")
        md_file.write(f"categories:\n")
        md_file.write(f"  - data-analysis\n")  # Adjust categories as needed
        md_file.write(f"tags: [{item['tags']}]\n")
        md_file.write(f"link: \"{item['link']}\"\n")
        md_file.write(f"link_text: \"{item['link_text']}\"\n")
        md_file.write(f"---\n\n")
        md_file.write(f"## Project Overview\n\n{item['description']}\n")
        md_file.write(
            f"\n## Explore the Project\n\n[{{{{ page.link_text }}}}]({{{{ page.link }}}})\n"
        )
