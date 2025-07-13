import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Satisfied Customers' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Quality Guarantee' }
  ];
}
