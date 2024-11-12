import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    TimelineModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  events: any[] = [];

  ngOnInit() {
    this.events = [
      { institution: 'Federal University of Itajuba', 
        credential: 'Bachelor of Control and Automation Engineering',
        date: 'Jan 2010 - Jan 2016', 
        icon: PrimeIcons.COG, 
        color: '#003E76', 
        image: 'unifei-logo.png', 
        text: 'I earned my Bachelor\'s degree in Control and Automation Engineering from the Federal University of Itajubá (UNIFEI), a leading institution in Brazil known for its excellence in engineering education.',
        text1: 'During my studies, I developed a solid foundation in both theoretical and practical aspects of control and automation. This foundation has greatly benefited my career as a developer, providing me with expertise in advanced software and hardware integration, system modeling, and automation solutions. I gained skills in areas such as advanced control systems, microcontrollers, digital electronics, and software development—all of which are crucial in building efficient, innovative technology solutions.',
        skills: [
          'Advanced Control Systems',
          'Industrial Instrumentation',
          'Microcontrollers',
          'Digital Electronics',
          'SCADA Systems',
          'Power Electronics and Controlled Drives',
          'Computer Communication Networks',
          'PLC Programming',
          'Artificial Intelligence for Automation',
          'Software Integration'
        ],
        link: 'https://international.unifei.edu.br/' },
        
      { institution: 'Salvador University',
        credential: 'MBA in Business Logistics and Supply Chain', 
        date: 'Jan 2018 - Jan 2020', 
        icon: PrimeIcons.BOX, 
        color: '#C1414C',
        image: 'unifacs-logo.png', 
        skills: [
          'Theory of Constraints (TOC)',
          'Lean management principles',
          'Accounting and financial analysis',
          'Strategic supply chain management'
        ],
        text: 'I completed a postgraduate Lato Sensu MBA at Universidade Salvador, focusing on logistics and supply chain management. This program covered various topics, including:', 
        text1: 'The knowledge gained in logistics optimization, process improvement, and Lean methodologies has significantly enhanced my problem-solving skills. These approaches align well with agile methodologies, emphasizing efficiency, reducing bottlenecks, and continuous improvement—key elements that add value in dynamic environments.',
        link: 'https://www.unifacs.br/' },

      { institution: 'Georgian College', 
        credential: 'Diploma in Computer Programming, Co-op',
        date: 'Sep 2022 - Aug 2024', 
        icon: PrimeIcons.DESKTOP, 
        color: '#61B14A',
        image: 'georgian-logo.png', 
        skills: [
          'HTML, CSS, JavaScript, and JavaScript Frameworks', 
          'Advanced Object-Oriented Programming with Java', 
          'Server-Side Scripting using ASP.NET', 
          'Relational Databases',
          'Cloud Computing Services',
          'Systems Analysis and Project Management',
          'Linux System Administration',
          'Internet of Things (IoT) using Arduino',
          'Mobile and Pervasive Computing'
         ],
        text: 'I completed a 2-year College Diploma in Computer Programming at Georgian College, which included a co-op component for practical experience. Throughout the program, I gained knowledge and skills in:', 
        text1: 'In addition to the technical curriculum, I also focused on soft skills development, including communication essentials and leadership. These skills, combined with my co-op experience, have prepared me to work effectively in dynamic environments, often cross-referencing agile methodologies and Lean principles to streamline project development.',
        link: 'https://georgianatilac.com/' }
    ];

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
