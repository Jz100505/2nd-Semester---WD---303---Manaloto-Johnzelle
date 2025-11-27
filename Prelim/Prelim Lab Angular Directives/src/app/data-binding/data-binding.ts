import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterLink],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation
  studentName = "Your name here";
  score = 95;

  // Property binding
  imageUrl = "https://picsum.photos/200";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}
