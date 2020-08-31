import React, {useContext, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import { UserDispatchContext, UserStateContext } from 'context/user'
import { updateCV } from 'api'


const Summary = ({cvId}) => {
    let typingTimer = null;
    const userDispatch = useContext(UserDispatchContext)
    const userState = useContext(UserStateContext)


    useEffect(() => {
        return function cleanup() {
            clearTimeout(typingTimer);
        };
    });

    const onChange = (event) => {
        const val = event.target.value;
        const id = event.target.id;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(async () => {
            if (val) {
                userDispatch({
                    type: 'field',
                    fieldName: id,
                    payload: val,
                })
                await updateCV({
                    type: 'userInfo',
                    [id]: val,
                    cv_id: cvId,
                })
            }
        }, 3000);
    }

    return (
        <Form.Group controlId="profile">
            <Form.Text className="text-muted">Beskriv din kompetens och markera dina upplevelser. Beskriv hur du arbetar i projekt och vad dina kollegor säger om dig.</Form.Text>
            <Form.Control as="textarea" onChange={onChange} rows="7" defaultValue={userState.profile}/>
        </Form.Group>
    )
}




export default Summary