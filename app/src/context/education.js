import React from 'react';
import { useImmerReducer } from 'use-immer';

function educationReducer(draft, action) {
  switch (action.type) {
    case 'add': {
       draft.push({
            school: '',
            degree: '',
            start_date: '',
            end_date: '',
            description: '',
            education_id: action.education_id
      });
      return;
    }
    case 'field': {
        draft[action.index][action.fieldName] = action.payload;
        draft[action.index].init = false
        return;
    }
    case 'update': {
      return [...action.payload];
    }
    case 'delete': {
      draft.splice(action.index, 1)
      return;
    }
    default:
      return;
  }
}


const initialState = []

const EducationStateContext = React.createContext();
const EducationDispatchContext = React.createContext();

const EducationContext = ({children}) => {
  const [state, dispatch] = useImmerReducer(educationReducer, initialState);
  return (
    <EducationStateContext.Provider value={state}>
      <EducationDispatchContext.Provider value={dispatch}>
        {children}
      </EducationDispatchContext.Provider>
    </EducationStateContext.Provider>
  );
}

export { EducationContext, EducationStateContext, EducationDispatchContext }