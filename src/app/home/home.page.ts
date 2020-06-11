import { Component, OnInit, ViewChildren } from "@angular/core";
import { IonSlides } from "@ionic/angular";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChildren("mySlider") slider: IonSlides;
  sliderOpts = {
    slideShadows: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5,
    },
  };

  constructor() {}

}
