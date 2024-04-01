import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.fragment.subscribe((frag) => {
      this.JumpToSection(frag);
    });
  }
  JumpToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  }
}
