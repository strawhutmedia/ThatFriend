# That Friend - Official Film Website

An interactive, modern website for the indie bromance comedy "That Friend" - produced by Straw Hut Media.

## About the Film

**That Friend** is an indie bromance comedy directed by Will Sterling and Alex Wall, starring Harvey Guillen, Billie Lourd, Josh Brener, and Miles Gutierrez-Riley.

When Paul (Harvey Guillen) crashes his best friend Henry's (Josh Brener) romantic weekend in Palm Springs with his new girlfriend Penny (Billie Lourd), what starts as an innocent visit spirals into mayhem after Paul's drug-laced cigarettes disappear into a stranger's hands.

## Website Features

### Interactive Elements
- **Particle Animation Background** - Dynamic particle system with connecting lines
- **Smooth Scroll Navigation** - Seamless section transitions
- **Reveal Animations** - Content fades in as you scroll
- **Parallax Effects** - Hero section with depth
- **Hover Effects** - Interactive cards and buttons
- **Custom Cursor Glow** - Enhanced visual feedback on desktop
- **Mobile Responsive** - Optimized for all devices
- **Easter Egg** - Try the Konami Code! (↑ ↑ ↓ ↓ ← → ← → B A)

### Sections

1. **Hero Section** - Eye-catching poster display with animated title
2. **About** - Film synopsis and production details
3. **Cast & Crew** - Interactive cards showcasing the talent
4. **News** - Embedded Deadline articles about the film
5. **Trailer** - Placeholder ready for trailer release
6. **Credits** - Complete production credits (editable)
7. **Footer** - Navigation and copyright information

## Quick Start

### Option 1: Open Locally
Simply open `index.html` in your web browser:
```bash
open index.html
# or on Linux
xdg-open index.html
# or on Windows
start index.html
```

### Option 2: Use a Local Server (Recommended)
For the best experience, use a local web server:

**Using Python 3:**
```bash
python3 -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js (with npx):**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

## Customization Guide

### 1. Replace the Poster
- Add your official poster image to `/assets/poster.jpg`
- Recommended size: 600x900px or similar 2:3 aspect ratio
- Supported formats: JPG, PNG, WebP

### 2. Update Credits
- Click the "Edit Credits" button in the Credits section
- Edit the text directly on the page
- Click "Save Credits" when done
- For permanent changes, edit the HTML in `index.html` around line 268

### 3. Add More Cast/Crew
Edit `index.html` in the Cast section and add new cards:
```html
<div class="cast-card reveal">
    <div class="cast-image-placeholder">
        <div class="cast-initial">XY</div>
    </div>
    <div class="cast-info">
        <h3>Name Here</h3>
        <p class="role">Role Here</p>
        <div class="cast-bio">Bio text here</div>
    </div>
</div>
```

### 4. Add the Trailer
When your trailer is ready, replace the placeholder in `index.html` (around line 237):
```html
<div class="trailer-container reveal">
    <iframe
        width="100%"
        height="500"
        src="YOUR_YOUTUBE_EMBED_URL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
```

### 5. Customize Colors
Edit the CSS variables in `styles.css` (lines 9-15):
```css
:root {
    --primary-color: #ff6b35;      /* Main orange */
    --secondary-color: #f7931e;    /* Secondary orange */
    --dark-bg: #0a0a0a;            /* Main background */
    --darker-bg: #050505;          /* Alternate background */
}
```

### 6. Add Social Media Links
Edit the footer section in `index.html` (around line 312):
```html
<div class="footer-social">
    <p>Follow the journey</p>
    <a href="https://instagram.com/yourprofile">Instagram</a>
    <a href="https://twitter.com/yourprofile">Twitter</a>
</div>
```

## File Structure

```
ThatFriend/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features
├── assets/
│   └── poster.jpg      # Film poster (replace with actual image)
└── README.md           # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - No dependencies, pure JS
- **Canvas API** - Particle effects
- **Google Fonts** - Bebas Neue & Montserrat

## Credits & Sources

### Film Information
- [Billie Lourd Joins 'That Friend' - Deadline (October 2024)](https://deadline.com/2024/10/billie-lourd-that-friend-1236107779/)
- [Josh Brener Joins Harvey Guillen - Deadline (August 2024)](https://deadline.com/2024/08/josh-brener-joins-harvey-guillen-that-friend-comedy-1236044797/)
- [Harvey Guillen To Topline 'That Friend' - Deadline (July 2024)](https://deadline.com/2024/07/harvey-guillen-to-topline-that-friend-comedy-will-sterling-alex-wall-1236023305/)
- [That Friend on IMDb](https://www.imdb.com/title/tt33041195/)

### Design Inspiration
Modern film websites with interactive elements and smooth animations, following 2025 web design trends.

## Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/ThatFriend`

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Vercel
```bash
npx vercel
```

## Future Enhancements

Ideas for when more content is available:
- Photo gallery section with lightbox
- Behind-the-scenes videos
- Press kit download section
- Screening schedule/locations
- Ticket purchasing integration
- Email newsletter signup
- Social media feed integration

## Support

For issues or questions about the website, please open an issue in this repository.

## License

Copyright © 2024-2025 Straw Hut Media. All rights reserved.

---

**Produced by Straw Hut Media**
Directed by Will Sterling & Alex Wall
Starring Harvey Guillen, Billie Lourd, and Josh Brener
