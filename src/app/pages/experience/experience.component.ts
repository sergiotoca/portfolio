import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    TimelineModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  
  experiences: any[] = [];

  isMobile: boolean = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.experiences = [
      {
          company: 'Ontario Power Generation',
          position: 'Software Engineer',
          date: 'Sep 2024 - Sep 2025',
          location: 'Bowmanville, ON',
          icon: PrimeIcons.COG,
          color: '#003E76',
          image: 'opg-logo.png',
          description: 'Responsible for enhancing efficiency and deploying applications in the Operations area.',
          tasks: [
              'Bring Innovation Automation in Darlington Operations computer applications.',
              'Create an account that deploys OPG applications through Darlington Operations.',
              'Update the Darlington Operations and Maintenance Intranet Homepage.',
              'Assess Operations Information Technology structure and recommend improvements.',
              'Optimize Ariba Processing times for Supply Chain.'
          ]
      },
      {
          company: 'Ontario Power Generation',
          position: 'Software Developer Co-op Student',
          date: 'Sep 2023 - Apr 2024',
          location: 'Bowmanville, ON',
          icon: PrimeIcons.BOLT,
          color: '#005FA8',
          image: 'opg-logo.png',
          description: 'Co-op position working on innovative projects in a nuclear power plant environment.',
          tasks: [
              'Authored the Project Charter for a $10 million Main Control Room renovation.',
              'Developed a web application using ASP.NET, C#, Angular, HTML, CSS, and SQL.',
              'Created a Python, SQL, and Excel VBA-based system to identify dormant projects.',
              'Designed Power BI dashboards to enhance data analysis and decision-making.',
              'Developed a Power App to improve procedure request efficiency.'
          ]
      },
      {
          company: 'Code-it-Hacks',
          position: 'Coach',
          date: 'Jan 2023 - Jun 2023',
          location: 'Toronto, ON',
          icon: PrimeIcons.USERS,
          color: '#4CAF50',
          description: 'Guided students in learning coding concepts through interactive, play-based projects.',
          tasks: [
              'Taught coding concepts in Python, Java, and C#.',
              'Updated lesson plans and gaming projects following Code-it Hacks templates.',
              'Formed collaborative student teams to foster teamwork.'
          ]
      },
      {
          company: 'WDC Networks',
          position: 'Production Manager',
          date: 'Jan 2019 - Jun 2022',
          location: 'Ilhéus, Bahia, Brazil',
          icon: PrimeIcons.CHART_LINE,
          color: '#C1414C',
          image: 'wdc-networks-logo.png',
          description: 'Managed production and logistics, implementing Lean and Theory of Constraints for efficiency.',
          tasks: [
              'Managed a team of 3 supervisors at two sites, 1700 km apart.',
              'Reduced labor costs by 30% and increased productivity by 20%.',
              'Coordinated the creation of a new production/logistics department.',
              'Implemented data-driven process optimizations to enhance throughput.'
          ]
      },
      {
          company: 'WDC Networks',
          position: 'Product Engineer',
          date: 'Jan 2016 - Jan 2019',
          location: 'Ilhéus, Bahia, Brazil',
          icon: PrimeIcons.COG,
          color: '#E57373',
          image: 'wdc-networks-logo.png',
          description: 'Responsible for product data entry and process improvement in the engineering team.',
          tasks: [
              'Handled data entry for product information.',
              'Improved work processes and trained new employees.',
              'Implemented quality checks using Microsoft Excel and TOTVS Proteus.'
          ]
      },
      {
          company: 'WDC Networks',
          position: 'Product Management Intern',
          date: 'Aug 2015 - Jan 2016',
          location: 'São Paulo, SP, Brazil',
          icon: PrimeIcons.DESKTOP,
          color: '#FFD700',
          image: 'wdc-networks-logo.png',
          description: 'Internship in product management, assisting in data analysis and logistics.',
          tasks: [
              'Assisted in data analysis for product management.',
              'Worked closely with logistics for product delivery improvements.'
          ]
      }
    ];
  }
}
