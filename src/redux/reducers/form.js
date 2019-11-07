import * as constants from '../constants';

const initialState = { questions: [] };

const form = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case constants.ADD_QUESTION: {
      const { questions } = state;

      // Remove element by index
      const newQuestions = [ ...questions, payload.question ];

      return {
        ...state,
        questions: newQuestions
      };
    }

    case constants.REMOVE_QUESTION: {
      const { questions } = state;

      // Copy
      let newQuestions = JSON.parse(JSON.stringify(questions));
      // Remove element by index
      newQuestions = newQuestions.splice(payload.index, 1);

      return {
        ...state,
        questions: newQuestions
      };
    }

    case constants.REMOVE_QUESTIONS:
      return {
        ...state,
        questions: []
      };

    case constants.SORT_QUESTIONS: {
      const { questions } = state;
      
      // Copy
      let newQuestions = JSON.parse(JSON.stringify(questions));
      // Alphabetical sort by text
      newQuestions = newQuestions.sort((a, b) => {
        if (a.text < b.text) {
          return -1;
        }

        if (a.text > b.text) {
          return 1;
        }

        return 0;
      });

      return {
        ...state,
        questions: newQuestions
      };
    }

    default:
      return state;
  }
}

export default form;