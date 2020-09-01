import React from 'react';
import { useImmerReducer } from 'use-immer';

function skillReducer(draft, action) {
  switch (action.type) {
    case 'add': {
      draft.push(action.payload);
      return;
    }
    case 'delete': {
      draft.splice(action.index, 1)
      return;
    }
    case 'update': {
      return [...action.payload];
    }
    default:
      return;
  }
}


const initialState = []

const SkillStateContext = React.createContext();
const SkillDispatchContext = React.createContext();

const SkillContext = ({children}) => {
  const [state, dispatch] = useImmerReducer(skillReducer, initialState);
  return (
    <SkillStateContext.Provider value={state}>
      <SkillDispatchContext.Provider value={dispatch}>
        {children}
      </SkillDispatchContext.Provider>
    </SkillStateContext.Provider>
  );
}

export { SkillContext, SkillStateContext, SkillDispatchContext }