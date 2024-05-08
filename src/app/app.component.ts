import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';
import { SwiperOptions } from 'swiper';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tawet Consulting';
  loading = true;
  titleState = "";
  isSticky = true;
  
  isMenuOpen: boolean = false;

  config: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    }
  };
  
  slides: Slide[] = [
    {
      image: '../../assets/images/backgrounds/welcome/finance.jpg',
      title: 'Go beyond boundaries',
      subtitle: 'Business Finance, and Regulations',
      text: 'Unlock the power of interdisciplinary expertise to conquer evolving risk landscapes and propel your business towards unparalleled growth.'
    },
    {
      image: '../../assets/images/backgrounds/welcome/data-business.jpg',
      title: 'Insight Unleashed',
      subtitle: 'Data Analytics and Business Intelligence',
      text: 'Empower your organization with precise data-driven solutions, guiding strategic decisions and maximizing potential across industries'
    },
    {
      image: '../../assets/images/backgrounds/welcome/risk-management.jpg',
      title: 'Precision Shield',
      subtitle: 'Risk Management Solutions',
      text: 'Navigate financial risks seamlessly with our expert team, combining numerical optimization and strategic foresight to fortify your organization\'s resilience'
    },
  ];

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
