import React, { useContext } from 'react';
import Experience from './Experience';
import { ExperienceStateContext, ExperienceDispatchContext } from 'context/experience'
import { createExperience } from 'api'
import Button from './Button'


const Experiences = ({cvId}) => {
    const state = useContext(ExperienceStateContext)
    const dipatch = useContext(ExperienceDispatchContext)
    const handleSubmit = async (_) => {
        const data = await createExperience(cvId)
        dipatch({
            type: 'add',
            experience_id: data.experience_id
        })
    };

    return (
        <React.Fragment>
            {state.map((experience, index)=>
                <Experience
                    experience={experience}
                    index={index}
                    key={experience.experience_id}
                />
            )}
            <Button
                onClick={handleSubmit}
                label={'Lägg till erfarenhet'}
            />
        </React.Fragment>
    )
}



export default Experiences