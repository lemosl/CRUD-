import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import{MatToolbarModule} from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import{MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,RouterLink, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'customer-registration-crud';
}
