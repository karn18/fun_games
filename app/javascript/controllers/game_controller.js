import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "card" ]

  connect () {
    console.log("connected flip controller")
    this.size = parseInt(this.data.get('cards'))
    this.cards = []
    for (let i = 0; i < this.size; i++)
      this.cards.push(this.getRandomInt(10))

    console.log(this.cards)
  }

  getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  showCard (event) {
    let parent = event.target.offsetParent
    let index = parent.getAttribute('data-game-index')
    let target = this.cardTargets[index]
    target.querySelector(".card__back").innerText = this.cards[index]
  }
}
