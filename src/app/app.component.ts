import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';

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

export class AppComponent implements AfterViewInit {
  title = 'Tawet Consulting';
  loading = true;
  titleState = "";
  isSticky = true;
  
  isMenuOpen: boolean = false;

  @ViewChild('typingText', { static: false }) typingText!: ElementRef;
  @ViewChild('textContent', { static: false }) textContent!: ElementRef;

  slides: Slide[] = [
    {
      image: '../../assets/images/backgrounds/welcome/beyond_bounderies.jpg',
      title: 'Go beyond boundaries',
      subtitle: 'Mastering Risk, Finance, and Regulations for Strategic Excellence',
      text: 'Unlock the power of interdisciplinary expertise to conquer evolving risk landscapes and propel your business towards unparalleled growth.'
    },
    {
      image: '../../assets/images/backgrounds/welcome/insight_unleshed.jpg',
      title: 'Insight Unleashed',
      subtitle: 'Transforming Business with Data Analytics and Intelligence',
      text: 'Empower your organization with precise data-driven solutions, guiding strategic decisions and maximizing potential across industries'
    },
    {
      image: '../../assets/images/backgrounds/welcome/precision_shield.jpg',
      title: 'Precision Shield',
      subtitle: 'Expert Risk Management Solutions',
      text: 'Navigate financial risks seamlessly with our expert team, combining numerical optimization and strategic foresight to fortify your organization\'s resilience'
    },
  ];

  currentSlideIndex = 0;
  private slideSubscription!: Subscription;
  
  text = "";
  count = 0;
  intervalId!: any;
  imageSrc ="";
  itemTittle = "";
  subtitle = "";

  ngAfterViewInit() {
    this.text = "";
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  startSlideShow() {
    const slideInterval = interval(6000); 
    this.slideSubscription = slideInterval.pipe(
      takeWhile(() => true) 
    ).subscribe(() => {
      this.updateSlide();
    });
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.loading = false;
    // }, 15000); 
    // window.addEventListener('scroll', this.handleScroll.bind(this));
    // this.startSlideShow();
  }

  ngOnDestroy() {
    this.slideSubscription.unsubscribe();
  }

  handleScroll() {
    const scrollPosition = window.pageYOffset;
    const header = document.getElementById('sticky-header');
    if(header != null){
      const stickyHeight = header.offsetHeight;
      this.isSticky = scrollPosition > stickyHeight ;
    }

  }
  updateSlide() {
    const currentSlide = this.slides[this.currentSlideIndex];

    // Update content
    this.imageSrc = currentSlide.image;
    this.textContent.nativeElement.textContent = currentSlide.text; 
    this.text = currentSlide.text;
    this.count = 0; 
    this.startTyping();

    // Update title and subtitle (if provided)
    this.itemTittle = currentSlide.title;
    this.subtitle = currentSlide.subtitle;

    this.currentSlideIndex++;
    if (this.currentSlideIndex >= this.slides.length) {
      this.currentSlideIndex = 0; 
    }
  }
  startTyping() {
    this.intervalId = setInterval(() => {
      
      this.typingText.nativeElement.textContent = this.text.slice(0, this.count);
      this.count++;
      if (this.count === this.text.length) {
        clearInterval(this.intervalId);
      }
    }, 50);
  }
}
