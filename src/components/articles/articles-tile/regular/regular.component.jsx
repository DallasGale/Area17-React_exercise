import React from 'react';
import PropTypes from 'prop-types';
import AuthorDetails from '../../../authorDetails/authorDetails.component.jsx'
import ArticleTitle from '../../article-title/articleTitle.component.jsx';
import { ShareIconGrey, ShareIconRed } from '../../../icons/icons.component';
import './styles.scss';


const RegularTile = ( props) => {

    const { 
        authorAvatar,
        authorDescription,
        authorName, 
        backgroundImg, 
        cellPosition, 
        mobile,
        title } = props;

    return (   
        <div className={`regular-tile  articles__cell-position--${cellPosition}`}>
            { 
                mobile ? (
                    <>
                        <span className="regular-tile__contents" style={{ backgroundImage: `url('${backgroundImg}')`}} />
                        <div className="regular-tile__article-details">
                            <div className="regular-tile__article-details-container">
                                <div className="regular-tile__article-details-title-row">
                                    <ArticleTitle title={ title } />
                                </div>
                                <div className="regular-tile__article-details-author-row">
                                    <AuthorDetails avatar={ authorAvatar } name={ authorName } description={ authorDescription } />
                                </div>
                                <div className="regular-tile__share">
                                    { !mobile ? ( <ShareIconGrey /> ) : (<><ShareIconRed /><span>Share</span></> ) }
                                </div>
                            </div>
                        </div>
                    </>

            ) : (
                <span className="regular-tile__contents" style={{ backgroundImage: `url('${backgroundImg}')` }}>
                    <div className="regular-tile__article-details">
                        <div className="regular-tile__article-details-container">
                            <div className="regular-tile__article-details-title-row">
                                <ArticleTitle title={ title } />
                            </div>
                            <div className="regular-tile__article-details-author-row">
                                <AuthorDetails avatar={ authorAvatar } name={ authorName } description={ authorDescription } />
                            </div>
                            <div className="regular-tile__share">
                                { !mobile ? ( <ShareIconGrey /> ) : (<><ShareIconRed /><span>Share</span></> ) }
                            </div>
                        </div>
                    </div>
                </span>
                )
            }
        </div>
       
    )
};

RegularTile.propTypes = {
    authorAvatar: PropTypes.string,
    authorDescription: PropTypes.string,
    authorName: PropTypes.string,
    backgroundImg: PropTypes.string,
    cellPosition: PropTypes.string,
    mobile: PropTypes.bool,
    title: PropTypes.string
}

RegularTile.defaultProps = {
    authorAvatar: "https://randomuser.me/api/portraits/women/46.jpg",
    authorDescription: "Placeholder for author description.",
    authorName: "Author Name", 
    backgroundImg: "http://lorempixel.com/800/600/fashion/", 
    cellPosition: "1", 
    featureTitle: false,
    mobile: false,
    title: "Placeholder for title of Article"
};

export default RegularTile;










