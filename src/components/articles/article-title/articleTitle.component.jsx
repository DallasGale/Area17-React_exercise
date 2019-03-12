import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ArticleTitle = ( props) => {

    const { title, isFeatureTitle } = props;

    return (
        <h2 className={`article-title  ${isFeatureTitle ? 'article-title__feature' : ''}`}>
           { title }
           <span className="hovered-bottom-border"></span>
        </h2>
    )
};

ArticleTitle.propTypes = {
    featureTitle: PropTypes.bool,
    title: PropTypes.string
}

ArticleTitle.defaultProps = {
    isFeatureTitle: false,
    title: "Article Title Text"
};

export default ArticleTitle;










