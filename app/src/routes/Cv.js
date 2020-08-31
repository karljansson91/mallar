import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FilePlus } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { fetchCvs, createCv } from 'api';


const Wrapper = styled.div`
    background-color: #F6F6F2;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
`

const CvBoard = styled.div`
    width: 80%;
    background-color: white;
    padding: 32px;
`

const CardWrapper = styled.div`
    padding: 16px 0px;
    display: flex;
    flex-direction: row;
`


const CvCard = styled.div`
    width: 270px;
    height: 400px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color};
    border-radius: 10px; 
    margin: 0px 12px;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        background-color: #C2EDCE;
        cursor: pointer;
    }
`

const Plus = styled(FilePlus)`
    width: 90px;
    height: auto;
`

const PreviewWrapper = styled.span`
    text-align: center;
`

const Preview = ({cvInfo}) => {
    return (
        <PreviewWrapper>
            {cvInfo.firstName + " " + cvInfo.lastName}
            <br/>
            {cvInfo.title}
        </PreviewWrapper>
    )
}

export default () => {
    const [cvs, setCvs ] = useState([])
    const history = useHistory()

    useEffect(() => {
        // Create an scoped async function in the hook
        const fetchData = async () => {
            const data = await fetchCvs()
            setCvs(data)
        }

        fetchData();
    }, []);

    const addCv = async () => {
        await createCv()
    }

    const editCv = (CvId) => {
        history.push(`cv/edit/${CvId}`)
    }
 
    return (
        <Wrapper>
            <CvBoard>
                <h4>Dina CV</h4>
                <CardWrapper>
                    <CvCard color="#BADFE7" onClick={addCv}>
                        <Plus fill={"white"}/>
                        Skapa nytt cv
                    </CvCard>
                    {cvs.map((cv) => 
                        <CvCard key={cv.cv_id} color="#6FB3B8" onClick={() => editCv(cv.cv_id)}>
                            <Preview cvInfo={cv}/>
                        </CvCard>
                    )}
                </CardWrapper>
            </CvBoard>
        </Wrapper>
    )
}