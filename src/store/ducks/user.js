export const Types = {
  SET_USER_LOGGED: "register/SET_USER_LOGGED",
  DO_REGISTER: "register/DO_REGISTER",
  REGISTER_SUCCESS: "register/REGISTER_SUCCESS",
  REGISTER_FAILURE: "register/REGISTER_FAILURE",
  DO_LOGIN: "login/DO_LOGIN",
  DO_LOGOUT: "login/DO_LOGOUT",
  LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
  FAILURE: "user/FAILURE",
  CLEAR_ERRORS: "user/CLEAR_ERRORS"
};

const INITIAL_STATE = {
  auth: false,
  userLogged: null,
  defaultWidgets: [
    {
      screenName: "Mapa",
      selected: true,
      routeName: "/map",
      name: "MAPA"
    }
  ],
  error: null,
  language: "pt"
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER_LOGGED:
    return {
      ...state,
      userLogged: action.payload.user,
      auth: true,
    };
    case Types.DO_LOGOUT:
      return {
        ...state,
        userLogged: null,
        auth: false
      };
    case Types.DO_REGISTER:
      return {
        ...state,
        loading: true
      };
    case Types.DO_LOGIN:
      return {
        ...state,
        auth: false,
        loading: true
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
    case Types.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
}

export const Actions = {
  setUserLogged: user => ({
    type: Types.SET_USER_LOGGED,
    payload: {
      user,
    }
  }),
  doLogout: () => ({
    type: Types.DO_LOGOUT
  }),
  doRegister: user => ({
    type: Types.DO_REGISTER,
    payload: {
      user
    }
  }),
  registerSuccess: data => ({
    type: Types.REGISTER_SUCCESS,
    payload: {
      data
    }
  }),
  doLogin: credentials => ({
    type: Types.DO_LOGIN,
    payload: credentials
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
  clearErrors: () => ({
    type: Types.CLEAR_ERRORS
  })
};
