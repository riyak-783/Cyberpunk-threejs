# Three.js Interactive Helmet Website

This is a simple and interactive 3D website built using **Three.js**, **HTML**, **Tailwind CSS**, and **JavaScript**. The main feature of the website is a 3D helmet model that moves dynamically based on the user's cursor movements.

## Features

- **Interactive 3D Helmet**: The helmet moves in response to cursor movements, providing an engaging user experience.
- **Responsive Design**: Styled with Tailwind CSS to ensure compatibility across devices and screen sizes.
- **Lightweight and Fast**: Optimized for performance using Three.js and modern web development techniques.

## Demo

https://threejs-web.netlify.app/

## Technologies Used

- [Three.js](https://threejs.org/) - A lightweight 3D library to render and create 3D animations.
- **HTML** - For structuring the website.
- [Tailwind CSS](https://tailwindcss.com/) - For styling the website with responsive design.
- **JavaScript** - For adding interactivity and animations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/threejs-helmet
   ```

2. Navigate to the project directory:

   ```bash
   cd threejs-helmet
   ```

3. Open the `index.html` file in your browser to view the project.

## Usage

- Move your cursor around the screen, and the helmet will rotate to follow the direction of your cursor.

## Project Structure

```
threejs-helmet/
├── index.html       # Main HTML file
├── styles.css       # Tailwind CSS styles
├── script.js        # Main JavaScript file with Three.js logic
├── assets/          # Folder for 3D models and textures
└── README.md        # Project documentation
```

## How It Works

1. **Three.js Setup**:
   - Initializes a scene, camera, and renderer.
   - Adds the helmet 3D model to the scene.

2. **Cursor Tracking**:
   - Listens for mouse movement events and calculates the rotation of the helmet based on the cursor's position.

3. **Rendering**:
   - Continuously renders the scene to update the helmet's position and provide a smooth interactive experience.

## Credits

- Helmet model: [Source of the model if applicable].
- Built with [Three.js](https://threejs.org/).
- Styled with [Tailwind CSS](https://tailwindcss.com/).

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

---

Enjoy exploring the 3D world of this interactive helmet website!
