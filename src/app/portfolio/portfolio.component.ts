import { Component, OnInit } from '@angular/core';
import  {NgxCarousel} from 'ngx-carousel';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public carouselOne: NgxCarousel;

  constructor(private title: Title) { title.setTitle('Portfolio'); }



  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: false,
      loop: true,
      custom: 'banner'
    }
  }

}
