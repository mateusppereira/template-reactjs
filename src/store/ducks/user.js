export const Types = {
  DO_LOGIN: "user/DO_LOGIN",
  DO_LOGOUT: "user/DO_LOGOUT",
  LOGIN_SUCCESS: "user/LOGIN_SUCCESS",
  FAILURE: "user/FAILURE",
};

const INITIAL_STATE = {
  auth: true,
  userLogged: null,
  error: null,
  language: "pt"
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DO_LOGIN:
      return {
        ...state,
        auth: false,
        loading: true
      };
    case Types.DO_LOGOUT:
      return {
        ...state,
        userLogged: null,
        auth: false
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        userLogged: action.payload.user,
        error: null,
        auth: true,
        loading: false
      };
    case Types.FAILURE:
      return {
        ...state,
        error: action.payload.error,
        auth: false,
        loading: false
      };
    default:
      return state;
  }
}

export const Actions = {
  doLogin: credentials => ({
    type: Types.DO_LOGIN,
    payload: credentials
  }),
  doLogout: () => ({
    type: Types.DO_LOGOUT
  }),
  loginSuccess: user => ({
    type: Types.LOGIN_SUCCESS,
    payload: {
      user
    }
  }),
  failure: error => ({
    type: Types.FAILURE,
    payload: {
      error
    }
  }),
};
