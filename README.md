# Pansite
Pansite is my personal portfolio website, built using [Eleventy (11ty)](https://www.11ty.dev/) to generate a fast and lightweight static site. It showcases my work, projects, and technical interests in software engineering.

## Features

- Uses Eleventy to generate static pages

- Clean and minimal design

- Showcases my projects and skills

- Fast, lightweight, and easy to maintain

- Uses Markdown for writing content, which is then converted to HTML automatically

## Installation

To get started, clone this repository and install dependencies:

```sh
git clone https://github.com/Panable/pansite.git
cd pansite
npm install
```

## Usage

### Development Server

To run Eleventy in development mode with live reload:

```sh
npm start
```

This will start a local development server at `http://localhost:8080/`.

### Build for Production

To generate the static site:

```sh
npm run build
```

This will create the final HTML files in the `_site/` directory.

## Project Structure

```
/
├── _includes/      # Reusable templates and partials
├── _layouts/       # Layout files
├── _site/          # Generated site output (ignored in Git)
├── content/        # Main site content
├── .eleventy.js    # Eleventy configuration (if needed)
├── package.json    # Dependencies and scripts
├── README.md       # Project documentation
```

## Contributing

If you'd like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
