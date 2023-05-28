export class ExchangeHistoryResponse {
  id :string
  originAmount :number
  destinyAmount :number
  exchangeRate :number
  operationDate :string
  destinyCurrency :Currency
  originCurrency :Currency
  user: User
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
class User{
  id :string
  username :string
  email :string
  name :string
  lastName :string
  enabled :boolean
  roles :string[]
}
