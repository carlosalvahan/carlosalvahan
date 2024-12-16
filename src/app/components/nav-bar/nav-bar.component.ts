import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbNavModule, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  active = 'home';
  constructor(private router: Router) {}

  navChanged(e: any) {
    this.router.navigateByUrl(e);
  }

  getHeight() {
    let window = new Window();
    return window.innerHeight - 55;
  }
}
