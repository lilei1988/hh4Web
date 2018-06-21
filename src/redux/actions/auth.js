export const POST_AUTH_REQUEST = "auth/POST_AUTH_REQUEST";
export const POST_AUTH_SUCCESS = "auth/POST_AUTH_SUCCESS";
export const POST_AUTH_FAIL = "auth/POST_AUTH_FAIL";
export const LOGOUT = "auth/LOGOUT";

function postAUTHRequest() {
  return {type: POST_AUTH_REQUEST}
}

function postAUTHSuccess(token) {
  localStorage.setItem('token',token);
  return {type: POST_AUTH_SUCCESS, token: token}
}

function postAUTHFail() {
  return {type: POST_AUTH_FAIL}
}

export function postAUTH(data = {}) {
  return function (dispatch) {
    dispatch(postAUTHRequest());
    return fetch('/api/user.json', data).then((response => {
      return response.json()
    })).then((json) => {
      setTimeout(() => {
        dispatch(postAUTHSuccess('token'));
      }, 1000);

    }).catch(() => {
      dispatch(postAUTHFail());
    })
  }
}

export function logout(){
  localStorage.removeItem("token");
  return {type: LOGOUT}
}
