# Zarrin Blog App

A modern, responsive blog website built with React and Tailwind CSS. This is my personal blog where I share thoughts on tech, design, and whatever else I'm thinking about.

## What it is

Basically, it's a clean blog site with a dark/light theme toggle, responsive design, and smooth animations. I wanted something that looks professional but doesn't feel corporate.

## Features

### 🎨 Design & UX

- **Dark/Light Mode**: Toggle between themes with a smooth animation. The theme toggle sits in the bottom right on desktop and in the navbar on mobile
- **Responsive Design**: Works perfectly on all devices - mobile, tablet, desktop
- **Smooth Animations**: Hover effects, page transitions, and loading states
- **Modern UI**: Clean, minimal design with good typography and spacing

### 📱 Navigation

- **Sticky Navbar**: Stays at the top when scrolling, with a subtle blur effect
- **Mobile Menu**: Hamburger menu for mobile with smooth slide-down animation
- **Logo**: Clickable logo that takes you home and refreshes the page
- **Active States**: Current page is highlighted in the navigation

### 📝 Blog Features

- **Landing Page**: Hero section with featured blog post and recent posts grid
- **Blog List**: Grid layout showing all blog posts with images, categories, and dates
- **Single Blog**: Individual blog post pages with proper typography and layout
- **404 Page**: Custom error page with a nice gradient design

### 🎯 Pages

- **Home**: Landing page with hero section and featured content
- **Blog**: List of all blog posts in a responsive grid
- **About**: Information about me and the blog
- **Contact**: Contact form and information
- **404**: Custom error page

### 🔧 Technical Stuff

- **React 18**: Latest React with hooks and modern patterns
- **React Router**: Client-side routing for smooth navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: Dark mode state management
- **Local Storage**: Theme preference is saved between visits
- **Responsive Images**: Optimized images that work on all screen sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/zarrin-blog-app.git
cd zarrin-blog-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   ├── DarkModeToggle.jsx  # Theme toggle
│   ├── ScrollToTop.jsx # Scroll to top button
│   ├── NewsletterForm.jsx  # Newsletter subscription form
│   └── NewsletterContext.jsx # Newsletter state management
├── pages/              # Page components
│   ├── LandingPage.jsx # Home page
│   ├── BlogPage.jsx    # Blog list page
│   ├── SingleBlogPage.jsx # Individual blog post
│   ├── AboutPage.jsx   # About page
│   ├── ContactPage.jsx # Contact page
│   └── NotFoundPage.jsx # 404 page
├── contexts/           # React contexts
│   └── DarkModeContext.jsx # Dark mode state
├── assets/            # Images and static files
│   └── images/        # All images used in the app
├── App.jsx            # Main app component
├── App.css            # App-specific styles
├── index.js           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. The primary color is purple (`primary-600`) but you can easily change it to match your brand.

### Content

- Update blog posts in the respective page components
- Replace images in the `assets/images/` folder
- Modify text content directly in the JSX files

### Styling

All styling is done with Tailwind CSS classes. The design is responsive by default and follows mobile-first principles.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast page transitions

## Future Plans

- Add a CMS for easier content management
- Implement search functionality
- Add categories and tags
- Maybe add comments system
- SEO optimizations

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Tailwind CSS
