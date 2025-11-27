import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // New Import

@Component({
  selector: 'app-directives',
  imports: [RouterLink], // Added RouterLink
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

}
