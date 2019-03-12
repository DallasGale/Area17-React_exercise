import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const HeroTile = (props) => {

    const { backgroundImg } = props;

    return (
        <div className='hero-tile' style={{ backgroundImage: `url('${backgroundImg}')` }}>
            <span className="hero-tile__contents" />
        </div>
    )
};

HeroTile.propTypes = {
    backgroundImg: PropTypes.string
}

HeroTile.defaultProps = {
    backgroundImg: "../images/articleBackgrounds/marshmallow.jpeg"
  };


export default HeroTile;













