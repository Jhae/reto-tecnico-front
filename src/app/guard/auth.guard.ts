import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService)
  if ( !authService.isTokenValid() )
  {
    let router = inject(Router)
      //TODO
      //router.navigate(['/'])
      return false
  }

  return true;
};
