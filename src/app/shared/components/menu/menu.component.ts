import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
   this.menuItems = [
      {
        label: 'Pipes from Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Date and Text',
            icon: 'pi pi-align-left',
            routerLink: 'basics'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No Commons',
            icon: 'pi pi-globe',
            routerLink: 'uncommons'
          }
        ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Element',
            icon: 'pi pi-cog',
          }
        ]
      }
   ];
  }
}
