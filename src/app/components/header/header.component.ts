import { Component } from '@angular/core';
import { LOGO_URL } from '../../pages/constants/config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logoUrl = LOGO_URL;
}
