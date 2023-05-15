import Section from 'components/Section';
import React, { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOption from 'components/FeedbackOptions';
import PropTypes from 'prop-types';

class CounterFeedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positiveFeedback: this.props.positivePercentage,
  };

  hundelCountGood = () => {
    this.setState(praveState => {
      return { good: praveState.good + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  hundelCountNeutral = () => {
    this.setState(praveState => {
      return { neutral: praveState.neutral + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  hundelCountBad = () => {
    this.setState(praveState => {
      return { bad: praveState.bad + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(praveState => {
      return {
        total: (praveState.total =
          praveState.good + praveState.neutral + praveState.bad),
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(praveState => {
      return {
        positiveFeedback: Number(
          (praveState.positiveFeedback = (
            (100 / (praveState.good + praveState.neutral + praveState.bad)) *
            praveState.good
          ).toFixed(2))
        ),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <>
        <Section tittle="Please leave feedback"> 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          ></Statistics>
        </Section>
        <Section tittle="Statistics">
          <FeedbackOption
            onLeaveFeedbackGood={this.hundelCountGood}
            onLeaveFeedbackNeutral={this.hundelCountNeutral}
            onLeaveFeedbackBad={this.hundelCountBad}
          ></FeedbackOption>
        </Section>
      </>
    );
  }
}
export default CounterFeedback;

CounterFeedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
