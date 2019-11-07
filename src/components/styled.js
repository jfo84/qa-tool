import styled from 'styled-components';

export const MainTitle = styled.h2`
  text-align: center;

  padding: 10px 0 10px 0;
`;

export const RootWrapper = styled.div`
  display: flex;
  justify-content: center;

  min-width: 768px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
  }

  padding: 0 20px 200px 20px;
`;

export const SidebarWrapper = styled.div`
  flex: 1;
  
  overflow-wrap: break-word;
  border-right: 1px solid black;
  padding: 10px 10px 10px 120px;
  text-align: right;

  @media (max-width: 768px) {
    align-self: flex-start;
    border-right: 0;
    border-bottom: 1px solid black;
    padding: 10px;
    text-align: left;
  }
`;

export const MainWrapper = styled.div`
  flex: 3;

  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export const QuestionsWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const QuestionWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin: 5px;

  border: 1px solid #D3D3D3;

  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 550px;
  }  
`;

export const QuestionText = styled.div`
  margin: 5px;
`;

export const AnswerText = styled.div`
  margin: 5px;
`;

export const FormElement = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const FlexEntry = styled.div`
  flex: 1;

  display: flex;
`;

export const Title = styled.h4`
  flex: 1;

  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 550px;
  }  
`;

export const Alert = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 550px;
  }  
`

export const Label = styled.label`
  margin: 5px;
`;

export const Input = styled.input`
  flex: 1;

  max-width: 500px;

  margin: 10px;

  @media (max-width: 768px) {
    max-width: 550px;
  }
`;

export const Submit = styled.input.attrs({ 
  type: 'submit',
  value: 'Create Question'
})`
  flex: 1;

  max-width: 150px;

  margin: 10px;
`;

export const Textarea = styled.textarea`
  flex: 1;

  max-width: 500px;

  margin: 10px;

  @media (max-width: 768px) {
    max-width: 550px;
  }  
`;

export const Button = styled.button`
  margin: 10px;
`;