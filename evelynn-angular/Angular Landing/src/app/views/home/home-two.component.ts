import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-two',
  template: `<div class="landing">
  <app-header></app-header>
  <app-intro-two></app-intro-two>
  <app-portfolio-carousel></app-portfolio-carousel>
  <app-services-carousel></app-services-carousel>
  <app-pricings></app-pricings>
  <app-footer></app-footer>
  </div>`
})
export class HomeTwoComponent implements OnInit, OnDestroy {
  constructor(
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
