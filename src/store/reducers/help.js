import { GET_HELP_TIPS_BEGIN, GET_HELP_TIPS_SUCCESS, GET_HELP_TIPS_FAILED } from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  help: [],
};

export const HelpTips = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_HELP_TIPS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_HELP_TIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        asiaPic: payload,
        error: null,
      };
    case GET_HELP_TIPS_FAILED:
      return {
        ...state,
        loading: false,
        error: error,
      };
  }
};
