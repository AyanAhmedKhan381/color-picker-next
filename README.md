# Palette Picker


## Video Demo



https://github.com/user-attachments/assets/f6e7a94b-48ab-4e9a-8dda-b908bf3afc51



Palette Picker is a web application built with Next.js, TypeScript, and Tailwind CSS that allows users to select a primary color and receive suggestions for complementary colors. The background of the webpage dynamically changes based on the selected primary color.

## Features

- **Color Picker**: Choose a primary color using a color wheel.
- **Color Suggestions**: Get complementary color suggestions including secondary, light, dark, and accent colors.
- **Dynamic Background**: The background gradient changes based on the selected primary color.
- **Responsive Design**: The application is fully responsive and adjusts to different screen sizes.

## Packages Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-colorful](https://github.com/omgovich/react-colorful)
- [tinycolor2](https://github.com/bgrins/TinyColor)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/palette-picker.git
   cd palette-picker

2. Install dependencies:

  ```bash
  npm install
```
or

  ```bash
  yarn install
```
3.Running the Application

Start the development server:
  ```bash
  npm run dev

```
or
  ```bash
  yarn dev
```

Open your browser and navigate to:

http://localhost:3000

### Project Structure
app/page.tsx: Main page component that includes the color picker and displays color suggestions.
app/components/ColorPicker.tsx: Color picker component that handles color selection and suggestions.
styles/globals.css: Global CSS file with Tailwind CSS and custom styles.

### Usage
Select a primary color using the color picker on the left side of the screen.
View the suggested colors on the right side of the screen. The background gradient will change based on the selected primary color.   
