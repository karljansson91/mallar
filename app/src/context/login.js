import React from 'react';
import { useImmerReducer } from 'use-immer';

const loginReducer = (draft, action) => {
  switch (action.type) {
    case 'update': {
      draft.token = action.payload.token;
      draft.email = action.payload.email;
      return;
    }

    default:
      return;
  }
}


const initialState = {
    email: '',
    token: ''
}

const LoginStateContext = React.createContext();
const LoginDispatchContext = React.createContext();

const LoginContext = ({children}) => {
  const [state, dispatch] = useImmerReducer(loginReducer, initialState);
  return (
    <LoginStateContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
}

export { LoginContext, LoginStateContext, LoginDispatchContext }