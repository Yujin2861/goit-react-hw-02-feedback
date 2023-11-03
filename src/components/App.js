import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics.js';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.js';
import { Notification } from './Notification/Notification.js'; 
import { Section } from './Section/Section.js'; 

export class App extends Component {
state = {
      good:0,
      neutral: 0,
      bad: 0,
    };
  

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100 / this.countTotalFeedback()));
  };

  handleLeaveFeedback = event => {
   const {name} = event.target;
   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback} 
            />
            { total === 0 ? (
              <Notification message="There is no feedback"></Notification>) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedback}
            />)}
        </Section>
        
      </>  
    );
  }
}
