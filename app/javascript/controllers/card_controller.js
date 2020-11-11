import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "element" ]

  connect () {
    console.log("connected flip controller")
    this.openned = this.data.get('openned') === false
  }

  // flip the card
  flip () {
    this.openned = !this.openned

    if (this.openned) {
      this.openCard()
    }
  }

  openCard () {
    this.elementTarget.classList.add('card--flip')
    setTimeout(() => {
      this.openned = !this.openned
      this.closeCard()
    }, 2000)
  }

  closeCard () {
    this.elementTarget.classList.remove('card--flip')
  }
}
