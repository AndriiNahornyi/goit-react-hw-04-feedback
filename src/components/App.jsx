// import { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
// масив для створення кнопок
const options = ['good', 'neutral', 'bad'];
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //   onLeaveFeedback = option => {
  //     this.setState(prevState => {
  //       return {
  //         [option]: prevState[option] + 1,
  //       };
  //     });
  //   };
  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => {
          return prevGood + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
  // render() {
  return (
    <>
      <Section title={'Please leave feadback'}>
        <FeedbackOptions
          // варіанти реалізації на класах
          // options={Object.keys(this.state) or options = ["good, "neutral","bad"]}
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'No Feedback'}></Notification>
        )}
      </Section>
    </>
  );
  // }
};
