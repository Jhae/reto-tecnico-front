import { ROLES } from "../util/roles-const"

export class AppUser {

  username :string
  roles: string[] = []

  hasSession:boolean

  public isAdmin():boolean{
    return this.hasRole(ROLES.ADMIN)
  }
  public isUser():boolean{
    return this.hasRole(ROLES.USER)
  }

  hasAnyRole(expectedRoles :string[]): boolean{
    return this.roles.some( role => expectedRoles.some(expectedRole => expectedRole === role))
  }

  hasRole(expectedRole :string): boolean{
    return this.roles.some( role => role===expectedRole)
  }

}
