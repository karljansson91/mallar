import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FormLabel } from './Form';
import { UserStateContext, UserDispatchContext } from 'context/user';
import { updateCV } from 'api'

const UserInfo = ({cvId}) => {
    const userDispatch = useContext(UserDispatchContext)
    const userState = useContext(UserStateContext)
    const onChange = async (event) => {
        const field = event.target.id
        const value = event.currentTarget.value
        await updateCV({
            type: 'userInfo',
            [field]: value,
            cv_id: cvId,
        })
        userDispatch({
            type: 'field',
            fieldName: field,
            payload: value,
        })
    }

    const {email, first_name, last_name, phone, title} = userState
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="email">
                    <FormLabel>Mail</FormLabel>
                    <Form.Control type="email" onBlur={onChange} defaultValue={email}/>
                </Form.Group>

                <Form.Group as={Col}>
                    <FormLabel>Välj fil</FormLabel>
                    <Form.File id="custom-file" label="Ladda upp foto" data-browse="Bläddra" custom onChange={onChange}/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="first_name">
                    <FormLabel>Förnamn</FormLabel>
                    <Form.Control onBlur={onChange} defaultValue={first_name}/>
                </Form.Group>

                <Form.Group as={Col} controlId="last_name">
                    <FormLabel>Efternamn</FormLabel>
                    <Form.Control onBlur={onChange} defaultValue={last_name}/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="title">
                    <FormLabel>Titel</FormLabel>
                    <Form.Control onBlur={onChange} defaultValue={title}/>
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <FormLabel>Telefonnummer</FormLabel>
                    <Form.Control onBlur={onChange} defaultValue={phone}/>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}



export default UserInfo