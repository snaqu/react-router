import React from 'react';
import { ArticleContainer } from './style';

const Article = ({ title, author, text }) => {
    return (
        <ArticleContainer>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{text}</p>
        </ArticleContainer>
    );
}

export default Article;