import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})

// what a routeguard does is prevents people from entering any paths to our components even when they don't have authorization
// we use a canActivate method to check to see whether the user is logged in to allow them access to the component
// or throw an error an return them home
export class AuthGuard implements  CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertify.error('You must be logged in to have access');
    this.router.navigate(['/home']);
    return false;
  }

}
