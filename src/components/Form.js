import React from 'react';
import { connect } from 'react-redux';

import * as FormActions from '../redux/actions/form';

import { FormElement, FlexEntry, Title, Label, Input, Textarea, Submit } from './styled';

class Form extends React.PureComponent {
  state = {
    question: '',
    answer: '',
  };

  handleChangeQuestion = (event) => this.setState({ question: event.target.value });
  handleChangeAnswer = (event) => this.setState({ answer: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();

    const { question, answer } = this.state;

    this.props.addQuestion({ question: { text: question, answer }});
  };

  render() {
    const { question, answer } = this.state;

    return (
      <FormElement onSubmit={this.handleSubmit}>
        <Title data-tooltip="Here you can create new questions and their answers.">
          Create a new Question
        </Title>
        <FlexEntry>
          <Label htmlFor="question">Question</Label>
        </FlexEntry>
        <FlexEntry>
          <Input
            id="question"
            name="question"
            type="text"
            placeholder="Enter here"
            className="form-control"
            value={question}
            onChange={this.handleChangeQuestion}
          />
        </FlexEntry>
        <FlexEntry>
          <Label htmlFor="answer">Answer</Label>   
        </FlexEntry>
        <FlexEntry>
          <Textarea
            id="answer"
            name="answer"
            type="text"
            placeholder="Your answer!"
            className="form-control"
            value={answer}
            onChange={this.handleChangeAnswer}
          />          
        </FlexEntry>
        <Submit className="form-submit btn btn-primary" />
      </FormElement>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (value) => dispatch(FormActions.addQuestion(value))
});

const ConnectedForm = connect(null, mapDispatchToProps)(Form);

export default ConnectedForm;
