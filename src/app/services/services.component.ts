import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-tire',
      title: 'Tire Services',
      description: 'New tire installation, tire repair, balancing, and rotation services.',
      features: ['Tire Installation', 'Tire Repair', 'Wheel Balancing', 'Tire Rotation']
    },
    {
      icon: 'fas fa-oil-can',
      title: 'Oil Changes',
      description: 'Quick and professional oil change services with high-quality oil.',
      features: ['Conventional Oil', 'Synthetic Oil', 'Oil Filter Replacement', 'Fluid Check']
    },
    {
      icon: 'fas fa-car-battery',
      title: 'Battery Service',
      description: 'Battery testing, replacement, and maintenance services.',
      features: ['Battery Testing', 'Battery Replacement', 'Terminal Cleaning', 'Charging System Check']
    },
    {
      icon: 'fas fa-brake-warning',
      title: 'Brake Service',
      description: 'Complete brake system inspection, repair, and replacement.',
      features: ['Brake Inspection', 'Pad Replacement', 'Rotor Service', 'Brake Fluid Change']
    },
    {
      icon: 'fas fa-cog',
      title: 'General Repairs',
      description: 'Comprehensive auto repair services for all makes and models.',
      features: ['Engine Diagnostics', 'Transmission Service', 'Suspension Repair', 'AC Service']
    },
    {
      icon: 'fas fa-search',
      title: 'Inspections',
      description: 'Thorough vehicle inspections and safety checks.',
      features: ['Safety Inspections', 'Pre-purchase Inspections', 'Diagnostic Scans', 'Maintenance Reports']
    }
  ];
}
