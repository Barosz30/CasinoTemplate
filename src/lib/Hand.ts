import Card from "@/app/components/BlackjackGame/BlackjackTable/Card"
import Game from "@/app/components/BlackjackGame/BlackjackTable/Game"


export enum Status {
  Unknown,
  Won,
  Lost,
  Push,
}
export enum CountMethod {
  Soft,
  Hard,
}

class Hand {
  public game: Game
  public cards: Card[] = []
  public stood: boolean = false
  public played: boolean = false

  constructor(game: Game) {
    this.game = game
  }

  public dealCard(): void {
    if (this.game === null) {
      return
    }

    const card = this.game.shoe.getNextCard()
    if (card === undefined) {
      return
    }

    this.cards.push(card)
  }
}

export default Hand