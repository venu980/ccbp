// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onClickMango = () => {
    this.setState(prevCount => ({mangoesCount: prevCount.mangoesCount + 1}))
  }

  onClickBanana = () => {
    this.setState(prevCount => ({bananasCount: prevCount.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="fruits-app-container">
        <div className="card-container">
          <h1 className="head-text">
            Bob ate<span className="count">{mangoesCount}</span>mangoes
            <span className="count">{bananasCount}</span>Bananas
          </h1>
          <div className="bottom-container">
            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image "
                alt="mango"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="fruits-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image "
                alt="banana"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
