import React from 'react';
import { connect } from 'react-redux';

import * as FormActions from '../redux/actions/form';

import Question from './Question';
import { QuestionsWrapper, FlexEntry, Title, Button } from './styled';

class Questions extends React.PureComponent {
  static defaultProps = {
    questions: []
  };

  onSortQuestions = () => this.props.sortQuestions();
  onRemoveQuestions = () => this.props.removeQuestions();

  render() {
    const { questions } = this.props;

    if (questions.length === 0) return (
      <Title className="alert alert-danger">
        No questions yet :(
      </Title>
    );

    return (
      <QuestionsWrapper>
        <Title data-tooltip="Here you can find the created questions and their answers.">
          Created questions
        </Title>
        {questions.map((question, index) => <Question key={index} question={question} />)}
        <FlexEntry>
          <Button className="btn btn-primary" onClick={this.onSortQuestions}>Sort Questions</Button>
          <Button className="btn btn-danger" onClick={this.onRemoveQuestions}>Remove Questions</Button>
        </FlexEntry>
      </QuestionsWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  sortQuestions: () => dispatch(FormActions.sortQuestions()),
  removeQuestions: () => dispatch(FormActions.removeQuestions()),
})

const ConnectedQuestions = connect(mapStateToProps, mapDispatchToProps)(Questions);

export default ConnectedQuestions;
