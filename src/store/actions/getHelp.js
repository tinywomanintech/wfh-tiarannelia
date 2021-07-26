import { GET_HELP_TIPS_BEGIN, GET_HELP_TIPS_SUCCESS, GET_HELP_TIPS_FAILED } from './actionTypes';
import axios from 'axios';

export const GetHelp = () => (dispatch) => {
  dispatch({
    type: GET_HELP_TIPS_BEGIN,
    loading: true,
    error: null,
  });

  const API_USER = `https://wknd-take-home-challenge-api.herokuapp.com/testimonial`;

  axios
    .get(API_USER)
    .then((res) => {
      console.log('help n tips', res);
      dispatch({
        type: GET_HELP_TIPS_SUCCESS,
        loading: false,
        payload: res.data,
      });
    })

    .catch((err) =>
      dispatch({
        type: GET_HELP_TIPS_FAILED,
        loading: false,
        error: err,
      })
    );
};
