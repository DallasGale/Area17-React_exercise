import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Avatar = ( props) => {

    const { avatar } = props;

    return (
        <div className="avatar" style={{ backgroundImage: `url('${avatar}')` }} />
    )
};


Avatar.propTypes = {
    avatar: PropTypes.string
}

export default Avatar;









