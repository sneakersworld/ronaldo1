/**
 * actions/index.js
 *
 * @format
 * @flow
 */

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_SESSION = 'SET_SESSION';
export const SET_SHOE_LISTINGS = 'SET_SHOE_LISTINGS';
export const APPEND_SHOE_LISTINGS = 'APPEND_SHOE_LISTINGS';
export const NAVIGATE = 'Navigation/NAVIGATE';

function loginUser(data) {
  return {
    type: LOGIN_USER,
    data
  }
};

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
};

export function setSession(session) {
  return {
    type: SET_SESSION,
    session
  }
};

export function login(email, password) {
  return dispatch => {
    return api.login(email, password)
      .then(res => {
        if (res.status == 200) {
          const data = {
            email: email,
            session: {
              accessToken: res.headers.get('Set-Authorization'),
              refreshToken: res.headers.get('Set-Refresh-Token')
            }
          };
          dispatch(loginUser(data));
          return data;
        } else {
          // Handle errors
        }
      });
  };
};

// function currentLogin() {
//   return (dispatch, getState) => {
//     const session = getState().user.session;
//     return api.currentLogin(session.accessToken, session.refreshToken)
//       .then(res => {
//         console.log(res);
//       });
//   };
// };

// function logout() {
//   return (dispatch, getState) => {
//     const session = getState().session;
//     return api.logout(session.accessToken, session.refreshToken)
//       .then(res => {
//         console.log(res);
//         if (res.status == 200) {
//           dispatch(logoutUser());
//         }
//       });
//   };
// };
