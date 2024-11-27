import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accuiel',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {
  images: string[] = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg'
  ];
  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 10000); // Change every 10 seconds
  }
}*/
