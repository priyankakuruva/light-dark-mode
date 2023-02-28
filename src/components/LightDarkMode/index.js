// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isTheme: true,
  }

  onClickBtn = () => {
    this.setState(prevState => ({isTheme: !prevState.isTheme}))
  }

  render() {
    const {isTheme} = this.state
    const bgColor = isTheme ? 'light' : 'dark'
    const text = isTheme ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="background">
        <div className={`container ${bgColor}`}>
          <h1>Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onClickBtn}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
