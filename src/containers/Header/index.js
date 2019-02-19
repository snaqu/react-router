import React from 'react';
import {
    Image
} from './style';
import { Route, Switch } from 'react-router-dom';
import img1 from '../../assets/bg1.jpg';
import img2 from '../../assets/bg2.jpg';
import img3 from '../../assets/bg3.jpg';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact render={() => (
                    <Image src={img1} alt="city" />
                )} />
                <Route path='/products' exact render={() => (
                    <Image src={img1} alt="city" />
                )} />
                <Route path='/contact' exact render={() => (
                    <Image src={img2} alt="city" />
                )} />
                <Route path='/admin' exact render={() => (
                    <Image src={img3} alt="city" />
                )} />
                <Route render={() => (
                    <Image src={img3} alt="city" />
                )} />
            </Switch>
        </>
    );
}

export default Header;