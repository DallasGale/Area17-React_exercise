import React from 'react';
import './styles.scss';


const TrendingThumbnail = (props) => {
    const { thumbnailImg, thumbnailAlt } = props;
    return (
        <div className="thumbnail"  style={{ backgroundImage: `url(${thumbnailImg})`}} alt={`${thumbnailAlt}`}/>
    );
}

export default TrendingThumbnail;