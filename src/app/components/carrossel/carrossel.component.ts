import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import type { CarouselItem, CarouselInterface } from 'flowbite';
import { initFlowbite, Carousel } from 'flowbite';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
})
export class CarrosselComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  title = 'carrossel';
  ngOnInit(): void {
    initFlowbite();

    const carouselElement: HTMLElement =
      this.el.nativeElement.querySelector('#carousel-example');

    const prevButton = this.el.nativeElement.querySelector(
      '#data-carousel-prev'
    );
    let isButtonPrevDisable = false;

    const nextButton = this.el.nativeElement.querySelector(
      '#data-carousel-next'
    );
    let isButtonNextDisable = false;

    const items: CarouselItem[] = [
      {
        position: 0,
        el: this.el.nativeElement.querySelector('#carousel-item-1'),
      },
      {
        position: 1,
        el: this.el.nativeElement.querySelector('#carousel-item-2'),
      },
      {
        position: 2,
        el: this.el.nativeElement.querySelector('#carousel-item-3'),
      },
      {
        position: 3,
        el: this.el.nativeElement.querySelector('#carousel-item-4'),
      },
    ];

    const carousel: CarouselInterface = new Carousel(carouselElement, items);

    prevButton.addEventListener('click', () => {
      if (!isButtonPrevDisable) {
        carousel.prev();
        isButtonPrevDisable = true;

        setTimeout(() => {
          isButtonPrevDisable = false;
        }, 700);
      }
    });

    nextButton.addEventListener('click', () => {
      if (!isButtonNextDisable) {
        carousel.next();
        isButtonNextDisable = true;

        setTimeout(() => {
          isButtonNextDisable = false;
        }, 700);
      }
    });

    carousel.cycle();
  }
}
