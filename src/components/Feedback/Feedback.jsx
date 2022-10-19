import { Component } from 'react';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  setGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  setNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  setBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };
  render() {
    return (
      <>
        <h2>Please leave feadback</h2>
        <div>
          <button onClick={this.setGood} type="button">
            Good
          </button>
          <button onClick={this.setNeutral} type="button">
            Neutral
          </button>
          <button onClick={this.setBad} type="button">
            Bad
          </button>
        </div>
        <div>
          <h3>Statistics</h3>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p> Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback:
            {this.countPositiveFeedbackPercentage() || 0}%
          </p>
        </div>
      </>
    );
  }
}
