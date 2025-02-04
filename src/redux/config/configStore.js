// 중앙 데이터 관리소 store 설정
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import currentuser from '../modules/currentuser';

const rootReducer = combineReducers({
  // modules key: value
  currentuser
});

// 리듀서를 가져와야 함

const store = createStore(rootReducer); // reducer의 묶음

export default store;
