# Modern Portfolio Website

A professional, responsive portfolio website built with HTML, CSS, and vanilla JavaScript. Features a clean, modern design with smooth animations and mobile-first responsiveness.

## 🌟 Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, professional aesthetic with smooth animations
- **SEO Optimized**: Semantic HTML with proper meta tags for search engines
- **Easy Customization**: CSS variables for quick theme changes
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Contact Form**: Ready-to-use form with validation
- **Chatbot Ready**: Prepared integration point for AI chatbot
- **Cross-browser Compatible**: Works on all modern browsers
- **Fast Loading**: Optimized performance with minimal dependencies

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with name, title, and CTAs
2. **About Me** - Professional bio with stats and profile image
3. **Skills** - Technical skills organized by category
4. **Projects** - Showcase of work with project cards
5. **Education** - Timeline of academic achievements and certifications
6. **Contact** - Functional contact form
7. **Footer** - Social links and additional information

## 🚀 Quick Start

### Option 1: Direct Use
1. Download `index.html`
2. Open the file in any web browser
3. Customize the content with your information

### Option 2: Local Development
```bash
# Clone or download the file
# Open with a local server (recommended for development)
python -m http.server 8000
# Or use VS Code Live Server extension
```

## ✏️ Customization Guide

### 1. Personal Information

**Update your details in the HTML:**

```html
<!-- Hero Section -->
<h1 class="hero-title">Your Name</h1>
<p class="hero-description">Your description here...</p>

<!-- About Section -->
Update the text, stats, and replace the placeholder image

<!-- Projects Section -->
Add your actual projects, images, and links

<!-- Education Section -->
Update with your degrees and certifications

<!-- Contact Section -->
Change email: your.email@example.com
```

### 2. Theme Colors

**Modify CSS variables at the top of the `<style>` section:**

```css
:root {
    /* Change these colors to match your brand */
    --color-primary: #0F172A;      /* Dark navy */
    --color-accent: #F59E0B;       /* Amber accent */
    --color-accent-light: #FCD34D;
    
    /* Or use your own color scheme: */
    /* --color-primary: #1a1a1a; */
    /* --color-accent: #3b82f6; */
}
```

### 3. Fonts

**Current fonts:**
- Display (Headings): Playfair Display
- Body (Text): DM Sans

**To change fonts:**

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your preferred fonts
3. Replace the font link in the `<head>` section
4. Update CSS variables:

```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### 4. Images

**Replace placeholder images:**

```html
<!-- About Section Image -->
<img src="path/to/your-photo.jpg" alt="Profile photo">

<!-- Project Images -->
<!-- Add actual project screenshots to .project-image divs -->
<div class="project-image">
    <img src="path/to/project-screenshot.jpg" alt="Project name">
</div>
```

### 5. Social Media Links

**Update social links in the footer:**

```html
<a href="https://github.com/yourusername" class="social-link">...</a>
<a href="https://linkedin.com/in/yourusername" class="social-link">...</a>
<a href="https://twitter.com/yourusername" class="social-link">...</a>
```

## 🤖 Adding an AI Chatbot

The website is prepared for easy chatbot integration. Here's how to add one:

### Option 1: Using a Chatbot Service (Recommended)

**Popular chatbot services:**
- [Tidio](https://www.tidio.com/)
- [Drift](https://www.drift.com/)
- [Intercom](https://www.intercom.com/)
- [Dialogflow](https://dialogflow.cloud.google.com/)

**Integration steps:**

1. Sign up for a chatbot service
2. Get your chatbot script/widget code
3. Add it to the HTML before `</body>`:

```html
<!-- Example: Tidio Chatbot -->
<script src="//code.tidio.co/your-tidio-key.js" async></script>
```

### Option 2: Custom Chatbot Integration

If you have a custom chatbot, use the prepared integration point:

```javascript
// Uncomment and modify this section in the JavaScript
function initializeChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    
    // Option A: Load external script
    const script = document.createElement('script');
    script.src = 'YOUR_CHATBOT_URL';
    script.async = true;
    document.body.appendChild(script);
    
    // Option B: Inject HTML directly
    chatbotContainer.innerHTML = `
        <div class="chatbot-widget">
            <!-- Your chatbot HTML -->
        </div>
    `;
}

window.addEventListener('load', initializeChatbot);
```

### Option 3: Simple Chat Widget

Add a basic chat interface:

```html
<!-- Add this CSS -->
<style>
.chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 500px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    z-index: 1000;
}
</style>

<!-- Add this HTML before </body> -->
<div class="chat-widget">
    <!-- Your chat interface here -->
</div>
```

## 📧 Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

### Option 1: Using FormSubmit (No Backend Required)

1. Go to [FormSubmit.co](https://formsubmit.co/)
2. Update the form action:

```html
<form action="https://formsubit.co/your@email.com" method="POST">
    <!-- Add this hidden input -->
    <input type="hidden" name="_subject" value="New Portfolio Contact">
    <input type="hidden" name="_captcha" value="false">
    <!-- Rest of your form fields -->
</form>
```

### Option 2: Using EmailJS

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Set up your email service
3. Replace the form submission code:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.className = 'form-message success';
            contactForm.reset();
        })
        .catch(() => {
            formMessage.textContent = 'Failed to send message.';
            formMessage.className = 'form-message error';
        });
});
```

### Option 3: Custom Backend

Create a backend endpoint (Node.js example):

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Send email using nodemailer
    // ... your email logic
    
    res.json({ success: true });
});
```

Update the form submission in the HTML:

```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 🎨 Design Customization

### Color Schemes

Try these alternative color schemes:

**Blue Professional:**
```css
--color-primary: #1e40af;
--color-accent: #60a5fa;
```

**Purple Creative:**
```css
--color-primary: #6b21a8;
--color-accent: #a855f7;
```

**Green Tech:**
```css
--color-primary: #065f46;
--color-accent: #10b981;
```

**Red Bold:**
```css
--color-primary: #991b1b;
--color-accent: #ef4444;
```

### Layout Modifications

**Change max width:**
```css
--max-width: 1400px; /* Default is 1200px */
```

**Adjust spacing:**
```css
--spacing-lg: 5rem;  /* Increase section padding */
--spacing-xl: 8rem;  /* More dramatic spacing */
```

**Border radius:**
```css
--border-radius: 8px;  /* Sharp corners */
--border-radius: 20px; /* Very rounded */
```

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

Test on multiple devices or use browser dev tools.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## ⚡ Performance Tips

1. **Optimize Images**: Compress images using [TinyPNG](https://tinypng.com/)
2. **Use WebP Format**: Modern image format for better compression
3. **Lazy Loading**: Add `loading="lazy"` to images
4. **Minify CSS**: Use online tools to minify CSS for production
5. **CDN**: Host images on a CDN for faster loading

## 📦 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `username.github.io/repository-name`

### Netlify
1. Drag and drop your HTML file to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant deployment
3. Optional: Connect to Git for continuous deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 🐛 Troubleshooting

**Images not loading:**
- Check file paths are correct
- Ensure images are in the same directory or correct relative path

**Animations not working:**
- Make sure JavaScript is enabled
- Check browser console for errors

**Mobile menu not working:**
- Verify the menu toggle JavaScript is present
- Check for JavaScript errors in console

**Form not submitting:**
- Ensure you've set up a backend or form service
- Check network tab in browser dev tools

## 📝 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file (contains everything)
│
├── images/             # Your images (create this folder)
│   ├── profile.jpg
│   ├── project1.jpg
│   └── project2.jpg
│
└── README.md          # This file
```

## 🎓 Learning Resources

Want to customize further? Check these resources:

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [CSS Tricks](https://css-tricks.com/) - CSS techniques and tutorials
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [Google Fonts](https://fonts.google.com/) - Free font library
- [Coolors](https://coolors.co/) - Color scheme generator

## 📄 License

This template is free to use for personal and commercial projects. No attribution required.

## 🤝 Support

If you have questions or need help:
1. Check the troubleshooting section
2. Review the customization guide
3. Search for similar issues online
4. Consult web development forums

## 🎉 Credits

- Design: Modern minimalist approach
- Fonts: Google Fonts (Playfair Display, DM Sans)
- Icons: Custom SVG icons
- Animations: Custom CSS animations

---

**Built with ❤️ and code**

Happy customizing! 🚀
