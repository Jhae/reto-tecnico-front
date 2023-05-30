export class AppUser {

  username :string
  roles: string[] = []

  hasSession:boolean

  hasAnyRole(expectedRoles :string[]): boolean{
    return this.roles.some( role => expectedRoles.some(expectedRole => expectedRole === role))
  }

  hasRole(expectedRole :string): boolean{
    return this.roles.some( role => role===expectedRole)
  }

}
