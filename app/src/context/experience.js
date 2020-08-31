import React from 'react';
import { useImmerReducer } from 'use-immer';
import { v4 } from 'uuid';

function experienceReducer(draft, action) {
  switch (action.type) {
    case 'add': {
       draft.push({
            title: '',
            employer: '',
            start_date: '',
            end_date: '',
            description: '',
            competense: '',
            experience_id: action.experience_id
      });
      return;
    }
    case 'field': {
        draft[action.index][action.fieldName] = action.payload;
        draft[action.index].init = false
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


const initialState = [{
  title: '',
  employer: '',
  start_date: '',
  end_date: '',
  description: '',
  experience_id: v4()
}]

const ExperienceStateContext = React.createContext();
const ExperienceDispatchContext = React.createContext();

const ExperienceContext = ({children}) => {
  const [state, dispatch] = useImmerReducer(experienceReducer, initialState);
  return (
    <ExperienceStateContext.Provider value={state}>
      <ExperienceDispatchContext.Provider value={dispatch}>
        {children}
      </ExperienceDispatchContext.Provider>
    </ExperienceStateContext.Provider>
  );
}

export { ExperienceContext, ExperienceStateContext, ExperienceDispatchContext }