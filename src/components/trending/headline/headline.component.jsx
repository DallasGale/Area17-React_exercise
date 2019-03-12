import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TrendingHeadline = ( props) => {

    const { text } = props;

    return (
        <h2 className='trending-headline'>
           { text }
        </h2>
    )
};

TrendingHeadline.propTypes = {
    text: PropTypes.string
}

TrendingHeadline.defaultProps = {
    text: "Trending Title"
};

export default TrendingHeadline;










