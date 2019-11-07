import React from 'react';

import Form from './Form';
import Questions from './Questions';
import Sidebar from './Sidebar';
import { RootWrapper, MainWrapper } from './styled';

class Root extends React.PureComponent {
  render() {
    return (
      <RootWrapper>
        <Sidebar />
        <MainWrapper>
          <Questions />
          <Form />
        </MainWrapper>
      </RootWrapper>
    );
  }
}

export default Root;