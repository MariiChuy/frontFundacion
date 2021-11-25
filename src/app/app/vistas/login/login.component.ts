import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;
  isAdmin = false;

  constructor( private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
   /*this.isAdmin = this.tokenService.isAdmin();*/

  }
  onLogin(): void{
    /*this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },
      err => {
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );*/
  }






}
