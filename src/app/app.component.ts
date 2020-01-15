import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unified Investment Dashboard';

  constructor(private router: Router) {}

}
