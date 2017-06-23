const URL = "https://boiling-brook-94902.herokuapp.com/transactions"

export class AccountAdapter {
  static all(){
    return fetch(URL)
    .then(res => res.json())
  }
}
