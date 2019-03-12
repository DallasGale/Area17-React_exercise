import React from 'react';
import Avatar from '../avatar/avatar.component.jsx';
import './styles.scss';

const AuthorDetails = ( props) => {

    const { avatar, name, description } = props;

    return (
        <div className="author-details">
            <div className="author-details__avatar">
                <Avatar avatar={avatar} />
            </div>

            <div className="author-details__details">
                <h3 className="author-details__name">
                    By { name }
                </h3>
                <h3 className="author-details__description">
                    { description }
                </h3>
            </div>
        </div>
    );
};

export default AuthorDetails;
