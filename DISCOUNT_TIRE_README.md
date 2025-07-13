# Discount Tire & Auto - Angular Website

This Angular application was created based on an existing WordPress website for Discount Tire & Auto in Kamloops, BC. The website features a modern, responsive design with professional automotive theming.

## Features

### Components Created:
- **Header Component**: Navigation with responsive mobile menu, logo, and contact information
- **Hero Component**: Eye-catching landing section with call-to-action buttons
- **Services Component**: Grid layout showcasing automotive services offered
- **About Component**: Company information with statistics and why-choose-us section
- **Contact Component**: Contact form, business information, and location details
- **Footer Component**: Site links, contact info, social media links, and business hours

### Design Features:
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Modern UI**: Clean, professional design with consistent branding
- **Brand Colors**: 
  - Primary: Maroon (#8B1538)
  - Secondary: Gold (#FFD700)
  - Supporting: Various grays and whites
- **Typography**: Inter font family for modern readability
- **Icons**: Font Awesome icons throughout the interface
- **Animations**: Subtle hover effects and transitions

### Services Highlighted:
1. Tire Services (installation, repair, balancing, rotation)
2. Oil Changes (conventional and synthetic)
3. Battery Service (testing, replacement, maintenance)
4. Brake Service (inspection, pads, rotors, fluid)
5. General Repairs (diagnostics, transmission, suspension, AC)
6. Inspections (safety, pre-purchase, diagnostic scans)

### Business Information:
- **Location**: Kamloops, BC, Canada
- **Phone**: (250) 374-6956
- **Hours**: 
  - Monday-Friday: 8:00 AM - 6:00 PM
  - Saturday: 8:00 AM - 5:00 PM
  - Sunday: Closed

## Technical Implementation

### Angular Structure:
- Angular 16.x
- Component-based architecture
- Template-driven forms for contact form
- Responsive CSS Grid and Flexbox layouts
- CSS custom properties for theming
- TypeScript for type safety

### Key Technologies:
- Angular Framework
- TypeScript
- CSS3 (Grid, Flexbox, Custom Properties)
- Font Awesome Icons
- Google Fonts (Inter)
- Responsive Web Design

## Development

### Prerequisites:
- Node.js (v14 or higher)
- Angular CLI

### Installation:
```bash
npm install
```

### Development Server:
```bash
ng serve
```
Navigate to `http://localhost:4200/` to view the application.

### Build:
```bash
ng build
```

### Production Build:
```bash
ng build --prod
```

## Deployment

This project is configured for Netlify deployment with the included `netlify.toml` configuration file.

## Image Assets

The application references several image assets that should be placed in `src/assets/images/`:
- `discount-tires-logo.png` - Company logo
- `tire-background.jpg` - Hero section background
- `mechanic-service.jpg` - Hero section service image
- `shop-interior.jpg` - About section shop interior

For production use, ensure these images are optimized for web delivery.

## Customization

The website can be easily customized by:
1. Updating the brand colors in `src/styles.css` CSS custom properties
2. Modifying component content in the respective HTML templates
3. Adjusting contact information and business hours in components
4. Adding or removing services in the services component
5. Updating business information throughout the site

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images (when properly sized)
- Minimal JavaScript bundle
- CSS animations with reduced motion support
- Semantic HTML for accessibility
- Fast loading with Angular's optimization features

## Accessibility

The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Focus management
- ARIA labels where appropriate
- Reduced motion support for accessibility

## SEO Optimization

- Proper meta tags
- Open Graph tags for social media
- Structured data ready
- Semantic HTML
- Fast loading times
- Mobile-responsive design
