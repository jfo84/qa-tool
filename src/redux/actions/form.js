import * as constants from '../constants';

export const addQuestion = (payload) => ({
  payload,
  type: constants.ADD_QUESTION
});

export const removeQuestion = (payload) => ({
  payload,
  type: constants.REMOVE_QUESTION
});

export const removeQuestions = () => ({
  type: constants.REMOVE_QUESTIONS
});

export const sortQuestions = () => ({
  type: constants.SORT_QUESTIONS
});