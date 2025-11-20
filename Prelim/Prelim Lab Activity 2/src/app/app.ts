import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }

