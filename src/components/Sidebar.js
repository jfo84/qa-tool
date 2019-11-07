import React from 'react';
import { connect } from 'react-redux';

import { SidebarWrapper } from './styled';

class Sidebar extends React.PureComponent {
  static defaultProps = {
    questions: []
  };

  questionsText = () => {
    const { questions } = this.props;

    if (questions.length === 0 ) {
      return 'no questions';
    } else if (questions.length === 1) {
      return '1 question';
    } else {
      return `${questions.length} questions`;
    }
  };

  render() {
    return (
      <SidebarWrapper>
        Here you can find {this.questionsText()}. Feel free to create your own questions.
      </SidebarWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  questions: state.questions
});

const ConnectedSidebar = connect(mapStateToProps)(Sidebar);

export default ConnectedSidebar;