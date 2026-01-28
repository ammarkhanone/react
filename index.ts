```bash
# Step 1: Create a new React project using Create React App with TypeScript
npx create-react-app my-dashboard --template typescript

# Step 2: Navigate to the project directory
cd my-dashboard

# Step 3: Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 4: Configure Tailwind to remove unused styles in production
```

Edit `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit `src/index.css` to include Tailwind's base styles:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```typescript
// Step 5: Create a simple Hello World component
// Edit src/App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
    </div>
  );
};

export default App;
```

```typescript
// Step 6: Start the application
// Run this command in the terminal
npm start
```

This will give you a simple React dashboard styled with Tailwind CSS, displaying "Hello, World!" in the center of the page. The application is structured to be easily maintained and ready for production.