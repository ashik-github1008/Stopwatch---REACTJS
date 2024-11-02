// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {runningTime: 0}

  formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`
  }

  onClickStartbtn = () => {
     
    this.timerID = setInterval(this.tick, 1000)
  }

  onClickStopbtn = () => { 
    clearInterval(this.timerID)
  }

  onClickResetbtn = () => {
    clearInterval(this.timerID)
    this.setState({
      runningTime: 0,
    })
  }

  tick = () => {
    this.setState(prevState => ({
      runningTime: prevState.runningTime + 1,
    }))
  }

  render() {
    const {runningTime} = this.state
    const displayTime = this.formatTime(runningTime)

    return (
      <div className="app-container">
        <h1 className="heading">StopWatch</h1>
        <div className="timer-container">
          <div className="icon-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer-running-text">{displayTime}</h1>
          <div className="btn-container">
            <button className="btn start-btn" onClick={this.onClickStartbtn}>
              Start
            </button>
            <button className="btn stop-btn" onClick={this.onClickStopbtn}>
              Stop
            </button>
            <button className="btn reset-btn" onClick={this.onClickResetbtn}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
