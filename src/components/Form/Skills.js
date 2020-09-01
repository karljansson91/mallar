import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SkillStateContext, SkillDispatchContext } from 'context/skill'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Backspace } from 'react-bootstrap-icons';
import { addSkill, deleteSkill } from 'api'


const SkillWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`

const DeleteIcon = styled(Backspace)`
    margin-left: 5px;
`

const SkillCard = styled.div`
    background-color: #557A95;
    display: flex;
    padding: 5px 10px;
    margin: 5px 5px 5px 0px;
    color: white;
    align-items: center;
    border-radius: 10px;
`

const Skill = ({cvId, skill, index}) => {
    const dipatch = useContext(SkillDispatchContext)

    const onDelete = async (_) => {
        await deleteSkill(cvId, skill)
        dipatch({
            type: 'delete',
            index: index,
        })
    }
    return (
        <SkillCard>
            <span>{skill}</span>
            <DeleteIcon fill={'white'} onClick={onDelete}/>
        </SkillCard>
    )
}

const Skills = ({cvId}) => {
    const state = useContext(SkillStateContext)
    const dipatch = useContext(SkillDispatchContext)
    const [input, setInput] = useState('')
    console.log(state)
    const onClick = async (_) => {
        await addSkill(cvId, input)
        dipatch({
            type: 'add',
            payload: input
        })
        setInput('')
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await addSkill(cvId, input)
            dipatch({
                type: 'add',
                payload: input
            })
            setInput('')
        }
      }

    return (
        <React.Fragment>
            <InputGroup onKeyDown={handleKeyDown}>
                <Form.Control
                    aria-describedby="basic-addon2"
                    onChange={(event) => setInput(event.target.value)}
                    value={input}
                    />
                <InputGroup.Append>
                    <Button onClick={onClick} variant="outline-secondary">Lägg till kompetens</Button>
                </InputGroup.Append>
            </InputGroup>
            <SkillWrapper>
                {state.map((value, index)=>
                    <Skill
                        key={value}
                        skill={value}
                        cvId={cvId}
                        index={index}
                    />
                )}
            </SkillWrapper>
        </React.Fragment>
    )
}



export default Skills