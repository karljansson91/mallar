import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { EducationDispatchContext } from 'context/education'
import styled from 'styled-components';
import { Trash, ArrowUp, ArrowDown } from 'react-bootstrap-icons';
import { FormLabel } from './Form';
import Collapse from 'react-bootstrap/Collapse'
import { updateEducation, deleteEducation } from 'api'

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

const Education = ({education, index}) => {
    const {school, degree, start_date, end_date, education_id } = education
    let title = school + ( degree ? ' - ' + degree : '')
    let typingTimer = null;
    const [ displayInfo, setDisplayInfo ] = useState(true)
    const dipatch = useContext(EducationDispatchContext)

    const onChange = ( type ) => async ( event) => {
        const value = event.currentTarget.value

        await updateEducation({
            [type]: value,
            education_id: education_id,
        })
        dipatch({
            type: 'field',
            index: index,
            fieldName: type,
            payload: value,
        })
    }

    const onDelete = async (event) => {
        await deleteEducation(education_id)
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

    return (
        <CardWrapper>
            <TitleWrapper onClick={() =>setDisplayInfo(!displayInfo)}>
                <Title>{title || ''}</Title>
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
                        <Form.Group as={Col} controlId={`school-${education_id}`}>
                            <FormLabel>Skola</FormLabel>
                            <Form.Control onBlur={onChange("school")} defaultValue={school}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId={`degree-${education_id}`}>
                            <FormLabel>Examen</FormLabel>
                            <Form.Control type="text" onBlur={onChange("degree")} defaultValue={degree}/>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId={`start_date-${education_id}`}>
                            <FormLabel>Start datum</FormLabel>
                            <Form.Control onBlur={onChange("start_date")} type="date" defaultValue={start_date}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId={`end_date-${education_id}`}>
                            <FormLabel>Slut datum</FormLabel>
                            <Form.Control onBlur={onChange("end_date")} type="date" defaultValue={end_date}/>
                        </Form.Group>
                    </Form.Row>
                </div>
            </Collapse>
        </CardWrapper>
    )
}



export default Education