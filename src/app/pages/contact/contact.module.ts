import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ContactFormComponent } from './contact-form/contact-form.component';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ButtonModule,
		ContactRoutingModule,
		InputTextModule,
		InputTextareaModule,
		ContactFormComponent
	],
	declarations: [ContactComponent]
})
export class ContactModule { }
