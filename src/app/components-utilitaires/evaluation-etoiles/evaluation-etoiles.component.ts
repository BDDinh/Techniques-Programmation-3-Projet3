import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-etoiles',
  templateUrl: './evaluation-etoiles.component.html',
  styleUrls: ['./evaluation-etoiles.component.css']
})
export class EvaluationEtoilesComponent implements OnInit {

  private readonly MAX_NUMBER_OF_STARS = 5;

  @Input()
  rating = 0;

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
// Source de l'exemple : https://betterprogramming.pub/how-to-create-a-star-rating-component-in-angular-ff32234ea531