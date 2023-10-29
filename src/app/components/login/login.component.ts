import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from 'src/app/core/Models';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  public async checkAuth(){

    const check = this.authService.checkAuth(this.user.email, this.user.password);

    if(await check){
      this.router.navigate(['/home']);
    }
    else{
      alert("No existe el usuario");
    }
  }

  public navigateToRegister(){
    this.router.navigate(['/register']);
  }
}
