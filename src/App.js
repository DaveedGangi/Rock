import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    conditionSatisfying: false,
    imageShownOnComparisonOne: '',
    opponentData: '',
    yourId: '',
    shownContent: '',
  }

  StoreButton = event => {
    const opponentSide = choicesList[Math.floor(Math.random() * 3)].id
    const {score} = this.state

    if (event.target.id === opponentSide) {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
      })
    } else if (event.target.id === 'PAPER' && opponentSide === 'ROCK') {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
        score: score + 1,
      })
    } else if (event.target.id === 'SCISSORS' && opponentSide === 'ROCK') {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
        score: score - 1,
      })
    } else if (event.target.id === 'ROCK' && opponentSide === 'PAPER') {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
        score: score - 1,
      })
    } else if (event.target.id === 'SCISSORS' && opponentSide === 'PAPER') {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
        score: score + 1,
      })
    } else if (event.target.id === 'ROCK' && opponentSide === 'SCISSORS') {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
        score: score + 1,
      })
    } else if (event.target.id === 'PAPER' && opponentSide === 'SCISSORS') {
      this.setState({
        conditionSatisfying: true,
        imageShownOnComparisonOne: event.target.src,
        opponentData: opponentSide,
        yourId: event.target.id,
        score: score - 1,
      })
    }

    console.log(event.target.id)
  }

  changeToPlayAgain = () => {
    this.setState({
      conditionSatisfying: false,
    })
  }

  /*
    
    shownResultPage = () => {
    const {yourId, opponentData} = this.state

    if (yourId === opponentData) {
      this.setState(prevState => ({score: prevState.score}))
    } else if (yourId === 'PAPER' && opponentData === 'ROCK') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (yourId === 'SCISSORS' && opponentData === 'ROCK') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (yourId === 'ROCK' && opponentData === 'PAPER') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (yourId === 'SCISSORS' && opponentData === 'PAPER') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (yourId === 'ROCK' && opponentData === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (yourId === 'PAPER' && opponentData === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

*/

  shownResultPageRank = () => {
    const {yourId, opponentData} = this.state
    let result = ''
    if (yourId === opponentData) {
      result = 'IT IS DRAW'
    } else if (yourId === 'PAPER' && opponentData === 'ROCK') {
      result = 'YOU WON'
    } else if (yourId === 'SCISSORS' && opponentData === 'ROCK') {
      result = 'YOU LOSE'
    } else if (yourId === 'ROCK' && opponentData === 'PAPER') {
      result = 'YOU LOSE'
    } else if (yourId === 'SCISSORS' && opponentData === 'PAPER') {
      result = 'YOU WON'
    } else if (yourId === 'ROCK' && opponentData === 'SCISSORS') {
      result = 'YOU WON'
    } else if (yourId === 'PAPER' && opponentData === 'SCISSORS') {
      result = 'YOU LOSE'
    }

    return result
  }

  render() {
    const {
      score,
      conditionSatisfying,
      imageShownOnComparisonOne,
      opponentData,
      shownContent,
    } = this.state
    console.log(`ShownContent:${shownContent}`)
    console.log(`oppnonent ${opponentData}`)
    console.log(`score:${score}`)

    const imageOpponent = choicesList.find(each => each.id === opponentData)
    console.log(imageOpponent)

    return (
      <div className="Bg">
        <div className="Div">
          <div>
            <h1 className="BreeSerif">Rock Paper Scissors</h1>
          </div>
          <div>
            <div className="ScoreCard">
              <p>Score</p>
              <p className="score">{score}</p>
            </div>
          </div>
        </div>

        {conditionSatisfying ? (
          <div className="resultsContains">
            <div className="resultContains">
              <div>
                <h1 className="YOU">YOU</h1>

                <img
                  className="ImageCard"
                  src={imageShownOnComparisonOne}
                  alt="your choice"
                />
              </div>
              <div>
                <h1 className="OPPONENT">OPPONENT</h1>
                <img
                  className="ImageCard"
                  src={imageOpponent.imageUrl}
                  alt="opponent choice"
                />
              </div>
            </div>

            <div className="PlayAgain">
              <p className="result-shown">{this.shownResultPageRank()}</p>
              <button
                className="PlayAgainButton"
                onClick={this.changeToPlayAgain}
                type="button"
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          <div className="bgButton">
            <div className="buttonCards">
              {choicesList.map(each => (
                <button
                  data-testid={`${each.id.toLowerCase()}Button`}
                  key={each.id}
                  id={each.id}
                  onClick={this.StoreButton}
                  className="CardImageButtons"
                  type="button"
                >
                  <div>
                    <img
                      id={each.id}
                      className="ImageCards"
                      src={each.imageUrl}
                      alt={each.id}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="buttonRules">
          <Popup
            trigger={
              <button className="RulesButton" type="button">
                RULES
              </button>
            }
            modal
          >
            {close => (
              <div>
                <div className="buttonClose">
                  <button className="ClosingLogo" type="button" onClick={close}>
                    <RiCloseLine />
                    {/* */}
                  </button>
                </div>
                <div className="ShownImageBg">
                  <div>
                    <img
                      className="ShownImage"
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
