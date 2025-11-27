// src/app/directives/directives.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Define interface for clarity
interface Student {
  name: string;
  course: string;
  isActive: boolean;
}

@Component({
  selector: 'app-directives',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  // Control properties for Structural Directives
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  // Properties for @if control flow
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  // New Property 1: Array for @for loop
  cityList: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"];

  // New Property 2: Array of objects for combined @for and @if loop
  studentList: Student[] = [
    { name: 'D Espinol', course: 'Web Development', isActive: false },
    { name: 'B Diaz', course: 'Network Administration', isActive: false },
    { name: 'F Alejandro', course: 'Systems Development', isActive: false },
    { name: 'D David', course: 'CyberSecurity', isActive: false },
    { name: 'C Quintana', course: 'Web Development', isActive: true },
  ];

  // Methods to control visibility
  showNote(): void {
    this.isNoteVisible = true;
  }

  hideNote(): void {
    this.isNoteVisible = false;
  }

  toggleNote(): void {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
