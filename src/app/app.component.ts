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

export class AppComponent implements AfterViewInit{

  title = 'Tawet Consulting';
  loading = true;
  titleState = "";
  isSticky = true;
  
  isMenuOpen: boolean = false;

  @ViewChild('cardBody') cardBodyRef!: ElementRef;
  maxCharacters = 300;

  config: SwiperOptions = {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
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

  yourData = `Our team of data scientists, mathematicians, and computer scientists collaborate to deliver cutting-edge data-driven solutions for complex challenges across healthcare, retail, finance, and insurance. We leverage market trends and implement data-driven decision-making processes. Through the development of predictive models for market trends, customer behavior, and financial performance, we empower companies to make informed decisions with greater certainty. Additionally, we craft hypotheses and testing methods to optimize control within your organization, addressing your unique challenges head-on.`; // Replace with your actual data source

  ngAfterViewInit(): void {
    if (this.cardBodyRef.nativeElement.textContent.length > this.maxCharacters) {
      this.cardBodyRef.nativeElement.style.setProperty('--max-chars', this.maxCharacters.toString());
    }
  }
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
