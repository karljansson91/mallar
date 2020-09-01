import React from 'react';
import { useImmerReducer } from 'use-immer';

function cvReducer(draft, action) {
  switch (action.type) {
    case 'field': {
      draft[action.fieldName] = action.payload;
      return;
    }
    case 'update': {
      return {...action.payload};
    }
    default:
      return;
  }
}


const initialState = {
  first_name: '',
  last_nname: '',
  email: '',
  phone: '',
  title: '',
  profile: '',
};

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const UserContext = ({children}) => {
  const [state, dispatch] = useImmerReducer(cvReducer, initialState);
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
}

export { UserContext, UserDispatchContext, UserStateContext }