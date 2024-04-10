import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'john doe';
  public nameUpper: string = 'JOHN DOE';
  public nameTitle: string = 'joHN dOe';

  public customDate: Date = new Date();
}
