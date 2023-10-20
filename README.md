# PokeDex Web App

A responsive web application built with React that allows users to explore and search for Pokemon information from the GraphQL API. This project showcases your frontend development skills, and it includes two main views: the home page and the PokeDex page.

## Features

- **Sticky Header**: The app features a sticky header with the title and navigation links.
  - In mobile view, navigation is accessible through a modal.
  - In the desktop view, navigation links are visible in the header.

- **Home Page**: The home page provides a brief description of the app and a button to access the PokeDex page.

- **PokeDex Page**: This page interacts with the GraphQL API to fetch the first 20 Pokemon.
  - Users can filter the displayed Pokemon based on their types.
  - Users can search for Pokemon by name within the current selection.

- **PokeDex Entries**: The Pokemon entries are displayed as cards, each showing pokemon's image and its type/s.

## Technologies Used

- React
- GraphQL for API consumption
- TailwindCSS

## Getting Started

1. Clone this repository.
2. Install the required dependencies.
3. Run the development server.

```bash
git clone https://github.com/Logic-Commit1/pokemon-app.git
cd pokemon-app
npm install # or yarn install
npm start # or yarn start
