import styled from 'styled-components';

export const ListItem = styled.li`
    font-size: 20px;
    text-transform: capitalize;
    padding: 6px;
    a{
        color: #000;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;