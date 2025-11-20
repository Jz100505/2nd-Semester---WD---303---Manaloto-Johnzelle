import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo';
@Component({
  selector: 'app-root',
  // Flag as standalone because main.ts uses bootstrapApplication
  standalone: true,
  // All dependencies are correctly listed here
  imports: [Header, Skills, Footer, DataBindingDemoComponent, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
