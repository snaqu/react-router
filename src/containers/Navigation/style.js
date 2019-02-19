import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;
export const ListItem = styled.li`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 300;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #013;
    }
    &.active {
        color: red;
        background-color: #013;
    }
`;