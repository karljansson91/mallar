

import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LinkButton = styled(Link)`
    padding: 10px 20px;
    background-color: #0080FF;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
            text-decoration: none;
            color: white;
            background-color: #006bff;
        }
`

export { LinkButton }