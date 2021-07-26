import { GET_TESTIMONIAL_BEGIN, GET_TESTIMONIAL_SUCCESS, GET_TESTIMONIAL_FAILED } from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  testimoni: [],
};

export const Testimonial = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_TESTIMONIAL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        asiaPic: payload,
        error: null,
      };
    case GET_TESTIMONIAL_FAILED:
      return {
        ...state,
        loading: false,
        error: error,
      };
  }
};
