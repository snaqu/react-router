import React from 'react';
import {
    List,
    ListItem,
    StyledLink,
} from './style';
// import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

const list = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin panel', path: '/admin' },
];

const Navigation = () => {
    const menu = list.map((item, index) => <ListItem key={index}><StyledLink to={item.path} active='yes' exact>{item.name}</StyledLink></ListItem>);
    return (
        <>
            <List>
                {menu}
            </List>
        </>
    );
}

export default Navigation;