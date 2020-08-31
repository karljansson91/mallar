import React, { useContext } from 'react';
import Education from './Education';
import { EducationStateContext, EducationDispatchContext } from 'context/education'
import { createEducation } from 'api'
import Button from './Button'


const Educations = ({cvId}) => {
    const state = useContext(EducationStateContext)
    const dipatch = useContext(EducationDispatchContext)
    const handleSubmit = async (_) => {
        const data = await createEducation(cvId)
        dipatch({
            type: 'add',
            education_id: data.education_id
        })
    }
    
    return (
        <React.Fragment>
            {state.map((education, index)=>
                <Education
                    education={education}
                    index={index}
                    key={education.education_id}
                />
            )}
            <Button
                onClick={handleSubmit}
                label={'Lägg till utbildning'}
            />
        </React.Fragment>
    )
}



export default Educations