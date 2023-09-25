import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre: string = "";
  clave: string = "";

  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) { }

  onSubmitLogin() {
    this.authService.loginUser(this.nombre, this.clave).subscribe((result: any) => {
      if(result) {
        this.router.navigate(['/panel']);
      } else {
        this.router.navigate(['/ingresar']);
      }
    })
  }

}
