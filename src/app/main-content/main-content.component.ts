import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  // Simplified services data - reduced from 6 to 3 core services
  services = [
    {
      icon: 'fas fa-tire',
      title: 'Tire Services',
      description: 'New tire installation, tire repair, balancing, and rotation services.',
      image: 'assets/images/change tire.png'
    },
    {
      icon: 'fas fa-oil-can',
      title: 'Oil Changes',
      description: 'Quick and professional oil change services with high-quality oil.',
      image: 'assets/images/brake rotor.png'
    },
    {
      icon: 'fas fa-cog',
      title: 'General Repairs',
      description: 'Comprehensive auto repair services for all makes and models.',
      image: 'assets/images/Steering-Suspension-min.png'
    }
  ];

  // Simplified stats - reduced complexity
  stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Satisfied Customers' },
    { number: '100%', label: 'Quality Guarantee' }
  ];

  // Tire brands we work with
  tireBrands = [
    { name: 'Michelin', logo: 'assets/images/michelin.png' },
    { name: 'Bridgestone', logo: 'assets/images/bridgestone.png' },
    { name: 'Goodyear', logo: 'assets/images/goodyear.png' },
    { name: 'Continental', logo: 'assets/images/continental.png' },
    { name: 'Pirelli', logo: 'assets/images/pirelli.png' },
    { name: 'Hankook', logo: 'assets/images/hankook.png' },
    { name: 'Cooper', logo: 'assets/images/cooper-logo-1.png' },
    { name: 'Dunlop', logo: 'assets/images/dunlop.png' },
    { name: 'Yokohama', logo: 'assets/images/yokohama-logo-black.png' }
  ];

  // Vehicle brands we service
  vehicleBrands = [
    { name: 'Toyota', logo: 'assets/images/toyota.png' },
    { name: 'Honda', logo: 'assets/images/honda.png' },
    { name: 'Ford', logo: 'assets/images/ford.png' },
    { name: 'Chevrolet', logo: 'assets/images/chevrolet.png' },
    { name: 'Nissan', logo: 'assets/images/nissan.png' },
    { name: 'Hyundai', logo: 'assets/images/hyundai.png' },
    { name: 'Volkswagen', logo: 'assets/images/volks-wagen.png' },
    { name: 'Mercedes', logo: 'assets/images/mercedes.png' },
    { name: 'BMW', logo: 'assets/images/left-1-min-maroon.png' },
    { name: 'Acura', logo: 'assets/images/acura.png' },
    { name: 'Lexus', logo: 'assets/images/lexus.png' },
    { name: 'Infiniti', logo: 'assets/images/infinity.png' }
  ];

  contactInfo = {
    phone: '(250) 374-6956',
    email: 'info@discounttirekamloops.com',
    address: '123 Auto Service Way, Kamloops, BC V2C 1N2'
  };

  onSubmit(form: any) {
    if (form.valid) {
      // Simple form handling
      console.log('Form submitted:', form.value);
      alert('Thank you! We will contact you soon.');
      form.reset();
    }
  }
}
