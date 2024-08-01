# Tour Of Pokemons

Welcome to **Tour Of Pokemons**! This project showcases a web application that allows users to explore various Pokémon using grid and list views. The application includes pagination, a search feature, and a detailed page for each Pokémon.

## Features

- **Grid and List Views**: Choose between grid and list views to display Pokémon.
- **Pagination**: Navigate through Pokémon with pagination controls and set a page size limit.
- **Text-Based Search**: Quickly find your favorite Pokémon using the search bar.
- **Pokemon Detail Page**: Click on any Pokémon to view detailed information.
- **Layout Components**:
  - **Header**: Navigation and branding elements.
  - **Footer**: Additional links and information.
  - **Sidenav**: Sidebar navigation for easy access to different sections.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
For builds - use `prod` branch

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

But remember we can't deploy the directly because the index.html reside deep inside `/dist/<project-name>/browser/index.html`

For Github pages - index.html must be directly present only one folder inside. So we manually copy all the contents to `/docs`

## Usage

- **Grid and List Views**: Use the view toggle to switch between grid and list views.
- **Pagination**: Use the pagination controls to navigate between pages. You can also set the number of items per page.
- **Search**: Type in the search bar to find Pokémon by name.
- **Detail Page**: Click on a Pokémon to view detailed information, including stats, abilities, and more.

## Technologies Used

- **Frontend**: Angular
- **API**: Pokémon API

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add some feature'\`).
5. Push to the branch (\`git push origin feature-branch\`).
6. Open a pull request.

## License

This project is licensed under the MIT License file for details.

## Acknowledgements

- Thanks to the [Pokémon API](https://pokeapi.co/) for providing the data.
- Special thanks to the contributors and community for their support.

## Contact

If you have any questions or feedback, please contact us at **chaudharypraveen98@gmail.com**.

---

Enjoy your tour of Pokémons!