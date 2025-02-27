# JioCinema Clone

This project is a clone of the JioCinema web application, built using React and Vite. It features a movie browsing interface with various categories and a backend API to serve movie data.

## Features

- Browse movies by categories such as Drama, Hindi, Highly Rated, and Japanese.
- Search functionality to find movies by title.
- Carousel for featured movies.
- Responsive design with a modern UI.

## Project Structure

- `index.html`: The main HTML file that structures the web page.
- `src/`: Contains the React components and styles.
  - `components/`: Directory containing reusable React components like `Header`, `Carousel`, `Featured`, `Shows`, etc.
  - `pages/`: Contains the main page components.
  - `assets/`: Directory for images and icons used in the project.
- `api/`: Contains the Express server setup and movie data JSON file.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Lists project dependencies and scripts.

## Setup

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/JioCinema_Clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd JioCinema_Clone
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Navigate to the `api` directory and start the backend server:
   ```bash
   cd api
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:5173` to view the application.
- Use the search bar to find movies by title.
- Browse through different categories to explore various movies.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Vite: A build tool that provides a fast development environment.
- Express: A web application framework for Node.js.
- CORS: A package to enable Cross-Origin Resource Sharing.

## Contributing

- Fork the repository and create your branch from `main`.
- If you've added code that should be tested, add tests.
- Ensure the test suite passes.
- Make sure your code lints.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the JioCinema web application.
- Uses FontAwesome for icons.
