import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    { 
      id: '1', 
      title: 'D2D Driver - Website', 
      description: 'A website for D2D Driver, a small logistics and driving services company.', // Short description
      longDescription: 'The D2D Driver website was developed for a small driving and logistics company aiming to provide streamlined and efficient services for clients. Built primarily using PHP, the focus was on eliminating code repetition and ensuring an easy-to-maintain, consistent structure across the website. While the current version of the website is mostly static, future development plans involve integrating real-time tracking functionality. This enhancement will allow drivers, passengers, and packages to be seamlessly tracked throughout the application, significantly boosting the user experience and operational efficiency for the D2D Driver company.', // Long description
      coverImage: 'assets/images/projects/d2d.png', 
      year: '2023', 
      month: 'July',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://d2ddriver.com/',
      status: 'Completed',
      tags: ['Web Development', 'Driver Tracking', 'Real-Time Data']
    },
    { 
      id: '2', 
      title: 'BookHaven - Website', 
      description: 'An e-commerce platform for book lovers to discover and purchase books.', // Short description
      longDescription: 'BookHaven is an e-commerce website designed to offer a seamless experience for book enthusiasts. Built using React, Node.js, and MongoDB, the platform features an easy-to-navigate user interface, a secure shopping experience, and a vast collection of books from various genres. It aims to help readers explore and purchase their favorite books effortlessly, while providing book recommendations based on user preferences. The project is currently in progress and focuses on creating a rich, community-oriented online bookstore experience.', // Long description
      coverImage: 'assets/images/projects/bookhaven.png', 
      year: '2024', 
      month: 'August',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/sergiotoca/BookHavenApp',
      status: 'Complete',
      tags: ['E-commerce', 'Book Store', 'Web Development']
    },
    { 
      id: '3', 
      title: 'ToGoList - Android Application', 
      description: 'An Android app to help users plan and organize their travel destinations.', // Short description
      longDescription: 'ToGoList is an Android application developed to help travelers organize their trips more effectively. Built with Kotlin, Google Maps API, and Firebase, the app allows users to create personalized lists of places to visit, plan routes efficiently, and track progress in real-time. It provides a convenient solution for exploring new places, linking points of interest on a map, and managing travel itineraries, ultimately enhancing the overall travel experience.', // Long description
      coverImage: 'assets/images/projects/togolist.png', 
      year: '2024', 
      month: 'August',
      technologies: ['Kotlin', 'Google Maps API', 'Firebase'],
      githubLink: 'https://github.com/sergiotoca/ToGoList',
      status: 'Completed',
      tags: ['Mobile Development', 'Travel', 'Productivity']
    },
    {
      id: '4', 
      title: 'Entangled - Escape Adventure Game', 
      description: 'An escape adventure game with retro RPG-style graphics, developed using Java Swing.', // Short description
      longDescription: 'Entangled is a pixel-art escape adventure game inspired by classic Gameboy RPGs, developed using Java Swing. In the current chapter, players find themselves on a mysterious island and must interact with objects, collect items, and solve puzzles to find their way out. The game leverages a frame updating mechanism and tile mapping engineering, creating a smooth gameplay experience with efficient resource handling. This project offered valuable hands-on experience with Java Swing for game development, particularly in implementing dynamic updates and mapping techniques.', // Long description
      coverImage: 'assets/images/projects/Entangled.jpg', 
      year: '2022', 
      month: 'December',
      technologies: ['Java Swing'],
      githubLink: 'https://github.com/sergiotoca/Entangled',
      status: 'In Progress',
      tags: ['Game Development', 'Escape Adventure', 'Retro RPG', 'Java Swing']
    },
    {
      id: '5', 
      title: 'Space Escape - The Invader\'s Perspective', 
      description: 'A Python game where players experience the view of the invader avoiding imperial troops’ attacks.', // Short description
      longDescription: 'Space Escape is a Python game developed using the Turtle library, offering a unique twist on the classic Space Invaders. Instead of defending against invaders, players experience the game from the perspective of an invader, dodging random attacks from imperial troops. The game features horizontal movement using arrow keys, random shooting mechanics from the top of the screen, and score tracking. With sound effects and a fast-paced gameplay experience, Space Escape challenges players to survive as long as possible in a hostile environment.', // Long description
      coverImage: 'assets/images/projects/game.jpg', 
      year: '2023', 
      month: 'April',
      technologies: ['Python', 'Turtle'],
      githubLink: 'https://github.com/sergiotoca/Space-Escape',
      status: 'Completed',
      tags: ['Game Development', 'Python', 'Turtle', 'Arcade Game']
    }
  ];
  
  

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
      const project = this.projects.find(p => p.id === id);
      return of(project);
  }
}