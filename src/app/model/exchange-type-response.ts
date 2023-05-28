export class ExchangeTypeResponse {
  id: string
  rate: string
  originCurrency : Currency
  destinyCurrency: Currency
}

class Currency{
  id: string
  name: string
  countries: Country[]
}

class Country{
  id :string
  name :string
}
