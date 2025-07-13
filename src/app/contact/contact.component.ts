import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    phone: '(250) 374-6956',
    email: 'info@discounttirekamloops.com',
    address: '123 Auto Service Way, Kamloops, BC V2C 1N2',
    hours: {
      weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
      saturday: 'Saturday: 8:00 AM - 5:00 PM',
      sunday: 'Sunday: Closed'
    }
  };

  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
      // Reset form or show success message
    }
  }
}
