import React, { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { ExperienceDispatchContext } from 'context/experience'
import styled from 'styled-components'
import { Trash, ArrowUp, ArrowDown } from 'react-bootstrap-icons'
import { FormLabel } from './Form'
import Collapse from 'react-bootstrap/Collapse'
import { updateExperience, deleteExperience} from 'api'

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const CardWrapper = styled.div`
    margin-bottom: 18px;
    border:1px solid #ced4da;
    border-radius: 5px;
    padding: 0px 18px;
`

const Title = styled.span`
    font-weight: bold;
    color: #B2B8BE;
`

const DeleteIcon = styled(Trash)`
    width: 24px;
    height: 24px;
    margin: 10px;
`

const ArrowUpIcon = styled(ArrowUp)`
    width: 24px;
    height: 24px;
    margin: 10px;
`

const ArrowDownIcon = styled(ArrowDown)`
    width: 24px;
    height: 24px;
    margin: 10px;
`

const Experience = ({index, experience}) => {
    const {title, employer, start_date, end_date, description, experience_id} = experience
    let expTitle = employer + ( title ? ' - ' + title : '')
    let typingTimer = null;
    const [ displayInfo, setDisplayInfo ] = useState(true)
    const dipatch = useContext(ExperienceDispatchContext)

    const onChange = (type) => async (event) => {
        const value = event.currentTarget.value
        await updateExperience({
            [type]: value,
            experience_id: experience_id,
        })
        dipatch({
            type: 'field',
            index: index,
            fieldName: type,
            payload: value
        })
    }

    const onDelete = async (_) => {
        await deleteExperience(experience_id)
        dipatch({
            type: 'delete',
            index: index,
        })
    }

    useEffect(() => {
        return function cleanup() {
            clearTimeout(typingTimer);
        };
    });

    const onChangeTimeout = (type) =>(event) => {
        const val = event.target.value;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(async () => {
            if (val) {
                await updateExperience({
                    [type]: val,
                    experience_id: experience_id,
                })
                dipatch({
                    type: 'field',
                    index: index,
                    fieldName: type,
                    payload: val,
                })
            }
        }, 3000);
    }

    return (
        <CardWrapper>
            <TitleWrapper onClick={() =>setDisplayInfo(!displayInfo)}>
                <Title>{expTitle || ''}</Title>
                <div>
                    {displayInfo ? 
                        <ArrowUpIcon fill={'#B2B8BE'}/> :
                        <ArrowDownIcon  fill={'#B2B8BE'}/>
                    }
                    <DeleteIcon onClick={onDelete}  fill={'#B2B8BE'}/>
                </div>
            </TitleWrapper>
            <Collapse in={displayInfo}>
                <div>
                    <Form.Row>
                        <Form.Group as={Col} controlId={`employer-${experience_id}`}>
                            <FormLabel>Arbetsgivare</FormLabel>
                            <Form.Control onBlur={onChange("employer")} defaultValue={employer}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId={`title-${experience_id}`}>
                            <FormLabel>Titel</FormLabel>
                            <Form.Control type="text" onBlur={onChange("title")} defaultValue={title}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId={`start_date-${experience_id}`}>
                            <FormLabel>Start</FormLabel>
                            <Form.Control onBlur={onChange("start_date")} type="date" defaultValue={start_date}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId={`end_date-${experience_id}`}>
                            <FormLabel>Slut</FormLabel>
                            <Form.Control onBlur={onChange("end_date")} type="date" defaultValue={end_date}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId={`description-${experience_id}`}>
                        <FormLabel>Beskrivning</FormLabel>
                        <Form.Control onChange={onChangeTimeout("description")} as="textarea" rows="4" defaultValue={description}/>
                    </Form.Group>
                </div>
            </Collapse>
        </CardWrapper>
    )
}



export default Experience