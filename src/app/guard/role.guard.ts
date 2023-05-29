import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService)

  const expectedRoles:string[] = route.data['roles']
  const userRoles: string[] = authService.appUser.roles

  if ( !authService.isTokenValid() )
  {
      inject(Router).navigate(['sfasf'])
      return false
  }


  return userRoles.some(role => expectedRoles.some(expectedRole => expectedRole === role))
};
