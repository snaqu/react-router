import React from 'react';
import AdminPage from '../Pages/AdminPage/index';
import ContactPage from '../Pages/ContactPage/index';
import ErrorPage from '../Pages/ErrorPage/index';
import HomePage from '../Pages/HomePage/index';
import ProductPage from '../Pages/ProductPage/index';
import ProductsListPage from '../Pages/ProductsListPage/index';
import AdminLogPage from '../Pages/AdminLogPage/index';
import { Switch, Route } from 'react-router-dom';
import { BlogContainer } from './style';

const Blog = () => {
    return (
        <BlogContainer>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/products" component={ProductsListPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/login" component={AdminLogPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BlogContainer>
    );
}

export default Blog;