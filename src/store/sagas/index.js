import { all, takeLatest } from "redux-saga/effects";
import { Types as UserTypes } from "store/ducks/user";
import { doLogin, doLogout, doRegister } from "./user";

export default function* root() {
  yield all([
    takeLatest(UserTypes.DO_REGISTER, doRegister),
    takeLatest(UserTypes.DO_LOGIN, doLogin),
    takeLatest(UserTypes.DO_LOGOUT, doLogout)
  ]);
}
