import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isRecipesRoute = false;
  isShoppingListRoute = false;
  collapsed: boolean = true;
}
