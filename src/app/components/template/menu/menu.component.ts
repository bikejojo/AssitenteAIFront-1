import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'template-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) {
  }

  protected onRedirectTicketPage = (): void => {
    this.router.navigate(['/tickets']);
  }

  onRedirectEmpresaPage() {
    this.router.navigate(['/empresas']);
  }
}
