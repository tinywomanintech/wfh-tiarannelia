import { GET_TESTIMONIAL_BEGIN, GET_TESTIMONIAL_SUCCESS, GET_TESTIMONIAL_FAILED } from './actionTypes';
import axios from 'axios';

export const GetTestimonial = () => (dispatch) => {
  dispatch({
    type: GET_TESTIMONIAL_BEGIN,
    loading: true,
    error: null,
  });

  const API_USER = `https://wknd-take-home-challenge-api.herokuapp.com/testimonial`;

  axios
    .get(API_USER)
    .then((res) => {
      console.log('testimoni', res);
      dispatch({
        type: GET_TESTIMONIAL_SUCCESS,
        loading: false,
        payload: res.data.results,
      });
    })

    .catch((err) =>
      dispatch({
        type: GET_TESTIMONIAL_FAILED,
        loading: false,
        error: err,
      })
    );
};
