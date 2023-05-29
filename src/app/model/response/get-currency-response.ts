export class GetCurrencyResponse {

    id: string
    name: string
    countries: Country[]
    countriesNames: string[]

}

class Country{

  id: string
  name: string
}
