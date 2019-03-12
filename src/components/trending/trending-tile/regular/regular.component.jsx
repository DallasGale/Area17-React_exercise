import React from 'react';
import AuthorDetails from '../../../authorDetails/authorDetails.component.jsx';
import TrendingTitle from '../../trending-title/trendingTitle.component.jsx';
import TrendingThumbnail from '../../trending-thumbnail/trendingThumbnail.jsx';
import { ShareIconRed } from '../../../icons/icons.component';
import PropTypes from 'prop-types';
import './styles.scss';

const TrendingTileRegular = (props) => {

    const { 
        authorAvatar,
        authorDescription,
        authorName, 
        thumbnailImg,
        mobile,
        title } = props;

    return (
        <div className="trending-tile__regular">
            <span className="trending__tile-contents">
                <div className="trending-details">
                    <div className="trending-details__container">
                        { mobile ? (
                            <div className="trending-details__mobile-grid">
                                <div className="trending-details__thumbnail">
                                    <TrendingThumbnail thumbnailImg={ thumbnailImg } />
                                </div>
                                <div className="trending-details__content">
                                    <div className="trending-details__title-row">
                                        <TrendingTitle title={title} />
                                    </div>

                                    <div className="trending-details__author-row">
                                        <AuthorDetails 
                                            avatar={ authorAvatar } 
                                            name={ authorName } 
                                            description={ authorDescription } />
                                    </div>
                                </div>
                            </div>
                            ) : (
                                <>
                                    <div className="trending-details__title-row">
                                        <TrendingTitle title={title} />
                                    </div>

                                    <div className="trending-details__author-row">
                                        <AuthorDetails 
                                            avatar={ authorAvatar } 
                                            name={ authorName } 
                                            description={ authorDescription } />
                                    </div>
                                    <div className="trending-details__share">
                                        <ShareIconRed />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </span>
        </div>
    )
};

TrendingTileRegular.propTypes = {
    authorAvatar: PropTypes.string,
    authorDescription: PropTypes.string,
    authorName: PropTypes.string,
    mobile: PropTypes.bool,
    title: PropTypes.string
}

TrendingTileRegular.defaultProps = {
    authorAvatar: "https://randomuser.me/api/portraits/women/46.jpg",
    authorDescription: "Author description.",
    authorName: "Author Name", 
    mobile: false,
    title: "Title of Treindg Article",
    // thumbnailImg: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
};


export default TrendingTileRegular;

