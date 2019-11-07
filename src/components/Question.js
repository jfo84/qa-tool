import React from 'react';

import { QuestionWrapper, QuestionText, AnswerText } from './styled';

class Question extends React.PureComponent {
  state = {
    answerToggled: false
  };

  onClickQuestion = () => this.setState({ answerToggled: !this.state.answerToggled });

  render() {
    const { question } = this.props;
    const { answerToggled } = this.state;

    return (
      <QuestionWrapper>
        <QuestionText onClick={this.onClickQuestion}>{question.text}</QuestionText>
        {answerToggled && <AnswerText>{question.answer}</AnswerText>}
      </QuestionWrapper>
    );
  }
}

export default Question;
