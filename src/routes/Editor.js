import React, { useState, useContext, useEffect } from 'react';
import Template from 'Templates/Simple';
import Form from 'components/Form';
import styled from 'styled-components';
import { UserDispatchContext } from 'context/user'
import { ExperienceDispatchContext } from 'context/experience'
import { SkillDispatchContext } from 'context/skill'
import { EducationDispatchContext } from 'context/education'
import { XCircle } from 'react-bootstrap-icons';
import { fetchCvData } from 'api'

const Half = styled.div`
    width: ${props => props.width };
    display: ${props => props.display};
    position: ${props => props.fixed ? 'fixed' : 'none'};
    right: ${props => props.fixed ? '0' : 'none'};
`

const ExitIcon = styled(XCircle)`
    margin-top: 24px;
    width: 24px;
    height: 24px;
`

const ExitText = styled.div`
    margin-left: 24px;
    margin-top: 24px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direct: row;
`

const displayModes = {
    SplitScreen: {
        formWidth: "50%",
        pdfWidth: "50%",
        formDisplay: "block",
        pdfDisplay: "block"
    },
    PDFView: {
        formWidth: "0%",
        pdfWidth: "100%",
        formDisplay: "none",
        pdfDisplay: "block"
    },
    FormView: {
        formWidth: "100%",
        pdfWidth: "0%",
        formDisplay: "block",
        pdfDisplay: "none",
    },

}


export default ({match}) => {
    const CvId = match.params.id
    const userDispatch = useContext(UserDispatchContext)
    const experienceDispatch = useContext(ExperienceDispatchContext)
    const educationDispatch = useContext(EducationDispatchContext)
    const skillDispatch = useContext(SkillDispatchContext)

    useEffect(() => {
        // Create an scoped async function in the hook
        const fetchData = async () => {
            const data = await fetchCvData(CvId)
            userDispatch({
                type: 'update',
                payload: {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: data.phone,
                    title: data.title,
                    profile: data.profile,
                }
            })
            experienceDispatch({
                type: 'update',
                payload: data.experience
            })
            educationDispatch({
                type: 'update',
                payload: data.education
            })
            skillDispatch({
                type: 'update',
                payload: data.skills
            })
            
        }
        // Execute the created function directly
        fetchData();
    });

    const [displayMode, setDisplayMode] = useState(displayModes.SplitScreen)

    return (
        <Wrapper>
            <Half
                width={displayMode.formWidth}
                display={displayMode.formDisplay}
            >
                <ExitText>Tillbaka</ExitText>
                <Form cvId={CvId}/>
            </Half>
            <Half
                width={displayMode.pdfWidth}
                display={displayMode.pdfDisplay}
                fixed={true}
            >
                <Template/>
            </Half>
        </Wrapper>
    )
}