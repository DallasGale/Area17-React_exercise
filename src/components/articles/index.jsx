import React from 'react';
import ArticlesGrid from './articles-grid/articlesGrid.component.jsx';
import './styles.scss';

const Articles = () => {
    return (
        <section className='articles'>
            <ArticlesGrid />
        </section>
    );
}

export default Articles;