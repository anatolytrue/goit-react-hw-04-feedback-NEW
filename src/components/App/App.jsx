import { useState } from "react";
import { Container } from "./App.styled";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";



export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (e) => {

    const type = e.currentTarget.name;
    const updateFeedback = {
      good: () => setGood((prevGood) => prevGood + 1),
      neutral: () => setNeutral((prevNeutral) => prevNeutral + 1),
      bad: () => setBad((prevBad) => prevBad + 1),
    }

    updateFeedback[type]()
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0
  }

    return (
      <Container>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad } }
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
      
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    )
  }