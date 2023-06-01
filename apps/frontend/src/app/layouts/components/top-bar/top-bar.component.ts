import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  @ViewChild('navbarToggler')
  navbarToggler!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) {}

  toggleMenu() {
    const navbarTogglerElement = this.navbarToggler.nativeElement;

    if (navbarTogglerElement) {
      const isExpanded =
        navbarTogglerElement.getAttribute('aria-expanded') === 'true';

      navbarTogglerElement.setAttribute('aria-expanded', String(!isExpanded));

      const navbarMenuElement = document.getElementById('navbarNav');
      if (navbarMenuElement) {
        if (isExpanded) {
          this.renderer.removeClass(navbarMenuElement, 'show');
        } else {
          this.renderer.addClass(navbarMenuElement, 'show');
        }
      }
    }
  }

  goToCreatePost() {
    this.router.navigate(['/internal/new']);
  }

  goToMyPosts() {
    this.router.navigate(['/internal/my']);
  }

  goToPosts() {
    this.router.navigate(['/internal/posts']);
  }

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
