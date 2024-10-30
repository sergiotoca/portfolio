import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ButtonModule } from 'primeng/button';
import { ContactRoutingModule } from '../contact-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
		FormsModule,
		ButtonModule,
		ContactRoutingModule,
		InputTextModule,
		InputTextareaModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
   // Form fields
  user_name: string = '';
  user_email: string = '';
  message: string = '';

  // EmailJS integration
  public sendEmail(e: Event) {
    e.preventDefault(); // Prevent default only if you’re not using `ngSubmit`

    // Send the form using EmailJS
    emailjs.sendForm(
      environment.emailjs.service_id,      // Replace with your actual Service ID
      environment.emailjs.template_id,     // Replace with your actual Template ID
      e.target as HTMLFormElement, 
      environment.emailjs.public_key       // Replace with your actual Public Key
    ).then(
      (response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        this.resetForm(); // Reset form fields after submission
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Message failed to send.');
      }
    );
  }

  // Function to reset form fields
  resetForm() {
    this.user_name = '';
    this.user_email = '';
    this.message = '';
  }

}