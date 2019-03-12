import React from "react"
import PropTypes from "prop-types"
import ArticleTitle from '../../article-title/articleTitle.component.jsx';
import AuthorDetails from '../../../authorDetails/authorDetails.component.jsx';
import { ShareIconGrey, ShareIconRed } from '../../../icons/icons.component';
import "./styles.scss"

const FeatureTile = props => {
  const {
    authorAvatar,
    authorDescription,
    authorName,
    backgroundImg,
    cellPosition,
    mobile,
    title,
  } = props

  // Mobile view has different layout to desktop view

  return (
    <div className={`feature-tile  articles__cell-position--${cellPosition}`}>
      {mobile ? (
        <>
          <span className="feature-tile__contents" style={{ backgroundImage: `url('${backgroundImg}')` }}/>
            <div className="feature-tile__article-details">
              <div className="feature-tile__article-details-container">
                <div className="feature-tile___article-details-title-row">
                    <ArticleTitle title={ title } />
                </div>
                <div className="feature-tile___article-details-author-row">
                    <AuthorDetails avatar={ authorAvatar } name={ authorName } description={ authorDescription } />
                </div>
                <div className="feature-tile__share">
                    { !mobile ? ( <ShareIconGrey /> ) : (<><ShareIconRed /><span>Share</span></> ) }
                </div>
              </div>
            </div>
        </>
      ) : (
        <span className="feature-tile__contents" style={{ backgroundImage: `url('${backgroundImg}')` }}>
          <div className="feature-tile__article-details">
            <div className="feature-tile__article-details-container">
              <div className="feature-tile__article-details-title-row">
                <ArticleTitle title={ title } />
              </div>
              <div className="feature-tile__article-details-author-row">
                  <AuthorDetails avatar={ authorAvatar } name={ authorName } description={ authorDescription } />
              </div>
              <div className="feature-tile__share">
                  { !mobile ? ( <ShareIconGrey /> ) : (<><ShareIconRed /><span>Share</span></> ) }
              </div>
            </div>
          </div>
        </span>
      )}
    </div>
  )
}

FeatureTile.propTypes = {
  authorAvatar: PropTypes.string,
  authorDescription: PropTypes.string,
  authorName: PropTypes.string,
  backgroundImg: PropTypes.string,
  mobile: PropTypes.bool,
  title: PropTypes.string,
}

FeatureTile.defaultProps = {
  authorAvatar: "https://randomuser.me/api/portraits/women/46.jpg",
  authorDescription: "Author description.",
  authorName: "Author Name",
  backgroundImg: "http://lorempixel.com/800/600/fashion/",
  isFeatureTitle: false,
  mobile: false,
  title: "Title of Feature Article",
}

export default FeatureTile
