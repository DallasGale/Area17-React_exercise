import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TrendingTitle = ( props) => {

    const { title } = props;

    return (
        <h2 className='trending-title'>
           { title }
        </h2>
    )
};

TrendingTitle.propTypes = {
    title: PropTypes.string
}

TrendingTitle.defaultProps = {
    title: "Trending Title Text"
};

export default TrendingTitle;










