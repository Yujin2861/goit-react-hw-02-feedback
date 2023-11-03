
/*

import { Component } from "react";

export class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    handlClickGood = (e) => {
        this.setState((prevState) => {
            return { good: prevState.good + 1}
        })
    }
    
    handlClickNeutral = (e) => {
        this.setState((prevState) => {
            return { neutral: prevState.neutral + 1}
         })
    }
    handlClickBad = (e) => {
        this.setState((prevState) => {
            return { bad: prevState.bad + 1}
         }) 
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositivFeedbackPersentage = () => {
        return this.state.good * 100 / this.countTotalFeedback()
        console.log(this.countPositivFeedbackPersentage())
    }

    render() { 
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositivFeedbackPersentage();
        return (
            <div className="section">
              <h2 className="title-feedback">Please leave feedback</h2>
                <div className="section-butons">
                  <button className="good" onClick={this.handlClickGood}>Good</button>
                  <button className="neutral" onClick={this.handlClickNeutral}>Neutral</button>
                  <button className="bad" onClick={this.handlClickBad}>Bad</button>
                </div>
              <h2 className="title-feedback">Statistics</h2>
        
                <ul className="feedback-list">
                  <li className="feedback-item">Good:<p>{good}</p></li>
                  <li className="feedback-item">Nuetral:<p>{neutral}</p></li>
                  <li className="feedback-item">Bad:<p>{bad}</p></li>
                  <li className="feedback-item">Total:<p>{total}</p></li>
                  <li className="feedback-item">Positive feedback:<p>{positivePercentage}%</p></li>
                </ul>
            </div>
          );
        };

    }
    */