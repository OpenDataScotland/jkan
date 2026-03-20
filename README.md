# opendata.scot (JKAN)

[opendata.scot](https://opendata.scot) is a crowdsourced open data portal that aggregates and catalogues open datasets from across Scotland. It is entirely volunteer-run, originating from the [OD_BODS project](https://github.com/OpenDataScotland) and built on top of [JKAN](https://github.com/timwis/jkan) — a lightweight, backend-free open data portal powered by Jekyll. This repository contains the source code and content for the site frontend, which is deployed via GitHub Pages.

## Prerequisites

- [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/)
- [Node.js](https://nodejs.org/) and npm

### Optional

- [Docker](https://www.docker.com/) (see below)

## Local development

Install Ruby dependencies:

```bash
bundle install
```

Install JavaScript dependencies:

```bash
npm install
```

Build the front-end assets:

```bash
npm run build
```

Serve the site locally with Jekyll:

```bash
bundle exec jekyll serve
```

The site will be available at http://localhost:4000.

To watch for front-end asset changes during development, run in a separate terminal:

```bash
npm run watch
```

## Docker (experimental - may have performance issues)

You can run the full site using Docker without installing Ruby or Node locally:

```bash
docker compose up
```

The site will be available at http://localhost:4000.

## Content

### Datasets

Datasets are stored as Markdown files in `_datasets/`. Each file contains YAML front matter describing the dataset — its title, organisation, licence, category, and links to the data.

### Organisations

Organisations are stored as Markdown files in `_organizations/`. Each file describes a data publisher. Not all data publishers have datasets listed on the site, but they can still be added here to be associated with datasets in the future and to act as a wish list for future additions.

### Categories and metadata

Shared reference data (categories, licences, organisation types) lives in `_data/`.

## Contributing

For code contributions, fork the repository and open a pull request against the `gh-pages` branch. Be sure to check out the [contributing guidelines](https://github.com/opendatascotland/jkan?tab=contributing-ov-file) for more details.

## Configuration

Site-wide settings are in `_config.yml`, including the site title, navigation, GitHub OAuth client ID (to be deprecated), and the dataset schema in use.

## Deployment

The site is deployed via GitHub Pages from the `gh-pages` branch. Jekyll builds the static site automatically on push.

## Original JKAN documentation

For details on the underlying JKAN framework, see the [JKAN repository](https://github.com/timwis/jkan).
