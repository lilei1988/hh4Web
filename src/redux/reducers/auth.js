import {POST_AUTH_REQUEST, POST_AUTH_SUCCESS, POST_AUTH_FAIL,LOGOUT} from '../actions/auth';

const initState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  errorMsg: ''
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case POST_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case POST_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.token
      }
    case POST_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: '请求错误'
      }
      case LOGOUT:
      return {
        ...state,
        token: null
      }
    default:
      return state;
  }
}