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
  }

  StoreButton = event => {
    this.setState({
      conditionSatisfying: true,
    })
    console.log(event.target.id)
  }

  changeToPlayAgain = () => {
    this.setState({conditionSatisfying: false})
  }

  render() {
    const {score, conditionSatisfying} = this.state

    return (
      <div className="Bg">
        <div className="Div">
          <div>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <div>
            <div className="ScoreCard">
              <p>Score</p>
              <h1>{score}</h1>
            </div>
          </div>
        </div>

        {conditionSatisfying ? (
          <div>
            <div className="resultContains">
              <div>
                <h1 className="YOU">YOU</h1>
                <img className="ImageCards" src="hdi" alt="notFound" />
              </div>
              <div>
                <h1 className="OPPONENT">OPPONENT</h1>
                <img
                  className="ImageCards"
                  src={choicesList[Math.floor(Math.random() * 3)].imageUrl}
                  alt="notFound"
                />
              </div>
            </div>

            <div className="PlayAgain">
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
          <div>
            {choicesList.map(each => (
              <button
                key={each.id}
                id={each.id}
                onClick={this.StoreButton}
                className="CardImageButtons"
                type="button"
              >
                <div>
                  <img
                    className="ImageCards"
                    src={each.imageUrl}
                    alt={each.imageUrl}
                  />
                </div>
              </button>
            ))}
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
                  <img
                    className="ShownImage"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
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
